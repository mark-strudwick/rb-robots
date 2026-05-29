# RB Robots

This is my submission for the Red Badger Developer Programming Problem.

# Getting started

Install the required `npm` dependencies.

```
npm install
```

The file `input-instructions.txt` contains the example problem input. Update this file to input a different problem.

The TypeScript code can be directly run using `tsx`

```
npm run app
```

A report will be generated in your terminal, and in the file `ouput-report.txt`

# Tests

This repository uses Vitest to run unit tests. Vitest was chosen over jest as it directly supports ESM modules, without complicated setup.

```
npm run test
```

# Code Quality

This project uses prettier, eslint, and TypeScript to keep a standard code style and help with code maintenance. The linting and build checks should run in CI to keep the main branch in-line with standards.

```
npm run format
npm run lint
npm run build
```

# Future improvements

- A UI to watch the robots move over time would be amazing!
- The robot is given a grid instance to get access to the scents and check valid position method, however, it doesn't quite feel right for the robot to know about the grid. Given more time, I would use a "controller" that manages robots and gives them instructions, while the robot only holds state.
- A production suitable logger (Pino) for structured logs and to set log levels for reduced debug noise.
- Validation could be stricter on inputs, for example, line lengths must be less than 100 characters.
- Error handling... currently, when an unexpected scenario occurs, an error is thrown and causes the program to exit. These scenarios could be handled more gracefully to provide error context to the user, and possibly continue the program for valid inputs/robots (depending on requirements).
- It would be nice if the input was more interactive, rather than asking the user to update a text file.
- The robot "rotate" method hardcodes the different orientation options. There is another method that uses an array of the orientations, indexed by the current orientation, and then move left/right through the array to get the next orientation. As there are only 8 options, it's not too bad to hardcode them.
- Use a bundler to build a minified js asset, rather than directly running the TS files with tsx.
