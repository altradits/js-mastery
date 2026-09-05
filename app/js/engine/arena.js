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

  createMatch({ mode = "gauntlet", wager = 0, challengeIdx = null }) {
    const user = store.getState().user;
    const isLenient = (mode === "gauntlet" || mode === "custom" || mode === "solo");

    // Practice modes have 0 entry wager (pure reward bounties)
    const effectiveWager = isLenient ? 0 : wager;

    if (effectiveWager > 0 && !store.deductWager(effectiveWager)) {
      alert("Insufficient coins to place wager! Click +FAUCET in the top bar for free coins.");
      return null;
    }

    if (effectiveWager > 0) sound.playCoin();

    let startIdx = 0;
    let matchChallenges = [];

    if (mode === "gauntlet") {
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

    // Calculate Dynamic Bounty: Base 100 + 5 per challenge level
    const dynamicBounty = 100 + (startIdx * 5);
    const pot = effectiveWager > 0 ? (effectiveWager * playerCount) : dynamicBounty;
    const targetTime = Math.min(120, Math.max(45, 45 + Math.floor(startIdx / 10) * 5));

    const match = {
      id: "match_" + Date.now(),
      mode,
      wager: effectiveWager,
      pot,
      round: 1,
      maxRounds: matchChallenges.length,
      isLenient,
      targetTime,
      elapsedSeconds: 0,
      timeLeft: targetTime,
      totalTime: targetTime,
      isRunning: true,
      challengeIdx: startIdx,
      challenges: matchChallenges,
      currentChallenge: matchChallenges[0],
      players,
      isSequential: (mode === "gauntlet"),
      status: "playing",
      rewardSummary: null
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
    match.elapsedSeconds = 0;
    match.timeLeft = match.totalTime;
    match.status = "playing";
    match.rewardSummary = null;

    store.setState({ match: { ...match } });

    // 1. Timer Loop
    this.timerInterval = setInterval(() => {
      const curr = store.getState().match;
      if (!curr || !curr.isRunning || curr.status !== "playing") return;

      if (curr.isLenient) {
        curr.elapsedSeconds++;
        store.setState({ match: { ...curr } });
      } else {
        if (curr.timeLeft <= 1) {
          this.endRound();
        } else {
          curr.timeLeft--;
          if (curr.timeLeft <= 10) {
            sound.playTick();
          }
          store.setState({ match: { ...curr } });
        }
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
      const baseSpeed = match.targetTime - (ai.skill * (match.targetTime * 0.6));
      const jitter = (Math.random() - 0.5) * 8;
      const targetTime = Math.max(8, Math.min(match.targetTime + 15, baseSpeed + jitter));

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
    if (!human) return;

    if (isPass) {
      human.hasSubmitted = true;
      human.solvedTime = match.isLenient ? match.elapsedSeconds : (match.totalTime - match.timeLeft);
      sound.playSuccess();
      store.setState({ match: { ...match } });
      if (match.isLenient) {
        setTimeout(() => this.endRound(), 600);
        return;
      }
    } else {
      sound.playFail();
      if (!match.isLenient) {
        human.hasSubmitted = true;
      }
      store.setState({ match: { ...match } });
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
      store.recordDefeat(match.wager);
      store.setState({ match: { ...match }, currentView: "victory" });
      return;
    }

    // Determine Speed Bonus
    const beatTarget = human.solvedTime !== null && human.solvedTime <= match.targetTime;
    const bonusCoins = beatTarget ? 50 : 0;
    const mmrGain = beatTarget ? 50 : 25;

    // Atomically award reward, accumulate coins, win streak, and MMR
    const rewardSummary = store.awardChallengeVictory({
      rewardCoins: match.pot,
      bonusCoins,
      mmrGain,
      challengeIdx: match.challengeIdx,
      challengeDir: match.currentChallenge.dir
    });

    match.rewardSummary = rewardSummary;
    match.status = "victory";

    sound.playCoin();
    sound.playVictory();

    // In sequential Gauntlet mode, automatically promote and switch to next challenge
    if (match.mode === "gauntlet" && (match.challengeIdx + 1) < CHALLENGE_BANK.length) {
      const nextIdx = match.challengeIdx + 1;
      setTimeout(() => {
        this.createMatch({ mode: "gauntlet", challengeIdx: nextIdx, wager: 0 });
      }, 600);
      return;
    }

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
