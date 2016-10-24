import webservice,
		{ api as apiService, http } from 'web-service'
import path							from 'path';
import configuration				from '../../configuration';

const addressBook = configuration.addressBook;




const web = webservice();

// serve static asset files
web.files('/assets', path.join(__dirname, '../../', 'dist/'));

// proxy other requests to specific services
web.proxy('/content', proxyAddress(addressBook.contentServer));
web.proxy('/contact', proxyAddress(addressBook.contactFormServer));

// Proxy all remaining requests to Webpage rendering server
web.proxy('/', proxyAddress(addressBook.webpageServer));

// start the server
web.listen(configuration.addressBook.webserver.http.port).then(() => {
		console.info('[main-server] running. Listening at ' + proxyAddress(addressBook.webserver));
	},
	error => {
		console.error(error, 'Web server shutdown');
});




function proxyAddress(addressBookEntry) {
	return 'http://' + addressBookEntry.http.host + ':' + addressBookEntry.http.port
}