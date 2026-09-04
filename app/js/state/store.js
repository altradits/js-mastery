// Reactive Application Store

const STORAGE_KEY = "code_royale_user_state_v1";

const defaultUser = {
  username: "Player_" + Math.floor(1000 + Math.random() * 9000),
  avatar: "⚡",
  coins: 1500,
  mmr: 1250,
  wins: 0,
  losses: 0,
  earnings: 0,
  level: 1
};

function loadStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...defaultUser, ...JSON.parse(raw) };
  } catch {}
  return defaultUser;
}

class Store {
  constructor() {
    this.state = {
      user: loadStoredUser(),
      match: null,
      currentView: "lobby", // "lobby" | "arena" | "victory"
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
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.user));
    } catch {}
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
