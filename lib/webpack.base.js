const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
// const MyPlugin = require('./plugin/myPlugin.js');

const processRoot = process.cwd();

const setMPA = () => {
  const entry = {};
  const HTMLWebpackPlugin = [];

  const fileList = glob.sync(path.join(processRoot, "./src/*/index.js"));

  fileList.forEach(file => {
    const match = file.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1];
    entry[pageName] = file;
    HTMLWebpackPlugin.push(
      new HtmlWebpackPlugin({
        template: path.join(processRoot, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        inject: true,
        chunks: [pageName],
        minify: {
          html5: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          removeComments: true
          // removeEmptyElements: true
        }
      })
    );
  });

  return {
    entry,
    HTMLWebpackPlugin
  };
};

const MPA = setMPA();
module.exports = {
  entry: MPA.entry,
  // entry: __dirname + "/app.js",
  output: {
    path: path.resolve(processRoot, "dist"),
    filename: "[name]-[hash].js"
  },
  resolveLoader: {
    modules: ["node_modules", path.resolve(processRoot, "loader")]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|gif|jpeg|jpg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10240
          }
        }
      },
      {
        test: /\.text$/,
        use: [
          {
            loader: "text-loader",
            options: {
              name: "Alice"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ].concat(MPA.HTMLWebpackPlugin)
};
