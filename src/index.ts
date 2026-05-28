import { readFileSync } from "fs";

function main() {
  console.info("Starting RB Robots");

  const filePath = "input-instructions.txt";
  const fileContents = readFileSync(filePath, "utf8").toString();
  console.info(fileContents);

  const lines: string[] = fileContents.split(/\r?\n/).filter((line) => line.trim() !== "");
  console.info(lines);

  // first line
  // x y
  // 2 lines per robot (seperated by an empty line)
  // initial coordinate and orientation
  // x y ori
  // Instructions
  // RFRFRFRF
}

main();
