/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-27T11:43:15+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: webpack.dev.config.js
 * @Last modified by:   xf
 * @Last modified time: 2017-10-10T10:47:54+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

const path = require('path')
const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function(env, argv) {
  return {
    entry: './core/apps/admin/index.js',
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, 'core/apps/admin/assets/'),
      publicPath: 'http://localhost:8082/',
    },
    devServer: {
      contentBase: "./core/apps/admin/assets/",
      port: 9000,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      loaders: [{
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        stats: {
            version: false,
            hash: false,
            maxModules: 0
        },
        compress: false,
        clientLogLevel: "none",
        port: 8082,
        // hot: true,
        // hotOnly: true,
        host: "localhost",
        overlay: {
            warnings: true,
            errors: true
        },
    },
    devtool: 'cheap-source-map',
    // devServer: {
    //   inline: true
    // }
    // devtool: env.production ? 'source-maps': 'eval',
    // plugins: [
    //   new webpack.optimize.UglifyJsPlugin({
    //     compress: argv["optimize-minimize"] // only if -p or --optimize-minimize were passed
    //   })
    // ]
  }
}
