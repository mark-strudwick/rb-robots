import { type GridPosition } from "./grid.js";

export type RobotOrientation = "N" | "E" | "S" | "W";
export type RobotInstruction = "L" | "R" | "F";
export type RobotStatus = "OK" | "LOST";

export class Robot {
  private status: RobotStatus;

  constructor(
    private readonly position: GridPosition,
    private readonly orientation: RobotOrientation,
    private readonly instructions: string
  ) {
    this.status = "OK";
  }
}
