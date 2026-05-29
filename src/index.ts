import { readFileSync } from "fs";

import { parseInputLines } from "./inputParser.js";
import { produceReport } from "./report.js";

async function main() {
  console.info("Starting RB Robots");

  const filePath = "input-instructions.txt";
  const fileContents = readFileSync(filePath, "utf8").toString();
  console.debug("File contents", fileContents);

  const lines: string[] = fileContents.split(/\r?\n/).filter((line) => line.trim() !== "");
  console.debug("Split and filtered lines", lines);

  const { grid, robots } = parseInputLines(lines);
  console.debug("Parsed input lines", { grid, robots });

  robots.forEach((robot) => {
    robot.ProcessInstructions(grid);
    if (robot.GetStatus() === "LOST") {
      grid.AddScent({ position: robot.GetPosition(), orientation: robot.GetOrientation() });
    }
  });
  console.info("Processed all robot instructions");

  await produceReport(robots);

  console.info("End of RB Robots");
}

await main();
