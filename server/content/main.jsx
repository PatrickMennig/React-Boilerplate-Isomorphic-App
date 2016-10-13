import webservice					 from 'web-service'
import configuration				from '../../configuration';



const addressBook = configuration.addressBook;

const web = webservice({routing: true});

web.get ('/home', async ({ }) => ({ page: 'home', content : `This is sample content for the page home` }));

web.get ('/test', async ({ }) => ({ page: 'test', content : `This is sample content for the page test` }));

web.get ('/:page', async ({ page }) => ({ page, noContent: true }));

// start the server
web.listen(addressBook.contentServer.http.port).then(() => {
		console.info('[content-server] running. Listening at ' + `http://${addressBook.contentServer.http.host}:${addressBook.contentServer.http.port}`);
	},
	error => {
		console.error(error, 'Content server shutdown');
});