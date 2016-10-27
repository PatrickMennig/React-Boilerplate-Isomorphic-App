# Servers

The application is split into two main categories, the "shared" and the "server" folders.
All code related to servers is placed here.
Each server is placed in its own folder to maintain readability.

## Duplicate Code

Some servers like **main** and **conent** share a great portion of their code base.
While this is redundant and increases problems with code changes, it also allows to exchange one of them without affecting the other one.
This is the reason I went with this apporach.
You might feel like this is not the right way for you, then go and refactor common startup code to a **common** server folder and use this to power your servers.

## How does it work?

The entry point is the **main** server. It receives all request on the local machine and handles the routing.
It is started via the file *entry.js* and the main logic resides within *main.jsx*.  

```
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
web.proxy('/sendcontactform', proxyAddress(addressBook.contactFormServer));

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
```

Static files like images etc. are served via the `/assets/` path directly from disk.
Requests for specific servers are routed to the designated services/servers.
To add your own add it to the configuration's address book ("./configuration.jsx") create it and add the proxy route.
Don't forget to add it in your package.json's scripts to actually start it.
To avoid naming conflicts you might be interested in the [dependencies section of this readme](./main/README.md).


## Server engines/projects

You can use whatever server feels right to you.
Actually I am using a mix of servers in this project.
Small servers like the simple content example use a different project than the contactForm example, which uses express.
You don't even need to create the servers here in this project, just proxy the request to your server.
This might even be a proxy to a different machine with its own network address.


## Page Rendering Server

This server is designated to isomorphically render your page on the server and/or on the client.
It is tightly coupled with the *webpack-isomoprphic-tools* project and should remain unchanged as long as you do not know what you do ;-)

