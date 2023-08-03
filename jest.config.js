module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: '__tests__',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
  },
};
