import type { TE } from "../dist/index.js";
import te from "../dist/index.js";

const evilString = "'\"` \\'\\\"\\` ${foo}\\${foo}\\\\${foo}";
const simpleString = "aaa${a}aaa";

const testCases: Array<[TE, string]> = [
  [
    te`const foo = 7; return "abc${te.substring(evilString, '"')}123"`,
    `abc` + evilString + `123`,
  ],
  [
    te`const foo = 7; return 'abc${te.substring(evilString, "'")}123'`,
    `abc` + evilString + `123`,
  ],
  [
    te`const foo = 7; return \`abc${te.substring(evilString, "`")}123\``,
    `abc` + evilString + `123`,
  ],
  [
    te`const foo = 7; return "abc${te.substring(simpleString, '"')}123"`,
    `abc` + simpleString + `123`,
  ],
  [
    te`const foo = 7; return 'abc${te.substring(simpleString, "'")}123'`,
    `abc` + simpleString + `123`,
  ],
  [
    te`const foo = 7; return \`abc${te.substring(simpleString, "`")}123\``,
    `abc` + simpleString + `123`,
  ],
];

it.each(testCases)("foo", (teNode, expected) => {
  const compiled = te.compile(teNode);
  expect(compiled.refs).toEqual({});
  const result = te.run(teNode);
  expect(result).toEqual(expected);
});
