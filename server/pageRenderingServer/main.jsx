import React 					from 'react';
import web_server				from 'react-isomorphic-render/server'

import configuration			from '../main/configuration.jsx';

import common					from '../../shared/main.jsx';
import htmlAssets				from '../../shared/htmlAssets.jsx';




const initializing_javascript =
	`
	document.body.classList.add('javascript-is-enabled')

	window.configuration =	{
		
	}
`;

const pageServer = web_server({

	disable_server_side_rendering : configuration.environment.disableServerSideRendering,

	// Http host and port for executing all client-side ajax requests on server-side
	application: {
		host: configuration.addressBook.webserver.http.host,
		port: configuration.addressBook.webserver.http.port
	},

	// Http Urls to javascripts and (optionally) CSS styles
	// which will be insterted into the <head/> element of the resulting Html webpage
	// (as <script src="..."/> and <link rel="style" href="..."/> respectively)
	//
	// Also a website "favicon".
	//
	assets: (url) => {
		if (configuration.environment.environment === 'development') {
			wit.refresh()
		}

		const assets = wit.assets();

		const result = {
			entry      : 'main',

			javascript : assets.javascript,
			style      : assets.styles,

			icon : htmlAssets.icon()
		};

		return result
	},

	/**
	 * The following code explicitly adds the htmlAssets.style object to the head of each html response.
	 * This is necessary to also render the styles on the server side.
	 */
	html: {
		head: function () {
			if(configuration.environment.environment === 'development' && htmlAssets.style) {
				return <style dangerouslySetInnerHTML={{ __html: htmlAssets.style().toString() }} charSet="UTF-8"/>
			}
		}
	},

	// (optional)
	/**
	 * Control the display of errors printed in the browser.
	 */
	print_error: { font_size: '12pt' }

}, common);


// Start webpage rendering server
pageServer.listen(configuration.addressBook.webpageServer.http.port, function(error)
{
	if (error) {
		console.log('[webpage-rendering-server] shutdown due to an error');
		return log.error(error);
	}

	const host = 'localhost';

	console.info(`[webpage-rendering-server] running. Listening at http://${host ? host : 'localhost'}:${configuration.addressBook.webpageServer.http.port}`)
});