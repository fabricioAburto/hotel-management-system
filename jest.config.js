/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: ["<rootDir>/tests"],
  preset: "ts-jest",
  collectCoverage: true,
  testEnvironment: "node",
  coverageDirectory: "./coverage",
  transform: { "^.+\\.ts$": "ts-jest" },
  moduleFileExtensions: ["js", "ts", "json", "node"],
  moduleNameMapper: { "tests/(.*)": "<rootDir>/tests/$1" },
  testRegex: "(/tests/.*|(\\.|/)(test|spec|steps))\\.(ts|tsx|js)$",
};
