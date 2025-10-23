module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    // [
    //   'module-resolver',
    //   {
    //     root: ['./src'],
    //     alias: {
    //       '@': './src',
    //       '@api': './src/api',
    //       '@components': './src/components',
    //       '@screens': './src/screens',
    //     },
    //     extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    //   },
    // ],
  ],
};
