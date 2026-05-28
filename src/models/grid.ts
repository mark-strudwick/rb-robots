import { type RobotOrientation } from "./robot.js";

export type GridPosition = { x: number; y: number };

class Grid {
  private scents: { position: GridPosition; orientation: RobotOrientation }[];

  constructor(private readonly boundaryPosition: { x: number; y: number }) {
    this.scents = [];
  }
}
