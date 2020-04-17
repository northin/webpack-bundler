const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
};

module.exports = merge(baseConfig, devConfig);
