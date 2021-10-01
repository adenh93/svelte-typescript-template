/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "ts", "svelte"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }],
  },
  bail: false,
  verbose: true,
}
