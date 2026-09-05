import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { createCurriedCharacterCreator } from "./solution.js";

describe("219 - Character Maker", () => {
  test("creates curried character builder", () => {
    const creator = createCurriedCharacterCreator({ stats: { hp: 100, attack: 15, defense: 5, speed: 10 } });
    const hero = creator("Lancelot")("Paladin")({ hp: 20, attack: 5 });
    const villain = creator("Goblin")("Monster")({ hp: 0, defense: 0 });

    assert.strictEqual(hero.name, "Lancelot");
    assert.strictEqual(hero.stats.hp, 120);
    assert.strictEqual(hero.stats.attack, 20);

    const dmg = hero.attackTarget(villain);
    assert.ok(dmg > 0);
    assert.ok(villain.stats.hp < 100);
  });
});
