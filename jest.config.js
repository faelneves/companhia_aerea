module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/tests/**/FlightService.test.(ts|js|tsx)"],
  testEnvironment: "node",
  collectCoverageFrom: ["*/.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "./node_modules/",
    "./docs/",
    "./tests/",
    "./dist/",
    "./infra/",
    "./development",
  ],
};
