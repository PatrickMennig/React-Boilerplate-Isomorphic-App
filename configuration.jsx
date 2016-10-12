module.exports = {
	
	env: {
		env: 'development',							// production,
		devTools: false,
		disableServerSideRendering: false
	},

	output: {
		publicPath: 'dist'
	},

	development: {
		webpack: {
			development_server:	{
				host: 'localhost',
				port: 3001
			},
			isomorphic_tools: {
				port: 9999
			}
		}
	},
	
	addressBook: {

		webserver:	{
			http: {
				host: 'localhost',
				port: 3000
			}
		},

		webpageServer:	{
			http: {
				host: 'localhost',
				port: 3002
			}
		},

		contentServer: {
			http: {
				host: 'localhost',
				port: 3003
			}
		}
	}
};