import { type RobotOrientation } from "./robot.js";

export type GridPosition = { x: number; y: number };
export type ScentPosition = { position: GridPosition; orientation: RobotOrientation };

export class Grid {
  private scents: ScentPosition[] = [];

  constructor(private readonly boundaryPosition: { x: number; y: number }) {}

  public GetScents(): ScentPosition[] {
    return this.scents;
  }

  public AddScent(scent: ScentPosition): void {
    this.scents.push(scent);
  }

  public CheckValidPosition(position: GridPosition): boolean {
    if (
      position.x < 0 ||
      position.x > this.boundaryPosition.x ||
      position.y < 0 ||
      position.y > this.boundaryPosition.y
    ) {
      return false;
    }

    return true;
  }
}
