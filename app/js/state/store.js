// Reactive Application Store with User Profile & Progress Persistence

const ACTIVE_USER_KEY = "code_royale_active_user_v1";
const USERS_DB_KEY = "code_royale_users_db_v1";

function loadUsersDb() {
  try {
    const raw = localStorage.getItem(USERS_DB_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {};
}

function saveUsersDb(db) {
  try {
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(db));
  } catch {}
}

function createDefaultProfile(username = "NoviceDev", avatar = "⚡") {
  return {
    username,
    avatar,
    coins: 1500,
    mmr: 1200,
    wins: 0,
    losses: 0,
    earnings: 0,
    level: 1,
    currentProgressIdx: 0, // 0 = Challenge 01 (Beginner)
    completedChallenges: [] // List of challenge IDs
  };
}

function loadInitialUser() {
  const activeUsername = localStorage.getItem(ACTIVE_USER_KEY) || "NoviceDev";
  const db = loadUsersDb();
  if (db[activeUsername]) {
    return { ...createDefaultProfile(activeUsername), ...db[activeUsername] };
  }
  const defaultUser = createDefaultProfile(activeUsername);
  db[activeUsername] = defaultUser;
  saveUsersDb(db);
  return defaultUser;
}

class Store {
  constructor() {
    this.state = {
      user: loadInitialUser(),
      match: null,
      currentView: "lobby", // "lobby" | "arena" | "victory"
      activeLobbyTab: "modes", // "modes" | "curriculum"
      isLoginModalOpen: false,
      settings: {
        muted: localStorage.getItem("code_royale_muted") === "true"
      }
    };
    this.listeners = new Set();
  }

  getState() {
    return this.state;
  }

  setState(partial) {
    this.state = { ...this.state, ...partial };
    if (partial.user) {
      this.saveUser();
    }
    this.notify();
  }

  updateUser(updates) {
    const user = { ...this.state.user, ...updates };
    this.setState({ user });
  }

  login(username, avatar) {
    const cleanName = (username || "").trim() || "NoviceDev";
    const db = loadUsersDb();
    let profile = db[cleanName];

    if (!profile) {
      profile = createDefaultProfile(cleanName, avatar || "⚡");
    } else if (avatar) {
      profile.avatar = avatar;
    }

    db[cleanName] = profile;
    saveUsersDb(db);
    localStorage.setItem(ACTIVE_USER_KEY, cleanName);

    this.setState({
      user: profile,
      isLoginModalOpen: false
    });
  }

  markChallengeCompleted(challengeIdx, challengeId) {
    const user = { ...this.state.user };
    const completedSet = new Set(user.completedChallenges || []);
    completedSet.add(challengeId);
    user.completedChallenges = Array.from(completedSet);

    // Advance progress index if solving the current or higher challenge
    if (challengeIdx >= user.currentProgressIdx) {
      user.currentProgressIdx = challengeIdx + 1;
      user.level = Math.floor(user.currentProgressIdx / 5) + 1;
    }

    this.updateUser(user);
  }

  resetProgress() {
    const user = {
      ...this.state.user,
      currentProgressIdx: 0,
      completedChallenges: [],
      level: 1,
      coins: 1500,
      wins: 0,
      losses: 0,
      mmr: 1200
    };
    this.updateUser(user);
  }

  addCoins(amount) {
    const coins = Math.max(0, this.state.user.coins + amount);
    const earnings = amount > 0 ? this.state.user.earnings + amount : this.state.user.earnings;
    this.updateUser({ coins, earnings });
  }

  deductWager(amount) {
    if (this.state.user.coins < amount) return false;
    this.updateUser({ coins: this.state.user.coins - amount });
    return true;
  }

  saveUser() {
    const db = loadUsersDb();
    db[this.state.user.username] = this.state.user;
    saveUsersDb(db);
    localStorage.setItem(ACTIVE_USER_KEY, this.state.user.username);
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  notify() {
    for (const fn of this.listeners) {
      fn(this.state);
    }
  }
}

export const store = new Store();
