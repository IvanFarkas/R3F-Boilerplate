const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/inline'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build')
  }
}
