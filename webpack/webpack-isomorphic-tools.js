var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {

	webpack_assets_file_path : './dist/webpack-assets.json',
	webpack_stats_file_path  : './dist/webpack-stats.json',

	assets: {
		images: {
			extensions: [
				'jpeg',
				'jpg',
				'png',
				'gif'
			],
			parser: WebpackIsomorphicToolsPlugin.url_loader_parser
		},
		fonts: {
			extensions: [
				'woff',
				'woff2',
				'ttf',
				'eot'
			],
			parser: WebpackIsomorphicToolsPlugin.url_loader_parser
		},
		svg: {
			extension: 'svg',
			parser: WebpackIsomorphicToolsPlugin.url_loader_parser
		},
		style_modules: {
			extensions: ['css', 'scss', 'less'],
			filter: function filter(module, regex, options, log) {
				if (options.development) {
					return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log);
				}
				// In production mode there will be no CSS text at all
				// because all styles will be extracted by Webpack Extract Text Plugin
				// into a .css file (as per Webpack configuration).
				//
				// Therefore in production mode `filter` function always returns non-`true`.
				return regex.test(module.name);
			},

			// How to correctly transform kinda weird `module.name`
			// of the `module` created by Webpack "css-loader"
			// into the correct asset path:
			path: function (module, options, log) {
				if (options.development)
				{
					// In development mode there's Webpack "style-loader",
					// so `module.name`s of the `module`s created by Webpack "css-loader"
					// (those picked by the `filter` function above)
					// will be kinda weird, and this path extractor extracts
					// the correct asset paths from these kinda weird `module.name`s
					return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
				}
				// in production mode there's no Webpack "style-loader",
				// so `module.name`s will be equal to correct asset paths
				return module.name
			},
				
			// path: WebpackIsomorphicToolsPlugin.style_loader_path_extractor,

			// How to extract these Webpack `module`s' javascript `source` code.
			// Basically takes `module.source` and modifies its `module.exports` a little.
			parser: function(module, options, log)
			{
				if (options.development)
				{
					// In development mode it adds an extra `_style` entry
					// to the CSS style class name map, containing the CSS text
					return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
				}

				// In production mode there's Webpack Extract Text Plugin
				// which extracts all CSS text away, so there's
				// only CSS style class name map left.
				return module.source
			}
		}
	}
};