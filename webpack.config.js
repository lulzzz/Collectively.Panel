const argv = require('yargs').argv;
const _ = require('lodash');
const webpack = require('webpack');

const appConfig = require('./config/main');
const appConfigDev = require('./config/dev');

const ENV = argv.env || 'dev';

function composeConfig(env) {
  if (env === 'dev') {
    return _.merge({}, appConfig, appConfigDev);
  }

  if (env === 'production') {
    return _.merge({}, appConfig, appConfigProduction);
  }
}

module.exports = {
  entry: [
    './src/index.js'
  ],
  plugins: [
   new webpack.DefinePlugin({
     __APP_CONFIG__: JSON.stringify(composeConfig(ENV))
   })
 ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },

};
