import { type GridPosition } from "./grid.js";

export type RobotOrientation = "N" | "E" | "S" | "W";
export type RobotInstruction = "L" | "R" | "F";

class Robot {
  constructor(
    private readonly position: GridPosition,
    private readonly orientation: RobotOrientation
  ) {}
}
