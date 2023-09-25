module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>'], // Directory containing your source code
    testMatch: ['**/*.spec.ts'], // File patterns for your test files
    testTimeout: 20000, // Set the timeout in milliseconds (e.g., 10000 for 10 seconds)
};