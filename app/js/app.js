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

// Time Formatter Utility
function formatDuration(sec) {
  const s = Math.max(0, Math.floor(sec || 0));
  if (s < 60) return `${s}s`;
  const mins = Math.floor(s / 60);
  const rem = s % 60;
  return `${mins}m ${rem}s`;
}

// In-Browser Prettier Code Formatter
async function formatJavaScriptCode(code) {
  if (window.prettier && window.prettierPlugins && code.trim()) {
    try {
      const formatted = await window.prettier.format(code, {
        parser: "babel",
        plugins: window.prettierPlugins,
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "none",
        arrowParens: "always"
      });
      return formatted.trim();
    } catch (err) {
      return code;
    }
  }
  return code;
}

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
  gauntlet: 0
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

// View Tracking State
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
// LOBBY VIEW (Compact Zero-Scroll Fit)
// -------------------------------------------------------------
function renderLobbyView(state) {
  const { user, activeLobbyTab } = state;
  const currentChallengeIdx = Math.min(user.currentProgressIdx || 0, CHALLENGE_BANK.length - 1);
  const activeChallenge = CHALLENGE_BANK[currentChallengeIdx] || CHALLENGE_BANK[0];
  const completedCount = (user.completedChallenges || []).length;

  appRoot.innerHTML = `
    <div class="lobby-hero">
      <div class="hero-pill">⚡ PISCINE ARENA • 216 ATOMIC CHALLENGES</div>
      <h1 class="hero-title">MASTER JAVASCRIPT. <span>LEVEL BY LEVEL.</span></h1>
      <p class="hero-subtitle">Focus on clean, atomic coding challenges with instant validation and accumulating bounties.</p>
    </div>

    <!-- Navigation Tabs -->
    <div class="view-tabs">
      <button class="tab-btn ${activeLobbyTab === 'modes' ? 'active' : ''}" id="tab-btn-modes">
        ⚡ ARENA MODES
      </button>
      <button class="tab-btn ${activeLobbyTab === 'curriculum' ? 'active' : ''}" id="tab-btn-curriculum">
        🗺️ CURRICULUM MAP (${completedCount} / 216)
      </button>
    </div>

    <div class="lobby-content-scroll">
      ${activeLobbyTab === 'modes' ? renderModesTab(user, activeChallenge, currentChallengeIdx) : renderCurriculumTab(user)}
    </div>
  `;

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
        <div style="display: flex; gap: 12px; margin-top: 4px; font-size: 11px; font-weight: 700;">
          <span style="color: var(--accent-gold);">💰 Bounty: +🪙 ${(100 + currentChallengeIdx * 5)}</span>
          <span style="color: var(--accent-emerald);">⚡ Speed Bonus: +🪙 50</span>
          ${user.currentStreak >= 2 ? `<span style="color: var(--accent-cyan);">🔥 Streak: ${user.currentStreak} in a row</span>` : ''}
        </div>
      </div>

      <button class="btn-gauntlet-play" id="btn-start-gauntlet">
        ▶ PLAY LEVEL ${currentChallengeIdx + 1}
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
          <p class="mode-desc">8 coders enter. Multi-round sudden death elimination bracket. Winner takes the 8x jackpot pot!</p>
          
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

  document.getElementById("btn-start-gauntlet").addEventListener("click", () => {
    sound.playClick();
    arena.createMatch({ mode: "gauntlet", wager: 0 });
  });

  document.getElementById("btn-start-royale").addEventListener("click", () => {
    sound.playClick();
    arena.createMatch({ mode: "royale", wager: selectedWagers.royale });
  });

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
              ${moduleChallenges.map((c) => {
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
        arena.createMatch({ mode: "custom", challengeIdx: idx, wager: 0 });
      } else {
        sound.playFail();
        alert(`🔒 Challenge #${idx + 1} is locked. Complete Challenge #${userProgress + 1} first to unlock!`);
      }
    });
  });
}

// -------------------------------------------------------------
// ARENA VIEW (Zero-Scroll 2-Column Focus Layout)
// -------------------------------------------------------------
function renderArenaView(match) {
  if (!match) return;

  const challenge = match.currentChallenge;
  const human = match.players.find(p => p.isHuman);

  const isNewRound = (activeView !== "arena" || activeChallengeId !== challenge.id);

  if (isNewRound) {
    activeView = "arena";
    activeChallengeId = challenge.id;

    const timerDisplay = match.isLenient
      ? `${formatDuration(match.elapsedSeconds)} (Target: ${formatDuration(match.targetTime)})`
      : `${String(match.timeLeft).padStart(2, '0')}s`;

    // Clean starter stub without redundant comment headers
    const cleanStarterCode = (challenge.solutionStub || "")
      .replace(/^\/\/[^\n]*\n+/gm, "")
      .trim();

    appRoot.innerHTML = `
      <!-- Top Mini-HUD Bar -->
      <div class="arena-topbar">
        <div class="arena-topbar-left">
          <button class="btn-back-lobby" id="btn-arena-back" title="Return to Lobby">← LOBBY</button>
          <span class="arena-level-pill" id="hud-round">
            ${match.isSequential ? `LEVEL ${match.challengeIdx + 1}: ${challenge.title}` : `ROUND ${match.round}: ${challenge.title}`}
          </span>
        </div>

        <div class="arena-topbar-timer ${!match.isLenient && match.timeLeft <= 10 ? 'danger' : ''}" id="hud-timer">
          ⏱️ ${timerDisplay}
        </div>

        <div class="arena-topbar-right">
          <span style="color: var(--accent-gold);" id="hud-pot">💰 Bounty: +🪙 ${match.pot.toLocaleString()}</span>
        </div>
      </div>

      <!-- 2-Column Zero-Scroll Split Layout -->
      <div class="arena-split-layout">
        <!-- Left Column: Focused Instructions & Hints -->
        <div class="instructions-panel">
          <!-- Primary Task Instructions -->
          <div class="task-box">
            <span class="task-label">🎯 REQUIRED TASK</span>
            <div class="task-text">${challenge.task}</div>
          </div>

          <!-- Concept Explanation -->
          <div class="concept-box">
            <div style="font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">💡 Concept:</div>
            ${challenge.concept}
          </div>

          <!-- Syntax Reference -->
          ${challenge.syntax ? `
            <div>
              <div style="font-size: 10px; text-transform: uppercase; color: var(--text-muted); font-weight: 700; margin-bottom: 4px;">Syntax Template:</div>
              <div class="syntax-box">${challenge.syntax}</div>
            </div>
          ` : ''}

          <!-- Contenders Radar (Compact) -->
          <div class="radar-compact">
            <div class="radar-compact-header">
              <span>CONTENDERS</span>
              <span id="hud-alive-count">${match.players.filter(p => p.alive).length} ACTIVE</span>
            </div>
            <div id="hud-player-list">
              ${renderPlayerTiles(match.players)}
            </div>
          </div>
        </div>

        <!-- Right Column: Dominant Code Editor (100% Height) -->
        <div class="editor-container">
          <div class="editor-header">
            <div class="editor-title">
              <span>solution.js</span>
              <span class="editor-badge">ESM JavaScript</span>
            </div>
            <div class="editor-controls">
            </div>
          </div>

          <div class="editor-body">
            <div class="line-numbers" id="editor-lines">1<br>2<br>3<br>4<br>5</div>
            <textarea class="code-textarea" id="code-input" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" placeholder="// Type your JavaScript code here...">${cleanStarterCode}</textarea>
          </div>

          <!-- Integrated Bottom Bar: Live Console + Action Button -->
          <div class="editor-bottom-bar">
            <div class="console-inline">
              <span class="status-pill idle" id="test-status-pill">AWAITING RUN</span>
              <span class="console-message" id="test-console-output">Press Cmd+Enter to run test assertions</span>
            </div>

            <div class="editor-actions">
              <button class="btn-submit" id="btn-submit-code" ${human && human.hasSubmitted ? 'disabled' : ''}>
                ${human && human.hasSubmitted ? 'SUBMITTED' : '🚀 RUN & SUBMIT'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-arena-back").addEventListener("click", () => {
      sound.playClick();
      arena.stopTimers();
      store.setState({ currentView: "lobby", match: null });
    });

    const textarea = document.getElementById("code-input");
    const linesEl = document.getElementById("editor-lines");

    setupSmartCodeEditor(textarea, linesEl, handleSubmit);

    async function handleSubmit() {
      const rawCode = textarea.value;
      const formatted = await formatJavaScriptCode(rawCode);
      if (formatted && formatted !== rawCode) {
        textarea.value = formatted;
        linesEl.innerHTML = Array.from({ length: Math.max(5, formatted.split("\n").length) }, (_, i) => i + 1).join("<br>");
      }

      const userCode = textarea.value;
      const btnSubmit = document.getElementById("btn-submit-code");
      const statusPill = document.getElementById("test-status-pill");
      const consoleOut = document.getElementById("test-console-output");

      btnSubmit.disabled = true;
      btnSubmit.textContent = "CHECKING...";

      const evalResult = await evaluateSubmission(userCode, challenge);

      if (evalResult.success) {
        statusPill.className = "status-pill pass";
        statusPill.textContent = `✔ PASS (${evalResult.duration}ms)`;
        consoleOut.innerHTML = `<span style="color: var(--accent-emerald);">All test assertions passed cleanly!</span>`;
        arena.submitUserSolution(true);
      } else {
        statusPill.className = "status-pill fail";
        statusPill.textContent = `✖ FAIL (${evalResult.duration}ms)`;
        const firstError = evalResult.results.find(r => !r.pass)?.error || evalResult.error || "Evaluation failed";
        consoleOut.innerHTML = `<span style="color: var(--accent-crimson);">${firstError}</span>`;
        btnSubmit.disabled = false;
        btnSubmit.textContent = "🚀 RUN & SUBMIT";
        arena.submitUserSolution(false);
      }
    }

    document.getElementById("btn-submit-code").addEventListener("click", handleSubmit);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }, 50);

  } else {
    const timerEl = document.getElementById("hud-timer");
    if (timerEl) {
      if (match.isLenient) {
        const isOvertime = match.elapsedSeconds > match.targetTime;
        timerEl.textContent = isOvertime 
          ? `⏱️ ${formatDuration(match.elapsedSeconds)} (Overtime • Keep Coding!)`
          : `⏱️ ${formatDuration(match.elapsedSeconds)} / ${formatDuration(match.targetTime)}`;
        
        if (isOvertime) {
          timerEl.style.color = "var(--accent-gold)";
        } else {
          timerEl.style.color = "var(--accent-cyan)";
        }
      } else {
        timerEl.textContent = `⏱️ ${String(match.timeLeft).padStart(2, '0')}s`;
        if (match.timeLeft <= 10) {
          timerEl.classList.add("danger");
        } else {
          timerEl.classList.remove("danger");
        }
      }
    }

    const aliveCountEl = document.getElementById("hud-alive-count");
    if (aliveCountEl) {
      aliveCountEl.textContent = `${match.players.filter(p => p.alive).length} ACTIVE`;
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

// -------------------------------------------------------------
// SMART CODE EDITOR ENGINE (Auto-Brackets, Smart Indent, Pair Delete)
// -------------------------------------------------------------
function setupSmartCodeEditor(textarea, linesEl, onSubmit) {
  const updateLineNumbers = () => {
    const count = textarea.value.split("\n").length;
    linesEl.innerHTML = Array.from({ length: Math.max(5, count) }, (_, i) => i + 1).join("<br>");
  };

  const PAIRS = {
    "{": "}",
    "(": ")",
    "[": "]",
    '"': '"',
    "'": "'",
    "`": "`"
  };

  const CLOSING_CHARS = new Set(["}", ")", "]", '"', "'", "`"]);

  textarea.addEventListener("input", updateLineNumbers);

  textarea.addEventListener("keydown", (e) => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;

    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      onSubmit();
      return;
    }

    // 1. Auto-Close Pairs
    if (PAIRS[e.key] && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const open = e.key;
      const close = PAIRS[open];

      if (start !== end) {
        e.preventDefault();
        const selected = val.substring(start, end);
        const replacement = open + selected + close;
        insertTextAtCursor(textarea, replacement);
        textarea.setSelectionRange(start + 1, end + 1);
        updateLineNumbers();
        return;
      }

      if ((open === '"' || open === "'" || open === "`") && val[start] === open) {
        e.preventDefault();
        textarea.setSelectionRange(start + 1, start + 1);
        return;
      }

      e.preventDefault();
      insertTextAtCursor(textarea, open + close);
      textarea.setSelectionRange(start + 1, start + 1);
      updateLineNumbers();
      return;
    }

    // 2. Overtype Closing Characters
    if (CLOSING_CHARS.has(e.key) && start === end && val[start] === e.key && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      textarea.setSelectionRange(start + 1, start + 1);
      return;
    }

    // 3. Smart Backspace Pair Deletion
    if (e.key === "Backspace" && start === end && start > 0) {
      const prevChar = val[start - 1];
      const nextChar = val[start];
      if (PAIRS[prevChar] === nextChar) {
        e.preventDefault();
        textarea.setSelectionRange(start - 1, start + 1);
        insertTextAtCursor(textarea, "");
        updateLineNumbers();
        return;
      }
    }

    // 4. Smart Enter Auto-Indentation
    if (e.key === "Enter" && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();

      const beforeCursor = val.substring(0, start);
      const afterCursor = val.substring(end);
      const lastNewline = beforeCursor.lastIndexOf("\n");
      const currentLine = beforeCursor.substring(lastNewline + 1);
      const indentMatch = currentLine.match(/^[ \t]*/);
      const currentIndent = indentMatch ? indentMatch[0] : "";

      const charBefore = beforeCursor.slice(-1);
      const charAfter = afterCursor.charAt(0);

      if (
        (charBefore === "{" && charAfter === "}") ||
        (charBefore === "(" && charAfter === ")") ||
        (charBefore === "[" && charAfter === "]")
      ) {
        const innerIndent = currentIndent + "  ";
        const insertText = "\n" + innerIndent + "\n" + currentIndent;
        insertTextAtCursor(textarea, insertText);
        const newCursorPos = start + 1 + innerIndent.length;
        textarea.setSelectionRange(newCursorPos, newCursorPos);
        updateLineNumbers();
        return;
      }

      if (charBefore === "{" || charBefore === "(" || charBefore === "[") {
        const innerIndent = currentIndent + "  ";
        insertTextAtCursor(textarea, "\n" + innerIndent);
        updateLineNumbers();
        return;
      }

      insertTextAtCursor(textarea, "\n" + currentIndent);
      updateLineNumbers();
      return;
    }

    // 5. Tab Indentation
    if (e.key === "Tab") {
      e.preventDefault();
      if (!e.shiftKey) {
        insertTextAtCursor(textarea, "  ");
      }
      updateLineNumbers();
      return;
    }
  });

  updateLineNumbers();
}

function insertTextAtCursor(textarea, text) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const val = textarea.value;

  const success = document.execCommand && document.execCommand("insertText", false, text);
  if (!success) {
    textarea.value = val.substring(0, start) + text + val.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
  }
}

function renderPlayerTiles(players) {
  return players.map(p => `
    <div class="player-tile-mini ${p.isHuman ? 'is-human' : ''}">
      <span>${p.avatar} ${p.name} ${p.isHuman ? '(YOU)' : ''}</span>
      <span style="font-family: var(--font-code); font-size: 10px; font-weight: 700; color: ${!p.alive ? 'var(--accent-crimson)' : p.solvedTime !== null ? 'var(--accent-emerald)' : 'var(--text-muted)'};">
        ${!p.alive ? '💀 OUT' : p.solvedTime !== null ? `✔ ${formatDuration(p.solvedTime)}` : p.hasSubmitted ? '⏳' : '💻'}
      </span>
    </div>
  `).join('');
}

// -------------------------------------------------------------
// VICTORY / DEFEAT MODAL VIEW (Press Enter to continue immediately)
// -------------------------------------------------------------
function renderVictoryView(match) {
  if (!match) return;

  const isWin = match.status === "victory";
  const user = store.getState().user;
  const nextChallengeIdx = (match.challengeIdx !== undefined) ? match.challengeIdx + 1 : user.currentProgressIdx;
  const hasNext = nextChallengeIdx < CHALLENGE_BANK.length;
  const human = match.players.find(p => p.isHuman);
  const solvedTime = human && human.solvedTime !== null ? human.solvedTime : null;
  const beatTarget = solvedTime !== null && match.targetTime && solvedTime <= match.targetTime;
  const summary = match.rewardSummary;

  let primaryButtonHtml = "";
  if (isWin && hasNext) {
    primaryButtonHtml = `
      <button class="modal-btn-primary" id="btn-next-level">
        <span>▶ NEXT LEVEL (CHALLENGE #${nextChallengeIdx + 1})</span>
        <span class="btn-kbd-badge">↵ Enter</span>
      </button>
    `;
  } else if (!isWin) {
    primaryButtonHtml = `
      <button class="modal-btn-primary" id="btn-retry-level" style="background: linear-gradient(135deg, var(--accent-cyan), #0284c7); box-shadow: 0 0 20px var(--accent-cyan-glow), 0 0 0 2px #FFFFFF;">
        <span>🔄 RETRY CHALLENGE #${match.currentChallenge.id}</span>
        <span class="btn-kbd-badge">↵ Enter</span>
      </button>
    `;
  }

  appRoot.innerHTML = `
    <div class="modal-overlay">
      <div class="modal-card">
        <div class="modal-icon">${isWin ? '🏆' : '💀'}</div>
        <h2 class="modal-title ${isWin ? 'win' : 'lose'}">${isWin ? 'LEVEL MASTERED!' : 'ELIMINATED!'}</h2>
        
        <p style="color: var(--text-secondary); font-size: 13px;">
          ${isWin ? `Great work! Challenge #${match.currentChallenge.id} conquered.` : 'Challenge failed. Review the concept and try again!'}
        </p>

        ${isWin && summary ? `
          <div class="payout-box">
            <div class="payout-amount">+🪙 ${summary.totalWon.toLocaleString()}</div>
            <div style="font-size: 11px; color: var(--text-secondary); margin-top: 4px;">
              Streak: 🔥 ${summary.newStreak} in a row • Wallet: 🪙 ${summary.newCoins.toLocaleString()}
            </div>
          </div>
        ` : ''}

        ${isWin && solvedTime !== null ? `
          <div style="font-size: 11px; color: ${beatTarget ? 'var(--accent-emerald)' : 'var(--accent-gold)'}; font-weight: 700; margin-bottom: 12px;">
            ⏱️ Solved in ${formatDuration(solvedTime)} ${beatTarget ? '(Speed Bonus Earned!)' : ''}
          </div>
        ` : ''}

        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 8px;">
          ${primaryButtonHtml}
          <button class="modal-btn-secondary" id="btn-return-lobby">
            RETURN TO LOBBY
          </button>
        </div>
      </div>
    </div>
  `;

  let cleanedUp = false;
  const cleanupListeners = () => {
    if (cleanedUp) return;
    cleanedUp = true;
    window.removeEventListener("keydown", handleKeydown);
  };

  const advanceToNext = () => {
    cleanupListeners();
    sound.playClick();
    if (isWin && hasNext) {
      arena.createMatch({ mode: "gauntlet", challengeIdx: nextChallengeIdx, wager: 0 });
    } else if (!isWin) {
      arena.createMatch({ mode: "gauntlet", challengeIdx: match.challengeIdx, wager: match.wager || 0 });
    } else {
      store.setState({ currentView: "lobby", match: null });
    }
  };

  const btnNext = document.getElementById("btn-next-level");
  const btnRetry = document.getElementById("btn-retry-level");
  const btnPrimary = btnNext || btnRetry;

  if (btnPrimary) {
    btnPrimary.focus();
    btnPrimary.addEventListener("click", advanceToNext);
  }

  const btnLobby = document.getElementById("btn-return-lobby");
  if (btnLobby) {
    if (!btnPrimary) btnLobby.focus();
    btnLobby.addEventListener("click", () => {
      cleanupListeners();
      sound.playClick();
      store.setState({ currentView: "lobby", match: null });
    });
  }

  const handleKeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      if (e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      advanceToNext();
    } else if (e.key === "Escape") {
      e.preventDefault();
      cleanupListeners();
      sound.playClick();
      store.setState({ currentView: "lobby", match: null });
    }
  };

  // Small delay ensures Cmd+Enter from submission doesn't accidentally trigger the keydown
  setTimeout(() => {
    if (!cleanedUp) {
      window.addEventListener("keydown", handleKeydown);
    }
  }, 100);
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
        <div class="stat-box">
          <div class="stat-number" style="color: var(--accent-gold);">🪙 ${(user.coins || 0).toLocaleString()}</div>
          <div class="stat-label">Wallet</div>
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

  modalOverlay.querySelectorAll(".avatar-choice").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedAvatar = btn.dataset.avatar;
      modalOverlay.querySelectorAll(".avatar-choice").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  document.getElementById("btn-close-modal").addEventListener("click", () => {
    store.setState({ isLoginModalOpen: false });
  });

  document.getElementById("btn-save-profile").addEventListener("click", () => {
    const inputVal = document.getElementById("modal-username-input").value;
    store.login(inputVal, selectedAvatar);
    sound.playSuccess();
  });

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
