var configuration = require('./webpack.config');

var webpack = 						require('webpack');

var express =						require('express');
var webpack_dev_middleware = 		require('webpack-dev-middleware');
var webpack_hot_middleware = 		require('webpack-hot-middleware');

var WebpackDevServer = 				require('webpack-dev-server');

var applicationConfiguration = 		require('../server/main/configuration.jsx');
var webpackHost = 					applicationConfiguration.development.webpack.development_server.host;
var webpackPort = 					applicationConfiguration.development.webpack.development_server.port;



configuration.devtool = 'cheap-module-eval-source-map'; 	//'inline-source-map';

configuration.entry = {
	main: [
		//'webpack-hot-middleware/client?path=http://' + webpackHost + ':' + webpackPort + '/__webpack_hmr',
		'webpack-dev-server/client?http://' + webpackHost + ':' + webpackPort,
		'webpack/hot/only-dev-server',
		'./shared/application.entry.js'
	]
};

configuration.plugins = configuration.plugins.concat([
	// hot reload
	new webpack.HotModuleReplacementPlugin(),
	//new webpack.IgnorePlugin(/webpack-stats\.json$/),
	new webpack.DefinePlugin({
		__CLIENT__: true,
		__DEVTOOLS__: true,
		'process.env': {
			NODE_ENV: '"development"'
		}
	}),
	webpackIsomorphicToolsPlugin.development()
]);

module.exports = configuration;




new WebpackDevServer(webpack(configuration), {
	publicPath: configuration.output.publicPath,
	hot: true,
	historyApiFallback: true,
	headers     : { "Access-Control-Allow-Origin": "*" },
	stats       : 'errors-only'
	//proxy: {'*': 'http://localhost:3000'}
}).listen(webpackPort, webpackHost, function (err, result) {
	if(err) return console.log(err);
	console.log('[webpack-dev-server] running. Listening at http://' + webpackHost + ':' + webpackPort);
});




/*
// http://webpack.github.io/docs/webpack-dev-server.html
const development_server_options =
{
	quiet       : false, // don’t output anything to the console
	noInfo      : true, // suppress boring information
	hot         : true, // adds the HotModuleReplacementPlugin and switch the server to hot mode. Note: make sure you don’t add HotModuleReplacementPlugin twice
	inline      : true, // also adds the webpack/hot/dev-server entry

	// You can use it in two modes:
	// watch mode (default): The compiler recompiles on file change.
	// lazy mode: The compiler compiles on every request to the entry point.
	lazy        : false,

	// network path for static files: fetch all statics from webpack development server
	publicPath  : configuration.output.publicPath,

	headers     : { "Access-Control-Allow-Origin": "*" },
	stats       : { colors: true }
};

const compiler = webpack(configuration);

// const development_server = new webpack_development_server(compiler, development_server_options)

const development_server = new express();

development_server.use(webpack_dev_middleware(compiler, development_server_options));
development_server.use(webpack_hot_middleware(compiler));

development_server.listen(applicationConfiguration.development.webpack.development_server.port, function (error) {
	if (error)
	{
		console.error(error.stack || error);
		throw error
	}

	console.log('[webpack-dev-server] running. Listening at http://' + applicationConfiguration.development.webpack.development_server.host + ':' + applicationConfiguration.development.webpack.development_server.port);
});
*/