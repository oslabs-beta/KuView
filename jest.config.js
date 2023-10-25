module.exports = {
  preset: 'ts-jest',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: '__tests__',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    "\\.(PNG|png|jpg|jpeg|gif|svg)$": "<rootDir>/__mock__/fileMock.js",
  },
};
