module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'], // Load dotenv for all tests
  setupFiles: ['dotenv/config'], // Load dotenv for all tests
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy', // Replace with the correct path
  },
};
