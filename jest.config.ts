/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import { Config } from "jest";
const config: Config = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/__mocks__/svg.tsx",
  },

  testEnvironment: "jsdom",

  transform: {
    "^.+\\.tsx$": "ts-jest",
    "^.+\\.ts$": "ts-jest",
  },
};

export default config;
