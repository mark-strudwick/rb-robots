import { Grid, type GridPosition } from "./grid.js";

export type RobotOrientation = "N" | "E" | "S" | "W";
export type RobotInstruction = "L" | "R" | "F";
export type RobotStatus = "OK" | "LOST";

export class Robot {
  private status: RobotStatus = "OK";

  constructor(
    private position: GridPosition,
    private orientation: RobotOrientation,
    private readonly instructions: RobotInstruction[]
  ) {}

  public GetStatus(): RobotStatus {
    return this.status;
  }

  public GetPosition(): GridPosition {
    return this.position;
  }

  public GetOrientation(): RobotOrientation {
    return this.orientation;
  }

  public ProcessInstructions(grid: Grid): void {
    this.instructions.forEach((instruction) => {
      if (this.status === "LOST") {
        return;
      }

      switch (instruction) {
        case "L":
        case "R":
          this.rotate(instruction);
          break;
        case "F":
          this.moveForward(grid);
          break;
        default:
          throw new Error("Invalid instruction");
      }

      // if it's F then handle forward
      // check if there's a scent where it wants to go
    });
  }

  private rotate(instruction: Exclude<RobotInstruction, "F">): void {
    switch (instruction) {
      case "L":
        if (this.orientation === "N") {
          this.orientation = "W";
        } else if (this.orientation === "E") {
          this.orientation = "N";
        } else if (this.orientation === "S") {
          this.orientation = "E";
        } else if (this.orientation === "W") {
          this.orientation = "S";
        }
        break;
      case "R":
        if (this.orientation === "N") {
          this.orientation = "E";
        } else if (this.orientation === "E") {
          this.orientation = "S";
        } else if (this.orientation === "S") {
          this.orientation = "W";
        } else if (this.orientation === "W") {
          this.orientation = "N";
        }
        break;
      default:
        throw new Error("Invalid rotation instruction");
    }
  }

  private moveForward(grid: Grid): void {
    if (
      grid
        .GetScents()
        .some(
          (s) =>
            s.position.x === this.position.x && s.position.y === this.position.y && s.orientation === this.orientation
        )
    ) {
      return;
    }

    const nextPosition = this.getNextForwardPosition();
    const validNextPosition = grid.CheckValidPosition(nextPosition);

    if (!validNextPosition) {
      this.status = "LOST";
      return;
    }

    this.position = nextPosition;
  }

  private getNextForwardPosition(): GridPosition {
    switch (this.orientation) {
      case "N":
        return { x: this.position.x, y: this.position.y + 1 };
      case "E":
        return { x: this.position.x + 1, y: this.position.y };
      case "S":
        return { x: this.position.x, y: this.position.y - 1 };
      case "W":
        return { x: this.position.x - 1, y: this.position.y };
      default:
        throw new Error("Invalid");
    }
  }
}
