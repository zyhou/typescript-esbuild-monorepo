const baseConfig = require('../../jest.config');
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

const customJestConfig = {
    ...baseConfig,
    name: '@project/app',
    displayName: '@project/app',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
