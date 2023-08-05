module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: '__tests__',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
  },
  // projects: [
  //   {
  //     displayName: 'node',
  //     testEnvironment: 'node',
  //     testRegex: '__tests__/express/.*\\.(jsx?|tsx?)$',
  //   },
  // ],
  projects: [
    {
      displayName: 'node', // Project name for testing Express with SuperTest
      testEnvironment: 'node', // Use Node.js environment
      testRegex: '__tests__/express/.*\\.(jsx?|tsx?)$', // Regex pattern for Express tests
    },
    {
      displayName: 'client', // Project name for testing React with React Testing Library
      testEnvironment: 'jsdom', // Use jsdom environment for browser-like testing
      testMatch: ['<rootDir>/src/**/__tests__/react/*.(js|jsx|ts|tsx)'], // Match React tests
    },
  ],
};
