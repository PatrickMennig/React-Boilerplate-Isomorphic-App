import web_service,
		{ api as apiService, http } from 'web-service'
import path							from 'path';
import configuration				from './configuration';

var isomorphine = 					require('../../shared/models/index.js');




const web = web_service({});

// serve static asset files
web.files('/assets', path.join(__dirname, '../../', 'dist/assets'));

// TODO proxy other requests to specific services
//web.use(isomorphine.router);

// Proxy all remaining requests to Webpage rendering server
web.proxy('/', 'http://' + configuration.addressBook.webpageServer.http.host + ':' + configuration.addressBook.webpageServer.http.port);

// start the server
web.listen(configuration.addressBook.webserver.http.port).then(() =>
	{
		console.info('[main-server] running. Listening at ' + `http://${configuration.addressBook.webserver.http.host}:${configuration.addressBook.webserver.http.port}`);
		//console.info(`Now go to http://${configuration.addressBook.webserver.http.host}:${configuration.addressBook.webserver.http.port}`);
	},
	error =>
	{
		console.error(error, 'Web server shutdown');
});