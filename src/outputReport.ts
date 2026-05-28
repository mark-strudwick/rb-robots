import { writeFile } from "fs/promises";

import type { Robot } from "./models/robot.js";

export async function produceReport(robots: Robot[]) {
  const reports = robots.map((robot) => {
    const position = robot.GetPosition();
    const orientation = robot.GetOrientation();
    const status = robot.GetStatus();

    return `${position.x} ${position.y} ${orientation} ${status === "LOST" ? status : ""}`;
  });

  const reportString = reports.join("\n");
  await writeFile("output-report.txt", reportString, "utf-8");
  console.info("=====");
  console.info("Report:");
  console.info("=====");
  console.info(reportString);
  console.info("=====");
}
