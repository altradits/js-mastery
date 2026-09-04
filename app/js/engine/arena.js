import { CHALLENGE_BANK } from "./challenges.js";
import { store } from "../state/store.js";
import { sound } from "./audio.js";

const AI_NAMES = [
  { name: "ByteNinja", avatar: "🥷", skill: 0.85 },
  { name: "AsyncQueen", avatar: "👑", skill: 0.90 },
  { name: "NullPointer", avatar: "💀", skill: 0.65 },
  { name: "SyntaxGod", avatar: "⚡", skill: 0.95 },
  { name: "Rustacean", avatar: "🦀", skill: 0.88 },
  { name: "ClosureWizard", avatar: "🧙‍♂️", skill: 0.78 },
  { name: "AlgoBeast", avatar: "🐺", skill: 0.82 }
];

class ArenaEngine {
  constructor() {
    this.timerInterval = null;
    this.aiIntervals = [];
  }

  createMatch({ mode = "royale", wager = 100 }) {
    const user = store.getState().user;
    if (!store.deductWager(wager)) {
      alert("Insufficient coins to place wager!");
      return null;
    }

    sound.playCoin();

    const playerCount = mode === "duel" ? 2 : mode === "solo" ? 1 : 8;
    const selectedAIs = AI_NAMES.slice(0, playerCount - 1);

    const players = [
      { id: "player", name: user.username, avatar: user.avatar, isHuman: true, alive: true, solvedTime: null, hasSubmitted: false },
      ...selectedAIs.map((ai, i) => ({
        id: `ai_${i}`,
        name: ai.name,
        avatar: ai.avatar,
        skill: ai.skill,
        isHuman: false,
        alive: true,
        solvedTime: null,
        hasSubmitted: false
      }))
    ];

    // Pick 4 sequential challenges
    const startIdx = Math.floor(Math.random() * (CHALLENGE_BANK.length - 6));
    const matchChallenges = CHALLENGE_BANK.slice(startIdx, startIdx + 4);

    const pot = wager * playerCount;

    const match = {
      id: "match_" + Date.now(),
      mode,
      wager,
      pot,
      round: 1,
      maxRounds: mode === "solo" ? 3 : Math.min(4, matchChallenges.length),
      timeLeft: 45,
      totalTime: 45,
      isRunning: true,
      challenges: matchChallenges,
      currentChallenge: matchChallenges[0],
      players,
      status: "playing" // "playing" | "round_summary" | "victory" | "defeated"
    };

    store.setState({ match, currentView: "arena" });
    this.startRound();
    return match;
  }

  startRound() {
    this.stopTimers();
    const state = store.getState();
    const match = state.match;
    if (!match) return;

    // Reset round state for active players
    match.players.forEach(p => {
      p.solvedTime = null;
      p.hasSubmitted = false;
    });

    match.currentChallenge = match.challenges[match.round - 1] || match.challenges[0];
    match.timeLeft = 45;
    match.totalTime = 45;
    match.status = "playing";

    store.setState({ match: { ...match } });

    // 1. Timer countdown loop
    this.timerInterval = setInterval(() => {
      const curr = store.getState().match;
      if (!curr || !curr.isRunning) return;

      if (curr.timeLeft <= 1) {
        this.endRound();
      } else {
        curr.timeLeft--;
        if (curr.timeLeft <= 10) {
          sound.playTick();
        }
        store.setState({ match: { ...curr } });
      }
    }, 1000);

    // 2. Simulate AI progress
    this.simulateAICompetitors();
  }

  simulateAICompetitors() {
    const match = store.getState().match;
    if (!match) return;

    const aliveAIs = match.players.filter(p => !p.isHuman && p.alive);

    aliveAIs.forEach(ai => {
      // Time between 8s and 40s based on AI skill
      const baseSpeed = 45 - ai.skill * 30;
      const jitter = (Math.random() - 0.5) * 10;
      const targetTime = Math.max(6, Math.min(43, baseSpeed + jitter));

      const delayMs = targetTime * 1000;

      const tId = setTimeout(() => {
        const currMatch = store.getState().match;
        if (!currMatch || currMatch.status !== "playing") return;

        const p = currMatch.players.find(x => x.id === ai.id);
        if (p && p.alive && !p.hasSubmitted) {
          // Check if AI passes
          const willPass = Math.random() < ai.skill;
          p.hasSubmitted = true;
          if (willPass) {
            p.solvedTime = targetTime;
          }
          store.setState({ match: { ...currMatch } });
        }
      }, delayMs);

      this.aiIntervals.push(tId);
    });
  }

  submitUserSolution(isPass) {
    const match = store.getState().match;
    if (!match || match.status !== "playing") return;

    const human = match.players.find(p => p.isHuman);
    if (!human || human.hasSubmitted) return;

    human.hasSubmitted = true;
    if (isPass) {
      human.solvedTime = match.totalTime - match.timeLeft;
      sound.playSuccess();
    } else {
      sound.playFail();
    }

    store.setState({ match: { ...match } });

    // If all alive players submitted, end round immediately
    const alivePlayers = match.players.filter(p => p.alive);
    if (alivePlayers.every(p => p.hasSubmitted)) {
      setTimeout(() => this.endRound(), 800);
    }
  }

  endRound() {
    this.stopTimers();
    const match = store.getState().match;
    if (!match) return;

    const human = match.players.find(p => p.isHuman);

    // Determine who survives
    const solvedPlayers = match.players.filter(p => p.alive && p.solvedTime !== null);

    // If human failed or timed out
    if (!human.hasSubmitted || human.solvedTime === null) {
      human.alive = false;
      sound.playElimination();
      match.status = "defeated";
      store.updateUser({ losses: store.getState().user.losses + 1 });
      store.setState({ match: { ...match }, currentView: "victory" });
      return;
    }

    // Eliminate slowest players in Royale mode
    if (match.mode === "royale") {
      // Sort by fastest time
      solvedPlayers.sort((a, b) => a.solvedTime - b.solvedTime);

      // Eliminate players who didn't solve, plus the slowest if too many survived
      const targetSurviving = Math.max(1, Math.ceil(match.players.filter(p => p.alive).length / 2));
      const survivors = solvedPlayers.slice(0, targetSurviving);

      match.players.forEach(p => {
        if (!survivors.some(s => s.id === p.id)) {
          p.alive = false;
        }
      });
    }

    const aliveCount = match.players.filter(p => p.alive).length;

    // Check Victory condition
    if (aliveCount <= 1 || match.round >= match.maxRounds) {
      if (human.alive) {
        sound.playVictory();
        match.status = "victory";
        store.addCoins(match.pot);
        store.updateUser({
          wins: store.getState().user.wins + 1,
          mmr: store.getState().user.mmr + 50
        });
      } else {
        sound.playElimination();
        match.status = "defeated";
        store.updateUser({ losses: store.getState().user.losses + 1 });
      }
      store.setState({ match: { ...match }, currentView: "victory" });
    } else {
      // Advance to next round
      sound.playElimination();
      match.round++;
      store.setState({ match: { ...match } });
      setTimeout(() => this.startRound(), 2500);
    }
  }

  stopTimers() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.aiIntervals.forEach(t => clearTimeout(t));
    this.aiIntervals = [];
  }
}

export const arena = new ArenaEngine();
