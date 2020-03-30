const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './src/client.jsx',
    bundle: './src/bundle.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { 
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel-loader',
        test: /\.jsx$/
      }
    ]
 }
}
