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

  createMatch({ mode = "gauntlet", wager = 50, challengeIdx = null }) {
    const user = store.getState().user;
    if (wager > 0 && !store.deductWager(wager)) {
      alert("Insufficient coins to place wager! Click +FAUCET in the top bar for free coins.");
      return null;
    }

    if (wager > 0) sound.playCoin();

    let startIdx = 0;
    let matchChallenges = [];
    let isSequential = false;

    if (mode === "gauntlet") {
      isSequential = true;
      startIdx = challengeIdx !== null ? challengeIdx : (user.currentProgressIdx || 0);
      if (startIdx >= CHALLENGE_BANK.length) startIdx = 0;
      matchChallenges = [CHALLENGE_BANK[startIdx]];
    } else if (mode === "custom") {
      startIdx = challengeIdx !== null ? challengeIdx : 0;
      matchChallenges = [CHALLENGE_BANK[startIdx]];
    } else if (mode === "duel") {
      startIdx = Math.floor(Math.random() * CHALLENGE_BANK.length);
      matchChallenges = [CHALLENGE_BANK[startIdx]];
    } else if (mode === "royale") {
      startIdx = Math.floor(Math.random() * (CHALLENGE_BANK.length - 4));
      matchChallenges = CHALLENGE_BANK.slice(startIdx, startIdx + 4);
    } else { // solo
      startIdx = user.currentProgressIdx || 0;
      matchChallenges = [CHALLENGE_BANK[startIdx]];
    }

    const playerCount = (mode === "royale") ? 8 : (mode === "duel" || mode === "gauntlet") ? 2 : 1;
    const selectedAIs = AI_NAMES.slice(0, playerCount - 1);

    const players = [
      { id: "player", name: user.username, avatar: user.avatar, isHuman: true, alive: true, solvedTime: null, hasSubmitted: false },
      ...selectedAIs.map((ai, i) => ({
        id: `ai_${i}`,
        name: ai.name,
        avatar: ai.avatar,
        skill: Math.max(0.6, Math.min(0.95, ai.skill + (startIdx / 500))),
        isHuman: false,
        alive: true,
        solvedTime: null,
        hasSubmitted: false
      }))
    ];

    const pot = wager * playerCount;
    const timeLimit = Math.min(90, Math.max(45, 45 + Math.floor(startIdx / 10) * 5));

    const match = {
      id: "match_" + Date.now(),
      mode,
      wager,
      pot: pot > 0 ? pot : 100, // minimum bounty
      round: 1,
      maxRounds: matchChallenges.length,
      timeLeft: timeLimit,
      totalTime: timeLimit,
      isRunning: true,
      challengeIdx: startIdx,
      challenges: matchChallenges,
      currentChallenge: matchChallenges[0],
      players,
      isSequential,
      status: "playing"
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

    match.players.forEach(p => {
      p.solvedTime = null;
      p.hasSubmitted = false;
    });

    const currentIdx = match.round - 1;
    match.currentChallenge = match.challenges[currentIdx] || match.challenges[0];
    match.timeLeft = match.totalTime;
    match.status = "playing";

    store.setState({ match: { ...match } });

    // 1. Countdown timer
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

    // 2. Simulate AI Competitor
    this.simulateAICompetitors();
  }

  simulateAICompetitors() {
    const match = store.getState().match;
    if (!match) return;

    const aliveAIs = match.players.filter(p => !p.isHuman && p.alive);

    aliveAIs.forEach(ai => {
      const baseSpeed = match.totalTime - (ai.skill * (match.totalTime * 0.7));
      const jitter = (Math.random() - 0.5) * 8;
      const targetTime = Math.max(8, Math.min(match.totalTime - 2, baseSpeed + jitter));

      const delayMs = targetTime * 1000;

      const tId = setTimeout(() => {
        const currMatch = store.getState().match;
        if (!currMatch || currMatch.status !== "playing") return;

        const p = currMatch.players.find(x => x.id === ai.id);
        if (p && p.alive && !p.hasSubmitted) {
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

    // In gauntlet or duel, if human passes, end match immediately!
    if (isPass && (match.mode === "gauntlet" || match.mode === "custom" || match.mode === "solo")) {
      setTimeout(() => this.endRound(), 600);
      return;
    }

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
    const isPass = human && human.solvedTime !== null;

    if (!isPass) {
      human.alive = false;
      sound.playElimination();
      match.status = "defeated";
      store.updateUser({ losses: store.getState().user.losses + 1 });
      store.setState({ match: { ...match }, currentView: "victory" });
      return;
    }

    // Mark challenge completed in store and advance sequential level
    store.markChallengeCompleted(match.challengeIdx, match.currentChallenge.dir);

    // If human passed, grant victory & reward
    sound.playVictory();
    match.status = "victory";
    store.addCoins(match.pot);
    store.updateUser({
      wins: store.getState().user.wins + 1,
      mmr: store.getState().user.mmr + 25
    });

    store.setState({ match: { ...match }, currentView: "victory" });
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
