const merge = require("webpack-merge");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssnano = require("cssnano");
const baseConfig = require("./webpack.base.js");

const devConfig = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "ignore-loader"
      },
      {
        test: /\.less$/,
        use: "ignore-loader"
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:8].css"
    }),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: "react",
          entry:
            "https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js",
          global: "React"
        },
        {
          module: "react-dom",
          entry:
            "https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js",
          global: "ReactDOM"
        }
      ]
    }),
    function errorPlugin() {
      this.hooks.done.tap("done", stats => {
        if (
          stats.compilation.errors &&
          stats.compilation.errors.length &&
          process.argv.indexOf("--watch") === -1
        ) {
          console.log("build error"); // eslint-disable-line
          process.exit(1);
        }
      });
    }
  ]
};

module.exports = merge(baseConfig, devConfig);
