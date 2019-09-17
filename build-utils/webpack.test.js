const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'test',
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('test'),
      }
    }),
  ],
}