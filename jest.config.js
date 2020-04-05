module.exports = {
    roots: [
        './src',
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.(css|less)$': './styleMock.js',
    },
    moduleFileExtensions: [
        'js',
        'ts',
        'tsx',
    ],
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/node_modules/**',
    ],
    snapshotSerializers: [
        'enzyme-to-json/serializer',
    ],
};
