module.exports = {
  // The root directory for your tests
  roots: ['<rootDir>/src'],

  // A list of file extensions your tests use
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js',
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts',
  ],

  // The test environment that will be used for testing
  testEnvironment: 'node', // You can change this to 'jsdom' for browser-like testing

  preset: 'ts-jest',

  // Transform files before running tests (for example, with Babel)
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },

  // Module file extensions for importing modules
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],

  // A list of paths to modules that run some code to configure or set up the testing environment
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], // Create this file if needed

  // Ignore specific files or directories when collecting test coverage
  coveragePathIgnorePatterns: ['/node_modules/', '/build/'],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'lcov', 'text', 'clover'],

  // Jest will exit after all tests have completed running
  verbose: true,
};
