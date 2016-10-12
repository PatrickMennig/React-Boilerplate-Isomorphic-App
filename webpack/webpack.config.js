var path =							require('path');
var webpack = 						require('webpack');

var webpackIsomorphicToolsConfig = 	require('./webpack-isomorphic-tools');
var WebpackIsomorphicToolsPlugin = 	require('webpack-isomorphic-tools/plugin');

// defining the wit plugin globally to access it in sub-configuration files
global.webpackIsomorphicToolsPlugin = 	
									new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfig);

var ExtractTextPlugin = 			require('extract-text-webpack-plugin');

var applicationConfiguration = 		require('../configuration.jsx');
var webpackHost = 					applicationConfiguration.development.webpack.development_server.host;
var webpackPort = 					applicationConfiguration.development.webpack.development_server.port;



const configuration = {
	
	context: path.resolve(__dirname, '..'),

	entry: {
		main: [
			'./shared/application.entry.js'
		]
	},

	output: {
		path: path.resolve(__dirname, '..', 'dist'),
		filename: '[name].js',
		chunkFilename: '[name]-[chunkhash].js',
		publicPath: 'http://' + webpackHost + ':' + webpackPort + '/'
	},

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			},

			{
				test: /\.css$/,			//[s]?

				// TODO css?modules not working with webpack-isomorphic-tools server side rendering of styles
				loaders : [
					'style',
					'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
					//css-loader?importLoaders=2&sourceMap=true
					'postcss-loader'
					//'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
				]
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
				loader: 'url-loader?limit=1&name=assets/[sha512:hash:base64:7].[ext]'
			}
		]
	},

	// PostCSS plugins
	// Note: CSS preprocessing comes with limitations, and generally only applies to
	// what can be determined or calculated ahead of time (e.g. what isn't dependent
	// on the page's dimensions)
	postcss: [
		require('postcss-custom-properties'), // Enable CSS custom props preprocessing
		require('postcss-calc') // Preprocess calc() functions
	],

	plugins: [
		// Output CSS to a separate, CSS-only bundle
		new ExtractTextPlugin('styles-bundle.css')
	],

	progress: true,

	resolve: {

		modulesDirectories: [
			'node_modules',
			'shared'
		],

		extensions: ['', '.json', '.js', '.jsx']
	}
};

module.exports = configuration;




/*
postcss: function postcss() {
	return [autoprefixer];
},
*/

// var path =						require('path');
// var webpack = 					require('webpack');
//
// var wit =						require('webpack-isomorphic-tools/plugin');
// var witConfig = 				require('./webpack-isomorphic-tools');
//
//
// var autoprefixer = 				require('autoprefixer');
// var css_custom_properties =		require('postcss-custom-properties');
// var postcss_calc = 				require('postcss-calc');
//
//
//
// console.log('WEBPACK CONFIG IS USED');
//
//
//
// const root_folder = path.resolve(__dirname, '..');
// const frontend_root_folder = path.resolve(__dirname, '..', 'shared');
//
// const assets_source_folder = path.resolve(frontend_root_folder, 'assets');
//
// const webpack_isomorphic_tools_plugin = new wit(witConfig);
//
// const regular_expressions = {
// 	javascript : /\.(js|jsx)$/,
// 	styles     : /\.scss$/
// };
//
// const configuration = {
//
// 	// resolve all relative paths from the project root folder
// 	context: frontend_root_folder,
//
// 	entry:	{
// 		main: './application.entry.js'
// 	},
//
// 	output:
// 	{
// 		// filesystem path for static files
// 		path: path.resolve(root_folder, 'dist'),
//
// 		// network path for static files
// 		publicPath: '/assets/',
//
// 		// file name pattern for entry scripts
// 		filename: '[name].[hash].js',
//
// 		// file name pattern for chunk scripts
// 		chunkFilename: '[name].[hash].js'
//
// 		// sourceMapFilename: '[file].map'
// 	},
//
// 	module:
// 	{
// 		loaders:
// 		[
// 			{
// 				test   : /\.json$/,
// 				loader : 'json-loader'
// 			},
// 			// This loader will be enhanced with `react-transform-hmr`
// 			{
// 				test    : regular_expressions.javascript,
// 				include :
// 				[
// 					path.resolve(root_folder, 'shared')
// 				],
// 				loader: 'babel-loader',
// 				query:
// 				{
// 					// currently Relay is not used in this project
// 					// plugins: [path.resolve(root_folder, 'code/relay/babel_relay_plugin')]
// 				}
// 			},
// 			// This loader won't be enhanced with `react-transform-hmr`
// 			{
// 				test    : regular_expressions.javascript,
// 				include :
// 				[
// 					path.resolve(root_folder, 'shared')
// 				],
// 				loader: 'babel-loader'
// 			},
// 			{
// 				test    : regular_expressions.styles,
// 				include : assets_source_folder,
// 				loaders :
// 				[
// 					'style-loader',
// 					'css-loader?importLoaders=2&sourceMap',
// 					'postcss-loader',
// 					'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
// 				]
// 			},
// 			// {
// 			// 	test    : Webpack_isomorphic_tools_plugin.regular_expression(['woff', 'woff2', 'eot', 'ttf'].concat(webpack_isomorphic_tools_configuration.assets.images.extensions)),
// 			// 	include : assets_source_folder,
// 			// 	loaders :
// 			// 	[
// 			// 		'url-loader?limit=10240' // Any png-image or woff-font below or equal to 10K will be converted to inline base64 instead
// 			// 	]
// 			// },
// 			{
// 				test    : webpack_isomorphic_tools_plugin.regular_expression('fonts'),
// 				include : assets_source_folder,
// 				loaders :
// 				[
// 					'url-loader?limit=10240' // Any png-image or woff-font below or equal to 10K will be converted to inline base64 instead
// 				]
// 			},
// 			{
// 				test    : webpack_isomorphic_tools_plugin.regular_expression('images'),
// 				include : assets_source_folder,
// 				loaders :
// 				[
// 					'url-loader?limit=10240' // Any png-image or woff-font below or equal to 10K will be converted to inline base64 instead
// 				]
// 			},
// 			{
// 				test    : webpack_isomorphic_tools_plugin.regular_expression('html'),
// 				include : assets_source_folder,
// 				loader  :  'file-loader'
// 			}
// 		]
// 	},
//
//
//
//
//
// 	resolve:
// 	{
// 		// you can now require('file') instead of require('file.coffee')
// 		extensions: ['.jsx', '.json', '.js', ''],
//
// 		// An array of directory names to be resolved to the current directory
// 		// as well as its ancestors, and searched for modules.
// 		// This functions similarly to how node finds “node_modules” directories.
// 		moduleExtensions: ['node_modules']
// 	},
//
// 	plugins:
// 	[
// 		// // extracts common javascript into a separate file
// 		// // (use [contenthash] in production)
// 		// new webpack.optimize.CommonsChunkPlugin('common', 'common.[hash].js'),
//
// 		// global variables
// 		// new webpack.DefinePlugin(define_plugin_global_variables)
// 	]
// };
//
// module.exports = configuration;
//
// // will be used in development and production configurations
// //configuration.regular_expressions = regular_expressions
//
//
//
//
//
// /*
//  postcss: () =>
//  ([
//  autoprefixer({ browsers: 'last 2 version' }),
//  css_custom_properties(),
//  postcss_calc()
//  ]),
//  */
// // maybe some kind of a progress bar during compilation
// //progress: true,