require('text-encoding').TextEncoder = require('util').TextEncoder;
require('text-encoding').TextDecoder = require('util').TextDecoder;
import '@testing-library/jest-dom';

module.exports = {
  // Other Jest configurations...
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '@testing-library/jest-dom/'],
  // Other Jest configurations...
};
