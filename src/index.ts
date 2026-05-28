import { readFileSync } from "fs";

import { parseInputLines } from "./inputParser.js";

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

main();
