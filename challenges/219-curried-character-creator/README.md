# Challenge 219: 219 — Checkpoint: Curried Character Maker

## Concept & Mechanics
Curried factory functions build complex stateful objects incrementally through chained single-argument closures.

## Mission Objective
Export `createCurriedCharacterCreator(initialChar)` returning curried `(name) => (role) => (statsMod) => Character`.

## Syntax Reference
```javascript
export function createCurriedCharacterCreator(initialChar) {
  return (name) => (role) => (statsMod) => {
    const stats = {
      hp: (initialChar.stats?.hp || 100) + (statsMod.hp || 0),
      attack: (initialChar.stats?.attack || 10) + (statsMod.attack || 0),
      defense: (initialChar.stats?.defense || 5) + (statsMod.defense || 0),
      speed: (initialChar.stats?.speed || 10) + (statsMod.speed || 0)
    };
    return {
      name,
      role,
      stats,
      attackTarget(target) {
        const damage = Math.max(1, this.stats.attack - target.stats.defense);
        target.stats.hp = Math.max(0, target.stats.hp - damage);
        return damage;
      },
      takeDamage(amount) {
        this.stats.hp = Math.max(0, this.stats.hp - amount);
        return this.stats.hp;
      }
    };
  };
}
```

## Example Usage
```javascript
const builder = createCurriedCharacterCreator(base)("Arthur")("Knight")({ hp: 50 });
```
