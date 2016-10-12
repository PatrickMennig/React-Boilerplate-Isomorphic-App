import webservice,
		{ api as apiService, http } from 'web-service'
import path							from 'path';
import configuration				from '../../configuration';

const addressBook = configuration.addressBook;




const web = webservice({routing: true});

web.get ('/main', async ({  }) => ({ content : 'THIS IS MY CONTENT WAAAA' }));

// start the server
web.listen(addressBook.contentServer.http.port).then(() => {
		console.info('[content-server] running. Listening at ' + `http://${addressBook.contentServer.http.host}:${addressBook.contentServer.http.port}`);
	},
	error => {
		console.error(error, 'Content server shutdown');
});