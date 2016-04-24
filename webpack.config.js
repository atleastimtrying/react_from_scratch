module.exports = {
  entry: './js/init.js',
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve:{
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['react']
        }
      }
    ]
  }
};
