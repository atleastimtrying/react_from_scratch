module.exports = {
  entry: './js/init.js',
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders:[
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['react']
        }
      }
    ]
  }
};
