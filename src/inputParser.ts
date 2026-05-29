import { Grid } from "./models/grid.js";
import { Robot, type RobotInstruction, type RobotOrientation } from "./models/robot.js";

export function parseInputLines(input: string[]): { grid: Grid; robots: Robot[] } {
  // TODO: Validate inputs?
  const boundingPositionLine = input[0];
  if (!boundingPositionLine) {
    throw new Error("No bounding position line");
  }

  const [boundaryX, boundaryY] = boundingPositionLine.split(" ").map((n) => Number(n));
  if (!boundaryX || !boundaryY) {
    throw new Error("Invalid boundary position line");
  }

  const grid = new Grid({ x: boundaryX, y: boundaryY });

  const robots = [];
  for (let i = 1; i < input.length; i += 2) {
    const positionLine = input[i];
    const instructionsLine = input[i + 1];

    if (!positionLine || !instructionsLine) {
      throw new Error("Missing a robot line");
    }

    const instructions = instructionsLine.split("") as RobotInstruction[];

    const [x, y, orientation] = positionLine.split(" ");
    if (!x || !y || !orientation) {
      throw new Error("Invalid starting position line");
    }

    // TODO: Check if starting position is a valid position in the grid
    robots.push(new Robot({ x: Number(x), y: Number(y) }, orientation as RobotOrientation, instructions));
  }

  return { grid, robots };
}
