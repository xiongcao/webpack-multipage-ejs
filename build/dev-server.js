process.env.NODE_ENV = 'development';

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');

let config = require('./webpack.base.conf.js');

const options = {
  contentBase: path.join(__dirname, "../dist"),
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);

config.devtool = "inline-source-map";
config.plugins.push(new webpack.NamedModulesPlugin())
config.plugins.push(new webpack.HotModuleReplacementPlugin())

const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(8080, 'localhost', () => {
  console.log('dev server listening on port 8080');
});