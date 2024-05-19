const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  // resolver: {
  //   extraNodeModules: {
  //     // Tùy chỉnh các thư viện không phải là Native Modules
  //     'my-custom-module': path.resolve(__dirname, 'src/custom-module'),
  //   },
  // },
  // transformer: {
  //   babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
  // },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
