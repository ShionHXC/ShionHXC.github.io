var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {
            presets: ['es2015', 'react'],
            "plugins": [["import", { "libraryName": "antd", "style": "css" }]]
        }
    },{
        test:/\.css$/,
        loader:'style-loader!css-loader'
    },{
        test:/\.scss$/,
        loader:'style-loader!css-loader!sass-loader'
    },{
        test:/\.(png|jpg)$/,
        loader:'url-loader?limit=25000'
    }]
  }
};
module.exports = config;