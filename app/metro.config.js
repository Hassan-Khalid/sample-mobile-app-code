const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const extraNodeModules = { 'shared': path.resolve(`${__dirname}../../shared`) };
const watchFolders = [path.resolve(`${__dirname}../../shared`)];
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  projectRoot: path.resolve(__dirname),
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
      // redirects dependencies referenced from common/ to local node_modules
        (name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`)),
    }),
    /* resolver options */
  },
  watchFolders,
  wachman: {

  },

};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
