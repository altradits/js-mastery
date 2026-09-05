export function createCurriedCharacterCreator(initialChar = {}) {
  const baseStats = initialChar.stats || { hp: 100, attack: 10, defense: 5, speed: 10 };
  return (name) => (role) => (statsModifier = {}) => {
    const stats = {
      hp: (baseStats.hp || 100) + (statsModifier.hp || 0),
      attack: (baseStats.attack || 10) + (statsModifier.attack || 0),
      defense: (baseStats.defense || 5) + (statsModifier.defense || 0),
      speed: (baseStats.speed || 10) + (statsModifier.speed || 0)
    };
    return {
      name,
      role,
      stats,
      attackTarget(target) {
        const dmg = Math.max(1, this.stats.attack - (target.stats?.defense || 0));
        target.stats.hp = Math.max(0, target.stats.hp - dmg);
        return dmg;
      },
      takeDamage(amount) {
        this.stats.hp = Math.max(0, this.stats.hp - amount);
        return this.stats.hp;
      }
    };
  };
}
