module.exports = {
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(chartjs-adapter-date-fns)/)'
    ],
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy'
    },
    testEnvironment: 'jsdom',
  };