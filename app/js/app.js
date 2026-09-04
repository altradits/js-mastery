import { store } from "./state/store.js";
import { sound } from "./engine/audio.js";
import { arena } from "./engine/arena.js";
import { evaluateSubmission } from "./engine/sandbox.js";
import { CHALLENGE_BANK } from "./engine/challenges.js";

// DOM Elements
const appRoot = document.getElementById("app-root");
const navWalletEl = document.getElementById("nav-wallet");
const navMmrEl = document.getElementById("nav-mmr");
const navNameEl = document.getElementById("nav-name");
const navAvatarEl = document.getElementById("nav-avatar");
const btnSoundEl = document.getElementById("btn-sound");
const btnFreeCoinsEl = document.getElementById("btn-free-coins");
const profilePillEl = document.querySelector(".profile-pill");

// Sound Toggle
btnSoundEl.addEventListener("click", () => {
  const isMuted = sound.toggleMute();
  btnSoundEl.textContent = isMuted ? "🔇" : "🔊";
});

// Free Coins Faucet
if (btnFreeCoinsEl) {
  btnFreeCoinsEl.addEventListener("click", () => {
    store.addCoins(500);
    sound.playCoin();
  });
}

// Profile Modal Trigger
if (profilePillEl) {
  profilePillEl.addEventListener("click", () => {
    sound.playClick();
    store.setState({ isLoginModalOpen: true });
  });
}

// Selected Wagers for Modes
let selectedWagers = {
  royale: 100,
  duel: 250,
  gauntlet: 50
};

// Curriculum Tiers Definition
const CURRICULUM_MODULES = [
  { name: "Foundations & Control Flow", range: [1, 20], icon: "🌱" },
  { name: "Data Structures & Algorithms", range: [21, 50], icon: "📊" },
  { name: "Functional & String Engineering", range: [51, 80], icon: "⚡" },
  { name: "Object Mechanics & Prototypes", range: [81, 110], icon: "🧩" },
  { name: "RegEx, Parsing & Dates", range: [111, 140], icon: "🔍" },
  { name: "Async, Promises & Streams", range: [141, 170], icon: "⏱️" },
  { name: "Real-World Modules & Utilities", range: [171, 200], icon: "🛠️" },
  { name: "Advanced CS Data Structures", range: [201, 216], icon: "🌲" }
];

// View Tracking State to prevent clobbering user input
let activeView = null;
let activeChallengeId = null;

// Main State Subscription
store.subscribe((state) => {
  renderNav(state);
  renderView(state);
  renderModal(state);
});

function renderNav(state) {
  const { user } = state;
  navWalletEl.textContent = `🪙 ${user.coins.toLocaleString()}`;
  navMmrEl.textContent = `LVL ${user.level} • ${user.mmr} MMR`;
  navNameEl.textContent = user.username;
  navAvatarEl.textContent = user.avatar;
}

function renderView(state) {
  const { currentView, match } = state;

  if (currentView === "lobby") {
    activeView = "lobby";
    activeChallengeId = null;
    renderLobbyView(state);
  } else if (currentView === "arena") {
    renderArenaView(match);
  } else if (currentView === "victory") {
    activeView = "victory";
    activeChallengeId = null;
    renderVictoryView(match);
  }
}

// -------------------------------------------------------------
// LOBBY VIEW (Tabs: Arena Modes & Curriculum Roadmap)
// -------------------------------------------------------------
function renderLobbyView(state) {
  const { user, activeLobbyTab } = state;
  const currentChallengeIdx = Math.min(user.currentProgressIdx || 0, CHALLENGE_BANK.length - 1);
  const activeChallenge = CHALLENGE_BANK[currentChallengeIdx] || CHALLENGE_BANK[0];
  const completedCount = (user.completedChallenges || []).length;

  appRoot.innerHTML = `
    <!-- Hero Banner -->
    <div class="lobby-hero">
      <div class="hero-pill">⚡ PISCINE CODING ARENA • 216 ATOMIC CHALLENGES</div>
      <h1 class="hero-title">MASTER JAVASCRIPT. <span>LEVEL BY LEVEL.</span></h1>
      <p class="hero-subtitle">Solve atomic challenges sequentially from beginner to master in timed sudden-death duels, or wage coins in competitive Battle Royales.</p>
    </div>

    <!-- Navigation Tabs -->
    <div class="view-tabs">
      <button class="tab-btn ${activeLobbyTab === 'modes' ? 'active' : ''}" id="tab-btn-modes">
        ⚡ ARENA MODES
      </button>
      <button class="tab-btn ${activeLobbyTab === 'curriculum' ? 'active' : ''}" id="tab-btn-curriculum">
        🗺️ CURRICULUM ROADMAP (${completedCount} / 216)
      </button>
    </div>

    ${activeLobbyTab === 'modes' ? renderModesTab(user, activeChallenge, currentChallengeIdx) : renderCurriculumTab(user)}
  `;

  // Attach Tab Switchers
  document.getElementById("tab-btn-modes").addEventListener("click", () => {
    sound.playClick();
    store.setState({ activeLobbyTab: "modes" });
  });

  document.getElementById("tab-btn-curriculum").addEventListener("click", () => {
    sound.playClick();
    store.setState({ activeLobbyTab: "curriculum" });
  });

  if (activeLobbyTab === "modes") {
    attachModesListeners();
  } else {
    attachCurriculumListeners();
  }
}

function renderModesTab(user, activeChallenge, currentChallengeIdx) {
  return `
    <!-- Sequential Gauntlet Featured Banner -->
    <div class="gauntlet-card">
      <div class="gauntlet-info">
        <span class="gauntlet-level">🔥 SEQUENTIAL PROGRESSION • CHALLENGE #${currentChallengeIdx + 1} OF 216</span>
        <h2 class="gauntlet-title">${activeChallenge.title}</h2>
        <p class="gauntlet-desc">${activeChallenge.concept}</p>
      </div>

      <button class="btn-gauntlet-play" id="btn-start-gauntlet">
        ▶ PLAY LEVEL ${currentChallengeIdx + 1} (DUEL)
      </button>
    </div>

    <!-- Arena Modes Grid -->
    <div class="modes-grid">
      <!-- 8-Player Battle Royale -->
      <div class="mode-card" style="--card-accent: var(--accent-cyan); --btn-color-1: var(--accent-cyan); --btn-color-2: #0088FF;">
        <div>
          <div class="mode-header">
            <span class="mode-icon">⚔️</span>
            <span class="mode-badge" style="border: 1px solid var(--accent-cyan); color: var(--accent-cyan);">8 Players</span>
          </div>
          <h2 class="mode-title">Battle Royale</h2>
          <p class="mode-desc">8 coders enter. Multi-round sudden death elimination bracket. Last programmer standing claims the 8x jackpot pot!</p>
          
          <div class="wager-selector">
            <span class="wager-label">Select Entry Wager</span>
            <div class="wager-pills" data-mode="royale">
              ${[50, 100, 250, 500, 1000].map(w => `
                <button class="wager-pill ${selectedWagers.royale === w ? 'active' : ''}" data-wager="${w}">${w}</button>
              `).join('')}
            </div>
          </div>
        </div>

        <button class="btn-play" id="btn-start-royale">
          ENTER ARENA (🪙 ${(selectedWagers.royale * 8).toLocaleString()} POT)
        </button>
      </div>

      <!-- 1v1 Head-to-Head Duel -->
      <div class="mode-card" style="--card-accent: var(--accent-purple); --btn-color-1: #A855F7; --btn-color-2: #6366F1;">
        <div>
          <div class="mode-header">
            <span class="mode-icon">🎯</span>
            <span class="mode-badge" style="border: 1px solid #A855F7; color: #A855F7;">1v1 Duel</span>
          </div>
          <h2 class="mode-title">1v1 Code Duel</h2>
          <p class="mode-desc">Direct sudden-death duel. First programmer to pass all challenge assertions wins the double stake.</p>
          
          <div class="wager-selector">
            <span class="wager-label">Select Entry Wager</span>
            <div class="wager-pills" data-mode="duel">
              ${[100, 250, 500, 1000, 2500].map(w => `
                <button class="wager-pill ${selectedWagers.duel === w ? 'active' : ''}" data-wager="${w}">${w}</button>
              `).join('')}
            </div>
          </div>
        </div>

        <button class="btn-play" id="btn-start-duel" style="background: linear-gradient(135deg, #A855F7, #6366F1); box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);">
          DUEL NOW (🪙 ${(selectedWagers.duel * 2).toLocaleString()} POT)
        </button>
      </div>
    </div>
  `;
}

function attachModesListeners() {
  // Wager Selectors
  document.querySelectorAll(".wager-pills").forEach(group => {
    const mode = group.dataset.mode;
    group.querySelectorAll(".wager-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        sound.playClick();
        selectedWagers[mode] = Number(btn.dataset.wager);
        renderLobbyView(store.getState());
      });
    });
  });

  // Start Sequential Gauntlet
  document.getElementById("btn-start-gauntlet").addEventListener("click", () => {
    sound.playClick();
    arena.createMatch({ mode: "gauntlet", wager: 50 });
  });

  // Start Battle Royale
  document.getElementById("btn-start-royale").addEventListener("click", () => {
    sound.playClick();
    arena.createMatch({ mode: "royale", wager: selectedWagers.royale });
  });

  // Start 1v1 Duel
  document.getElementById("btn-start-duel").addEventListener("click", () => {
    sound.playClick();
    arena.createMatch({ mode: "duel", wager: selectedWagers.duel });
  });
}

// -------------------------------------------------------------
// CURRICULUM ROADMAP TAB (All 216 Levels)
// -------------------------------------------------------------
function renderCurriculumTab(user) {
  const userProgress = user.currentProgressIdx || 0;
  const completedSet = new Set(user.completedChallenges || []);

  return `
    <div class="curriculum-container">
      ${CURRICULUM_MODULES.map(mod => {
        const [start, end] = mod.range;
        const moduleChallenges = CHALLENGE_BANK.filter(c => c.id >= start && c.id <= end);
        const moduleDone = moduleChallenges.filter(c => completedSet.has(c.dir)).length;

        return `
          <div class="curriculum-module">
            <div class="module-header">
              <div class="module-title">
                <span>${mod.icon}</span>
                <span>${mod.name} (Challenges ${start} – ${end})</span>
              </div>
              <div class="module-progress">
                ${moduleDone} / ${moduleChallenges.length} COMPLETED
              </div>
            </div>

            <div class="challenge-grid">
              ${moduleChallenges.map((c, i) => {
                const challengeIndex = c.id - 1;
                const isCompleted = completedSet.has(c.dir);
                const isCurrent = (challengeIndex === userProgress);
                const isUnlocked = challengeIndex <= userProgress;

                return `
                  <div class="challenge-node ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${!isUnlocked ? 'locked' : ''}" data-index="${challengeIndex}">
                    <div class="node-top">
                      <span class="node-idx">#${String(c.id).padStart(2, '0')}</span>
                      <span class="node-status">
                        ${isCompleted ? '✔ DONE' : isCurrent ? '⚡ PLAY' : isUnlocked ? '🔓 OPEN' : '🔒 LOCKED'}
                      </span>
                    </div>
                    <div class="node-title" title="${c.title}">${c.title.replace(/^\d+\s*—\s*/, '')}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function attachCurriculumListeners() {
  const userProgress = store.getState().user.currentProgressIdx || 0;

  document.querySelectorAll(".challenge-node").forEach(node => {
    const idx = Number(node.dataset.index);
    node.addEventListener("click", () => {
      if (idx <= userProgress) {
        sound.playClick();
        arena.createMatch({ mode: "custom", challengeIdx: idx, wager: 25 });
      } else {
        sound.playFail();
        alert(`🔒 Challenge #${idx + 1} is locked. Complete Challenge #${userProgress + 1} first to unlock!`);
      }
    });
  });
}

// -------------------------------------------------------------
// ARENA VIEW (Fine-grained reactive updates)
// -------------------------------------------------------------
function renderArenaView(match) {
  if (!match) return;

  const challenge = match.currentChallenge;
  const human = match.players.find(p => p.isHuman);

  const isNewRound = (activeView !== "arena" || activeChallengeId !== challenge.id);

  if (isNewRound) {
    activeView = "arena";
    activeChallengeId = challenge.id;

    appRoot.innerHTML = `
      <!-- Top HUD -->
      <div class="arena-header">
        <div class="arena-pot">
          <span>🏆 JACKPOT POOL:</span>
          <span class="pot-amount" id="hud-pot">🪙 ${match.pot.toLocaleString()}</span>
        </div>

        <div style="font-family: var(--font-display); font-weight: 800; font-size: 16px; color: var(--accent-cyan);" id="hud-round">
          ${match.isSequential ? `PISCINE GAUNTLET • LEVEL ${match.challengeIdx + 1}` : `ROUND ${match.round} / ${match.maxRounds} (SUDDEN DEATH)`}
        </div>

        <div class="arena-timer">
          <span>⏱️ TIME:</span>
          <span class="timer-ring ${match.timeLeft <= 10 ? 'danger' : ''}" id="hud-timer">${String(match.timeLeft).padStart(2, '0')}s</span>
        </div>
      </div>

      <!-- Main Arena Grid -->
      <div class="arena-grid">
        <!-- Left: Player Radar -->
        <div class="radar-panel">
          <div class="radar-title">
            <span>SURVIVORS RADAR</span>
            <span style="color: var(--accent-emerald);" id="hud-alive-count">${match.players.filter(p => p.alive).length} ALIVE</span>
          </div>

          <div class="player-list" id="hud-player-list">
            ${renderPlayerTiles(match.players)}
          </div>
        </div>

        <!-- Right: Challenge & Code Editor Area -->
        <div class="arena-workspace">
          <div class="challenge-prompt">
            <div class="challenge-title" id="prompt-title">${challenge.title}</div>
            <div class="challenge-concept" id="prompt-concept">${challenge.concept}</div>
            <div class="challenge-task" id="prompt-task">${challenge.task}</div>
          </div>

          <div class="editor-container">
            <div class="editor-header">
              <div class="editor-title">
                <span>solution.js</span>
                <span class="editor-badge">ESM JavaScript</span>
              </div>
              <div style="font-size: 11px; color: var(--text-muted);" id="prompt-round-tag">
                Challenge #${challenge.id} Target
              </div>
            </div>

            <div class="editor-body">
              <div class="line-numbers" id="editor-lines">1<br>2<br>3<br>4<br>5</div>
              <textarea class="code-textarea" id="code-input" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off">${challenge.solutionStub}</textarea>
            </div>

            <div class="editor-footer">
              <div class="shortcut-tip">Press <kbd>Cmd</kbd> + <kbd>Enter</kbd> to Run & Submit</div>
              <button class="btn-submit" id="btn-submit-code" ${human && human.hasSubmitted ? 'disabled' : ''}>
                ${human && human.hasSubmitted ? 'SUBMITTED' : '🚀 RUN & SUBMIT'}
              </button>
            </div>
          </div>

          <!-- Terminal Console -->
          <div class="terminal-console">
            <div class="terminal-header">
              <span>TEST VERIFICATION CONSOLE</span>
              <span class="status-pill idle" id="test-status-pill">AWAITING RUN</span>
            </div>
            <div id="test-console-output" style="color: var(--text-muted);">Click 'Run & Submit' to execute assertions in the safe sandbox.</div>
          </div>
        </div>
      </div>
    `;

    // Code Input Textarea Handling
    const textarea = document.getElementById("code-input");
    const linesEl = document.getElementById("editor-lines");

    const updateLineNumbers = () => {
      const count = textarea.value.split("\n").length;
      linesEl.innerHTML = Array.from({ length: Math.max(5, count) }, (_, i) => i + 1).join("<br>");
    };

    textarea.addEventListener("input", updateLineNumbers);
    updateLineNumbers();

    // Tab & Submit shortcut
    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + "  " + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 2;
        updateLineNumbers();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
      }
    });

    const handleSubmit = async () => {
      const userCode = textarea.value;
      const btnSubmit = document.getElementById("btn-submit-code");
      const statusPill = document.getElementById("test-status-pill");
      const consoleOut = document.getElementById("test-console-output");

      btnSubmit.disabled = true;
      btnSubmit.textContent = "EXECUTING...";

      const evalResult = await evaluateSubmission(userCode, challenge);

      if (evalResult.success) {
        statusPill.className = "status-pill pass";
        statusPill.textContent = `STATUS: PASS (${evalResult.duration}ms)`;
        consoleOut.innerHTML = `<span style="color: var(--accent-emerald);">✔ All challenge test assertions passed cleanly!</span>`;
        arena.submitUserSolution(true);
      } else {
        statusPill.className = "status-pill fail";
        statusPill.textContent = `STATUS: FAIL (${evalResult.duration}ms)`;
        consoleOut.innerHTML = `
          <span style="color: var(--accent-crimson);">✖ Evaluation Failed:</span><br>
          ${evalResult.results.map(r => `• ${r.name}: ${r.pass ? '<span style="color: var(--accent-emerald);">PASS</span>' : `<span style="color: var(--accent-crimson);">${r.error || 'FAIL'}</span>`}`).join("<br>")}
        `;
        btnSubmit.disabled = false;
        btnSubmit.textContent = "🚀 RUN & SUBMIT";
        arena.submitUserSolution(false);
      }
    };

    document.getElementById("btn-submit-code").addEventListener("click", handleSubmit);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }, 50);

  } else {
    // Fine-grained updates on tick
    const timerEl = document.getElementById("hud-timer");
    if (timerEl) {
      timerEl.textContent = `${String(match.timeLeft).padStart(2, '0')}s`;
      if (match.timeLeft <= 10) {
        timerEl.classList.add("danger");
      } else {
        timerEl.classList.remove("danger");
      }
    }

    const aliveCountEl = document.getElementById("hud-alive-count");
    if (aliveCountEl) {
      aliveCountEl.textContent = `${match.players.filter(p => p.alive).length} ALIVE`;
    }

    const playerListEl = document.getElementById("hud-player-list");
    if (playerListEl) {
      playerListEl.innerHTML = renderPlayerTiles(match.players);
    }

    const btnSubmit = document.getElementById("btn-submit-code");
    if (btnSubmit && human && human.hasSubmitted && !btnSubmit.disabled) {
      btnSubmit.disabled = true;
      btnSubmit.textContent = "SUBMITTED";
    }
  }
}

function renderPlayerTiles(players) {
  return players.map(p => `
    <div class="player-tile ${p.isHuman ? 'is-human' : ''} ${!p.alive ? 'eliminated' : ''} ${p.solvedTime !== null ? 'solved' : ''}">
      <div class="player-info">
        <span>${p.avatar}</span>
        <span style="font-weight: 700; font-size: 13px;">${p.name} ${p.isHuman ? '(YOU)' : ''}</span>
      </div>
      <span style="font-family: var(--font-code); font-size: 11px; font-weight: 700;">
        ${!p.alive ? '💀 OUT' : p.solvedTime !== null ? `✔ ${p.solvedTime.toFixed(1)}s` : p.hasSubmitted ? '⏳ CHECK' : '💻 CODING'}
      </span>
    </div>
  `).join('');
}

// -------------------------------------------------------------
// VICTORY / DEFEAT MODAL VIEW
// -------------------------------------------------------------
function renderVictoryView(match) {
  if (!match) return;

  const isWin = match.status === "victory";
  const user = store.getState().user;
  const nextChallengeIdx = (match.challengeIdx !== undefined) ? match.challengeIdx + 1 : user.currentProgressIdx;
  const hasNext = nextChallengeIdx < CHALLENGE_BANK.length;

  appRoot.innerHTML = `
    <div class="modal-overlay">
      <div class="modal-card">
        <div class="modal-icon">${isWin ? '🏆' : '💀'}</div>
        <h2 class="modal-title ${isWin ? 'win' : 'lose'}">${isWin ? 'LEVEL MASTERED!' : 'TIME OUT / ELIMINATED!'}</h2>
        <p style="color: var(--text-secondary); font-size: 14px;">
          ${isWin ? `Congratulations! You conquered Challenge #${match.currentChallenge.id}. Level progress saved.` : 'You did not pass the challenge in time. Review the concept and try again!'}
        </p>

        ${isWin ? `
          <div class="payout-box">
            <span style="font-size: 12px; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">REWARD EARNED</span>
            <div class="payout-amount">+🪙 ${match.pot.toLocaleString()}</div>
          </div>
        ` : `
          <div style="margin: 20px 0; font-family: var(--font-display); font-weight: 700; color: var(--text-muted);">
            LOST ENTRY WAGER: 🪙 ${match.wager.toLocaleString()}
          </div>
        `}

        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${isWin && hasNext ? `
            <button class="btn-play" id="btn-next-level" style="background: linear-gradient(135deg, var(--accent-emerald), #059669); box-shadow: 0 4px 20px var(--accent-emerald-glow);">
              ▶ NEXT LEVEL (CHALLENGE #${nextChallengeIdx + 1})
            </button>
          ` : ''}

          <button class="btn-play" id="btn-return-lobby" style="${isWin && hasNext ? 'background: rgba(255,255,255,0.08); color: #fff; box-shadow: none;' : ''}">
            RETURN TO LOBBY
          </button>
        </div>
      </div>
    </div>
  `;

  if (isWin && hasNext) {
    document.getElementById("btn-next-level").addEventListener("click", () => {
      sound.playClick();
      arena.createMatch({ mode: "gauntlet", challengeIdx: nextChallengeIdx, wager: 50 });
    });
  }

  document.getElementById("btn-return-lobby").addEventListener("click", () => {
    sound.playClick();
    store.setState({ currentView: "lobby", match: null });
  });
}

// -------------------------------------------------------------
// PLAYER LOGIN & PROFILE MODAL
// -------------------------------------------------------------
function renderModal(state) {
  const existingModal = document.getElementById("profile-modal-overlay");
  if (!state.isLoginModalOpen) {
    if (existingModal) existingModal.remove();
    return;
  }

  if (existingModal) return;

  const { user } = state;
  const avatars = ["⚡", "🥷", "👑", "🧙‍♂️", "🐺", "🦀", "🤖", "🚀", "🎯", "💎"];
  let selectedAvatar = user.avatar || "⚡";

  const modalOverlay = document.createElement("div");
  modalOverlay.id = "profile-modal-overlay";
  modalOverlay.className = "modal-overlay";

  modalOverlay.innerHTML = `
    <div class="modal-card profile-modal">
      <div class="profile-modal-header">
        <h2>👤 Player Profile & Account Login</h2>
        <button class="icon-btn" id="btn-close-modal">✕</button>
      </div>

      <div class="stats-grid">
        <div class="stat-box">
          <div class="stat-number">${(user.completedChallenges || []).length} / 216</div>
          <div class="stat-label">Mastered</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">LVL ${user.level}</div>
          <div class="stat-label">Level</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">${user.mmr}</div>
          <div class="stat-label">MMR</div>
        </div>
      </div>

      <label class="input-label">Choose Cyber Avatar</label>
      <div class="avatar-grid" id="modal-avatar-grid">
        ${avatars.map(a => `
          <button class="avatar-choice ${a === selectedAvatar ? 'selected' : ''}" data-avatar="${a}">${a}</button>
        `).join('')}
      </div>

      <label class="input-label">Hacker Handle / Username</label>
      <input type="text" class="text-input" id="modal-username-input" value="${user.username}" placeholder="Enter username..." />

      <div style="display: flex; gap: 10px; margin-top: 10px;">
        <button class="btn-play" id="btn-save-profile" style="flex: 2;">
          💾 SAVE & LOGIN
        </button>
        <button class="btn-play" id="btn-reset-user" style="flex: 1; background: rgba(255, 42, 95, 0.15); border: 1px solid var(--accent-crimson); color: var(--accent-crimson); box-shadow: none;">
          RESET
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  // Avatar Selection
  modalOverlay.querySelectorAll(".avatar-choice").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedAvatar = btn.dataset.avatar;
      modalOverlay.querySelectorAll(".avatar-choice").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  // Close Modal
  document.getElementById("btn-close-modal").addEventListener("click", () => {
    store.setState({ isLoginModalOpen: false });
  });

  // Save / Login Profile
  document.getElementById("btn-save-profile").addEventListener("click", () => {
    const inputVal = document.getElementById("modal-username-input").value;
    store.login(inputVal, selectedAvatar);
    sound.playSuccess();
  });

  // Reset Progress
  document.getElementById("btn-reset-user").addEventListener("click", () => {
    if (confirm("Reset career progress and start back at Level 1 (Challenge 01)?")) {
      store.resetProgress();
      store.setState({ isLoginModalOpen: false });
      sound.playFail();
    }
  });
}

// Initial Boot
renderNav(store.getState());
renderView(store.getState());
