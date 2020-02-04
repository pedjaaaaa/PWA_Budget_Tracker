const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = {
  entry: {
    app: "./index.js",
    db: "./db.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
}
module.exports = config;
