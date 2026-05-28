import { expect, describe, it } from "vitest";

import { Robot } from "../../src/models/robot.js";
import { Grid } from "../../src/models/grid.js";

describe("ProcessInstructions", () => {
  it("returns an OK status and position when given valid instructions", () => {
    const grid = new Grid({ x: 5, y: 3 });
    const robot = new Robot({ x: 1, y: 1 }, "E", ["R", "F", "R", "F", "R", "F", "R", "F"]);

    robot.ProcessInstructions(grid);

    expect(robot.GetStatus()).toEqual("OK");
    expect(robot.GetPosition()).toEqual({ x: 1, y: 1 });
    expect(robot.GetOrientation()).toEqual("E");
  });

  it("returns a LOST status and the last valid position when given invalid instructions", () => {
    const grid = new Grid({ x: 5, y: 3 });
    const robot = new Robot({ x: 3, y: 2 }, "N", ["F", "R", "R", "F", "L", "L", "F", "F", "R", "R", "F", "L", "L"]);

    robot.ProcessInstructions(grid);

    expect(robot.GetStatus()).toEqual("LOST");
    expect(robot.GetPosition()).toEqual({ x: 3, y: 3 });
    expect(robot.GetOrientation()).toEqual("N");
  });
});
