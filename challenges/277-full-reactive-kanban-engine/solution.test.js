import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { KanbanEngine } from "./solution.js";

describe("277 - Full Reactive Kanban Engine", () => {
  const initial = {
    columns: [
      { id: "todo", title: "To Do", cards: [] },
      { id: "in_progress", title: "In Progress", cards: [] },
      { id: "done", title: "Done", cards: [] }
    ]
  };

  test("adds cards, moves across columns, and supports undo/redo", () => {
    const kanban = new KanbanEngine(initial);
    const card = kanban.addCard("todo", { id: "c1", title: "Build Auth Engine" });
    assert.strictEqual(kanban.getBoard().columns[0].cards.length, 1);

    kanban.moveCard("c1", "in_progress", 0);
    assert.strictEqual(kanban.getBoard().columns[0].cards.length, 0);
    assert.strictEqual(kanban.getBoard().columns[1].cards[0].id, "c1");

    kanban.undo();
    assert.strictEqual(kanban.getBoard().columns[0].cards[0].id, "c1");

    kanban.redo();
    assert.strictEqual(kanban.getBoard().columns[1].cards[0].id, "c1");
  });

  test("searches cards across columns", () => {
    const kanban = new KanbanEngine(initial);
    kanban.addCard("todo", { id: "c1", title: "Fix API Bug", description: "urgent patch" });
    kanban.addCard("done", { id: "c2", title: "Deploy to Vercel" });

    const results = kanban.searchCards("patch");
    assert.strictEqual(results.length, 1);
    assert.strictEqual(results[0].id, "c1");
  });
});