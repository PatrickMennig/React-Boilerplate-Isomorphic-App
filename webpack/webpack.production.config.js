var path =							require('path');
var webpack = 						require('webpack');

var webpackIsomorphicToolsConfig = 	require('./webpack-isomorphic-tools');
var WebpackIsomorphicToolsPlugin = 	require('webpack-isomorphic-tools/plugin');

var webpackIsomorphicToolsPlugin =	new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig);

var ExtractTextPlugin = 			require('extract-text-webpack-plugin');




const configuration = {

	devtool: 'source-map',

	context: path.resolve(__dirname, '..'),

	entry: {
		main: [
			'./shared/application.entry.js'
		]
	},

	output: {
		path: path.resolve(__dirname, '..', 'dist'),
		filename: '[name]-[chunkhash].js',
		chunkFilename: '[name]-[chunkhash].js',
		publicPath: '/dist/'
	},

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			},

			{
				test: /\.css$/,
				loader : ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=2&sourceMap')
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff&name=assets/[name].[ext]'
			},
			{
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff&name=assets/[name].[ext]'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/octet-stream&name=assets/[name].[ext]'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file?name=assets/[name].[ext]'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=image/svg+xml&name=assets/[sha512:hash:base64:7].[ext]'
			},
			{
				test: webpackIsomorphicToolsPlugin.regular_expression('images'),
				loader: 'url-loader?limit=10000&name=assets/[sha512:hash:base64:7].[ext]'
			}
		]
	},

	progress: true,

	resolve: {
		modulesDirectories: [
			'shared',
			'node_modules'
		],
		extensions: ['', '.json', '.js', '.jsx']
	},

	postcss: [
		require('postcss-custom-properties'), 	// Enable CSS custom props preprocessing
		require('postcss-calc') 				// Preprocess calc() functions
	],

	plugins: [
		// css files from the extract-text-plugin loader
		new ExtractTextPlugin('[name]-[chunkhash].css', {allChunks: true}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			},

			__CLIENT__: true,
			__SERVER__: false,
			__DEVELOPMENT__: false,
			__DEVTOOLS__: false
		}),

		// ignore dev config
		new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

		// optimizations
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),

		webpackIsomorphicToolsPlugin

	]
};

module.exports = configuration;