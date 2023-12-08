const config ={
  verbose: true,
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/tests/mocks/cssMock.js',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js',
  ],
  testEnvironment: 'jsdom',
};
module.exports = config;