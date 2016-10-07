module.exports = {
	
	environment: {
		environment: 'development',				// production,
		developmentTools: true,					// false
		disableServerSideRendering: false 		// true
	},

	output: {
		publicPath: 'dist'
	},

	development:
	{
		webpack:
		{
			development_server:
			{
				host: 'localhost',
				port: 3001
			},
			isomorphic_tools:
			{
				port: 9999
			}
		}
	},
	
	addressBook: {

		webserver:	{
			http:
			{
				host: 'localhost',
				port: 3000
			}
		},

		webpageServer:	{
			http:
			{
				host: 'localhost',
				port: 3002
			}
		}
	}
};

//export default configuration;