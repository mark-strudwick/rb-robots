import { readFileSync } from "fs";

import { Grid } from "./models/grid.js";
import { Robot, type RobotOrientation } from "./models/robot.js";

function main() {
  console.info("Starting RB Robots");

  const filePath = "input-instructions.txt";
  const fileContents = readFileSync(filePath, "utf8").toString();
  console.info(fileContents);

  const lines: string[] = fileContents.split(/\r?\n/).filter((line) => line.trim() !== "");
  console.info(lines);

  const parsedInput = parseInputLines(lines);
  console.info(parsedInput);

  // first line
  // x y
  // 2 lines per robot (seperated by an empty line)
  // initial coordinate and orientation
  // x y ori
  // Instructions
  // RFRFRFRF
}

function parseInputLines(input: string[]): { grid: Grid; robots: Robot[] } {
  // validate inputs

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

    const [x, y, orientation] = positionLine.split(" ");
    if (!x || !y || !orientation) {
      throw new Error();
    }

    robots.push(new Robot({ x: Number(x), y: Number(y) }, orientation as RobotOrientation, instructionsLine));
  }

  return { grid, robots };
}

main();
