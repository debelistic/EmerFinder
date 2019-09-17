const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ],
}