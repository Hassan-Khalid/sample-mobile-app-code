const path = require('path');
const extraNodeModules = { 'shared': path.resolve(`${__dirname}../../shared`) };


module.exports = {
  roots:["./"],
  preset: 'react-native',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    "^shared/(.*)$": "<rootDir>/../../shared/$1",
//     "shared/(.*)$": [
//       extraNodeModules.shared,
//   "../../../../../../shared/services", // Additional path for resolver
// ],
  },
  // resolver:'<rootDir>/../../shared',
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native|react-navigation|@rneui/|@rneui/themed|@react-native-community|react-native-device-info|react-native-gesture-handler|@codler|axios)'],
  moduleDirectories: ['node_modules'],
  setupFiles: ['<rootDir>/packages/setupJestMocks.js', './node_modules/react-native-gesture-handler/jestSetup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'd.ts'],
  testRegex: '(/__tests__/.*|\\.(test))\\.(ts|tsx)$',
  collectCoverageFrom: ['packages/**/*.{ts,tsx}'],
  coverageReporters: ['json', 'lcov', 'clover', 'text'],
  coveragePathIgnorePatterns: [
    "<rootDir>/packages/common/assets",
    ".styles.ts",
    ".index.ts",
    ".mock.ts",
    "mock.*.ts",
    'CommonScreens.ts',
    'navigator.ts',
    'AppNavigator.tsx',
    'ApplicationContainer.tsx',
    'TranslationManager.ts',
    'NavigationService.ts',
    '<rootDir>/packages/oem/app',
    "<rootDir>/packages/common/declarations",
    "<rootDir>/packages/common/constants",
    "<rootDir>/packages/facility",
    "<rootDir>/packages/apollo/",
  ],
};
