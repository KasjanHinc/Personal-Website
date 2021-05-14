const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

// console.log(process.env.NODE_ENV)

const env = process.env.NODE_ENV === 'production'
  ? new webpack.EnvironmentPlugin({ ...process.env })
  : new Dotenv()

module.exports = () => {
  const publicPath = env.NODE_ENV === 'local' ? {
    publicPath: '/'
  } : {}

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve('.'),
      ...publicPath
    },
    devtool: 'source-map',
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.s(a|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(png|jpe?g|gif|svg)$/i, use: 'file-loader' }
      ]
    },
    devServer: {
      contentBase: path.resolve('src'),
      hot: true,
      open: true,
      port: 8001,
      watchContentBase: true,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          secure: false
        }
      }
    },
    plugins: [
      new Dotenv(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body',
        favicon: './src/img/favicon.png'
      }),
      env
    ]
  }
}
