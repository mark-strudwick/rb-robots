import { expect, describe, it } from "vitest";

import { Grid } from "../../src/models/grid.js";

describe("CheckValidPosition", () => {
  it("returns true when given a valid grid position", () => {
    const grid = new Grid({ x: 3, y: 3 });

    const result = grid.CheckValidPosition({ x: 1, y: 2 });

    expect(result).toEqual(true);
  });

  it("returns false when given a invalid grid position", () => {
    const grid = new Grid({ x: 3, y: 3 });

    const result = grid.CheckValidPosition({ x: 4, y: 2 });

    expect(result).toEqual(false);
  });
});
