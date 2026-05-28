import { readFileSync } from "fs";

import { Grid } from "./models/grid.js";
import { Robot, type RobotInstruction, type RobotOrientation } from "./models/robot.js";

function main() {
  console.info("Starting RB Robots");

  const filePath = "input-instructions.txt";
  const fileContents = readFileSync(filePath, "utf8").toString();
  console.info(fileContents);

  const lines: string[] = fileContents.split(/\r?\n/).filter((line) => line.trim() !== "");
  console.info(lines);

  const { grid, robots } = parseInputLines(lines);
  console.info(grid);
  console.info(robots);

  robots.forEach((robot) => {
    robot.ProcessInstructions(grid);
    if (robot.GetStatus() === "LOST") {
      grid.AddScent({ position: robot.GetPosition(), orientation: robot.GetOrientation() });
    }
  });

  console.log("Processed all robot instructions");
  console.log(robots);
  // TODO: produce report
}

function parseInputLines(input: string[]): { grid: Grid; robots: Robot[] } {
  // TODO: Validate inputs?

  const boundingPositionLine = input[0];
  if (!boundingPositionLine) {
    throw new Error();
  }

  const [boundaryX, boundaryY] = boundingPositionLine.split(" ").map((n) => Number(n));
  if (!boundaryX || !boundaryY) {
    throw new Error();
  }

  const grid = new Grid({ x: boundaryX, y: boundaryY });

  const robots = [];
  for (let i = 1; i < input.length; i += 2) {
    const positionLine = input[i];
    const instructionsLine = input[i + 1];

    if (!positionLine || !instructionsLine) {
      throw new Error();
    }

    const instructions = instructionsLine.split("") as RobotInstruction[];

    const [x, y, orientation] = positionLine.split(" ");
    if (!x || !y || !orientation) {
      throw new Error();
    }

    // TODO: Check if starting position is a valid position in the grid
    robots.push(new Robot({ x: Number(x), y: Number(y) }, orientation as RobotOrientation, instructions));
  }

  return { grid, robots };
}

main();
