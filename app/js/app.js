import { store } from "./state/store.js";
import { sound } from "./engine/audio.js";
import { arena } from "./engine/arena.js";
import { evaluateSubmission } from "./engine/sandbox.js";

// DOM Elements
const appRoot = document.getElementById("app-root");
const navWalletEl = document.getElementById("nav-wallet");
const navMmrEl = document.getElementById("nav-mmr");
const navNameEl = document.getElementById("nav-name");
const navAvatarEl = document.getElementById("nav-avatar");
const btnSoundEl = document.getElementById("btn-sound");
const btnFreeCoinsEl = document.getElementById("btn-free-coins");

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

// Selected Wagers for Modes
let selectedWagers = {
  royale: 100,
  duel: 250,
  solo: 50
};

// View Tracking State to prevent clobbering user input
let activeView = null;
let activeChallengeId = null;

// Main State Subscription
store.subscribe((state) => {
  renderNav(state);
  renderView(state);
});

function renderNav(state) {
  const { user } = state;
  navWalletEl.textContent = `🪙 ${user.coins.toLocaleString()}`;
  navMmrEl.textContent = `${user.mmr} MMR`;
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
// LOBBY VIEW
// -------------------------------------------------------------
function renderLobbyView(state) {
  appRoot.innerHTML = `
    <div class="lobby-hero">
      <div class="hero-pill">⚡ LAST MAN STANDING CODE ROYALE</div>
      <h1 class="hero-title">WAGER. CODE. <span>SURVIVE.</span></h1>
      <p class="hero-subtitle">Enter sudden-death programming arenas, defeat rivals in atomic code duels, and claim the entire jackpot prize pool.</p>
    </div>

    <div class="modes-grid">
      <!-- 8-Player Battle Royale -->
      <div class="mode-card" style="--card-accent: var(--accent-cyan); --btn-color-1: var(--accent-cyan); --btn-color-2: #0088FF;">
        <div>
          <div class="mode-header">
            <span class="mode-icon">⚔️</span>
            <span class="mode-badge" style="border: 1px solid var(--accent-cyan); color: var(--accent-cyan);">8 Players</span>
          </div>
          <h2 class="mode-title">Battle Royale</h2>
          <p class="mode-desc">8 developers enter. Round-by-round sudden death elimination. Last programmer standing takes the 8x jackpot pot!</p>
          
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
          <h2 class="mode-title">High-Stakes Duel</h2>
          <p class="mode-desc">Direct head-to-head match. First coder to pass all challenge assertions wins the double stake.</p>
          
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

      <!-- Solo Speedrun -->
      <div class="mode-card" style="--card-accent: var(--accent-emerald); --btn-color-1: var(--accent-emerald); --btn-color-2: #059669;">
        <div>
          <div class="mode-header">
            <span class="mode-icon">⚡</span>
            <span class="mode-badge" style="border: 1px solid var(--accent-emerald); color: var(--accent-emerald);">Solo Practice</span>
          </div>
          <h2 class="mode-title">Piscine Speedrun</h2>
          <p class="mode-desc">Practice against the clock through all 216 atomic challenges to sharpen speed and earn coin bonuses.</p>
          
          <div class="wager-selector">
            <span class="wager-label">Entry Stakes</span>
            <div class="wager-pills" data-mode="solo">
              ${[25, 50, 100].map(w => `
                <button class="wager-pill ${selectedWagers.solo === w ? 'active' : ''}" data-wager="${w}">${w}</button>
              `).join('')}
            </div>
          </div>
        </div>

        <button class="btn-play" id="btn-start-solo" style="background: linear-gradient(135deg, var(--accent-emerald), #059669); box-shadow: 0 4px 20px var(--accent-emerald-glow);">
          START SPEEDRUN
        </button>
      </div>
    </div>
  `;

  // Attach Wager Click Listeners
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

  // Attach Play Match Listeners
  document.getElementById("btn-start-royale").addEventListener("click", () => {
    sound.playClick();
    arena.createMatch({ mode: "royale", wager: selectedWagers.royale });
  });

  document.getElementById("btn-start-duel").addEventListener("click", () => {
    sound.playClick();
    arena.createMatch({ mode: "duel", wager: selectedWagers.duel });
  });

  document.getElementById("btn-start-solo").addEventListener("click", () => {
    sound.playClick();
    arena.createMatch({ mode: "solo", wager: selectedWagers.solo });
  });
}

// -------------------------------------------------------------
// ARENA VIEW (Fine-grained rendering to preserve typing & focus)
// -------------------------------------------------------------
function renderArenaView(match) {
  if (!match) return;

  const challenge = match.currentChallenge;
  const human = match.players.find(p => p.isHuman);

  // Check if arena needs a full structural render (first load or new round)
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
          ROUND ${match.round} / ${match.maxRounds} (SUDDEN DEATH)
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
                Round ${match.round} Target
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

    // Code Input Textarea Handling (Line numbers & Tab Indentation)
    const textarea = document.getElementById("code-input");
    const linesEl = document.getElementById("editor-lines");

    const updateLineNumbers = () => {
      const count = textarea.value.split("\n").length;
      linesEl.innerHTML = Array.from({ length: Math.max(5, count) }, (_, i) => i + 1).join("<br>");
    };

    textarea.addEventListener("input", updateLineNumbers);
    updateLineNumbers();

    // Tab key support & Submission Shortcut
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

    // Auto-focus textarea for instant typing experience
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }, 50);

  } else {
    // Fine-grained updates: ONLY update dynamic HUD & Radar elements without touching textarea!
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

  appRoot.innerHTML = `
    <div class="modal-overlay">
      <div class="modal-card">
        <div class="modal-icon">${isWin ? '🏆' : '💀'}</div>
        <h2 class="modal-title ${isWin ? 'win' : 'lose'}">${isWin ? 'LAST MAN STANDING!' : 'ELIMINATED!'}</h2>
        <p style="color: var(--text-secondary); font-size: 14px;">
          ${isWin ? 'You survived all sudden death rounds and conquered the arena!' : 'You were eliminated in the code duel. Sharpen your skills and return for revenge!'}
        </p>

        ${isWin ? `
          <div class="payout-box">
            <span style="font-size: 12px; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">JACKPOT EARNED</span>
            <div class="payout-amount">+🪙 ${match.pot.toLocaleString()}</div>
          </div>
        ` : `
          <div style="margin: 20px 0; font-family: var(--font-display); font-weight: 700; color: var(--text-muted);">
            LOST ENTRY WAGER: 🪙 ${match.wager.toLocaleString()}
          </div>
        `}

        <button class="btn-play" id="btn-return-lobby">
          RETURN TO LOBBY
        </button>
      </div>
    </div>
  `;

  document.getElementById("btn-return-lobby").addEventListener("click", () => {
    sound.playClick();
    store.setState({ currentView: "lobby", match: null });
  });
}

// Initial Boot
renderNav(store.getState());
renderView(store.getState());
