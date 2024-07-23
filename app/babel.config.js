const path = require('path');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js', '.d.ts'],
        alias: {
          common: path.resolve(__dirname, './packages/common')
        }
      }
    ],
    "react-native-reanimated/plugin",
  ],
};