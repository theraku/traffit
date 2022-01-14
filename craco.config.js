const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json"
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            importLoaders: 1,
            modules: {
              localIdentName:
                process.env.NODE_ENV === 'development' ? '[name]__[local]___[hash:base64:5]' : '_[hash:base64:5]'
            }
          }
        }
      }
    }
  ]
};
