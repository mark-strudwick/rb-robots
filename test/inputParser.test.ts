import { expect, describe, it } from "vitest";

import { parseInputLines } from "../src/inputParser.js";

describe("parseInputLines", () => {
  it("returns true when given a valid grid position", () => {
    const input = ["5 3", "1 1 E", "RFRFRFRF", "3 2 N", "FRRFLLFFRRFLL", "0 3 W", "LLFFFLFLFL"];

    const result = parseInputLines(input);

    expect(result).toEqual({
      grid: { boundaryPosition: { x: 5, y: 3 }, scents: [] },
      robots: [
        {
          instructions: ["R", "F", "R", "F", "R", "F", "R", "F"],
          orientation: "E",
          position: {
            x: 1,
            y: 1
          },
          status: "OK"
        },
        {
          instructions: ["F", "R", "R", "F", "L", "L", "F", "F", "R", "R", "F", "L", "L"],
          orientation: "N",
          position: {
            x: 3,
            y: 2
          },
          status: "OK"
        },
        {
          instructions: ["L", "L", "F", "F", "F", "L", "F", "L", "F", "L"],
          orientation: "W",
          position: {
            x: 0,
            y: 3
          },
          status: "OK"
        }
      ]
    });
  });
});
