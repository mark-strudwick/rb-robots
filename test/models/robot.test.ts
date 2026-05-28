import { expect, describe, it } from "vitest";

import { Robot } from "../../src/models/robot.js";
import { Grid } from "../../src/models/grid.js";

describe("ProcessInstructions", () => {
  it("Returns an OK status and position when given valid instructions", () => {
    const grid = new Grid({ x: 4, y: 4 });
    const robot = new Robot({ x: 2, y: 2 }, "N", ["F", "L", "F"]);

    robot.ProcessInstructions(grid);

    expect(robot.GetStatus()).toBe("OK");
    expect(robot.GetPosition()).toBe({ x: 1, y: 3 });
    expect(robot.GetOrientation()).toBe("W");
  });
});
