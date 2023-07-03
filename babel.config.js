module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        "nativewind/babel",
        'react-native-reanimated/plugin',
        'transform-inline-environment-variables',
        [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env"
        }
      ]
    ]
  };
};