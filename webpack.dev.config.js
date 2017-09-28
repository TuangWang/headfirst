/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-27T11:43:15+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: webpack.dev.config.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-28T15:43:02+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function(env, argv) {
  return {
    entry: './core/apps/admin/index.jsx',
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, 'core/apps/admin/assets/'),
    },
    devServer: {
      contentBase: "./core/apps/admin/assets/",
      port: 9000,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [{
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    },
    devtool: env.production ? 'source-maps': 'eval',
    // plugins: [
    //   new webpack.optimize.UglifyJsPlugin({
    //     compress: argv["optimize-minimize"] // only if -p or --optimize-minimize were passed
    //   })
    // ]
  }
}
