import path from 'path';

export default {
  devtool: 'cheap-module-source-map',
  context: __dirname,
  entry: {
    main: [
      './src/index.js'
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  }
};
