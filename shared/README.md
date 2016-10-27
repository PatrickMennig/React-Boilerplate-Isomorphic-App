# The heart of your application: shared-folder

This folder contains the actual code of your application, i.e. the UI, the routes, the react-redux specific stuff etc.
The [main README file](../README.md) already contains a description of the folder structure.


## How does it work?

Some files here a placed on the root level of this folder as they contain the main code to make your app working.
The app starts with the file *application.entry.js* which is just requiring the *application.jsx* file.
This is just to avoid starting with a .jsx file on the first level, nothing more.

The real start is *application.jsx* which looks as follows:

```
import 'babel-polyfill'
import React          			from 'react'
import ReactDOM       			from 'react-dom'
import { render }     			from 'react-isomorphic-render/redux'
import { common }      			from './main';
import htmlAssets 				from './htmlAssets';
import configuration			from '../configuration';

for (let asset of Object.keys(htmlAssets)) {
	htmlAssets[asset]()
}

const create_routes = require('./routes/routes');

// renders the webpage on the client side
render ({
	// enable/disable development mode (true/false)
	development: process.env.NODE_ENV === 'development',

	// enable/disable Redux dev-tools (true/false)
	development_tools: configuration.env.devTools ? require('./devtools') : false
}, common);


if(process.env.NODE_ENV === 'development'){
	module.hot.accept(); // <-- this enables hot module replacement
}
```

The real magic here (borrowed from the webapp example of webpack-isomorphic-tools) lies within the call to the render function that passes some configuration for the dev tools and then an object imported as **common**. 
This is a reference to *main.jsx* which loads the routes, the reducers, middlewares, and the hot-reload stuff for webpacks development server.
I can't tell you why it was necessary to duplicate the hot module replacement stuff but without it didn't work. 
This might already be obsolete with new releases...  

```
import routes  						from './routes/routes';
import wrapper 						from './wrapper'

import promiseMiddleware			from './redux/middleware/promiseMiddleware';



export const common = {
	// Redux reducer
	// (either an object or a function returning an object)
	reducer: () => require('./reducers'),
	//reducer: store,

	// React-router routes
	// (either a `<Route/>` element or a `function({ store })` returning a `<Route/>` element)
	routes,

	// Wraps React page component with arbitrary elements (e.g. <Provider/>, etc; see an example below)
	wrapper,

	redux_middleware(middleware)
	{
		middleware.push(promiseMiddleware);
		return middleware
	},

	preload: {},

	on_store_created({ reload_reducer })
	{
		// (for Webpack users only)
		//
		// client side hot module reload for Redux reducers
		// http://webpack.github.io/docs/hot-module-replacement.html#accept
		if (process.env.NODE_ENV === 'development' && module.hot)
		{
			// this path must be equal to the path in the `require()` call in `create_store` above
			module.hot.accept('./reducers', reload_reducer)
		}
	}
};
```

These two files together form the entry to your application and make the rest work like a charm ;-)

## Adding custom code

If you do not add middleware you won't need to change anything in *application.jsx* or *main.jsx*.   
All your code will go into the specific subfolders.
They are split as it feels appropriate for the flux/redux architecture (see the [main README file](../README.md) for an explanation of the decision).   

Your custom component will go into "shared/components". 
I encourage you to structure them with folders as it feels appropriate to you.
By adding them to "shared/components/index.jsx" you do not need to worry about long import paths as they are available at the root level of the components folder.
This boilerplate project supports webpacks css modules, hence you can place the css for your components directly in the same folder.
This is pretty neat and allows you to locally scope css class names.

Your typical workflow might look like this.
Create your new container component (e.g. a new page for your web application) and add your route.
Create stores (reducers) associated with it (add them to "shared/reducers/index.jsx"!) create your actions and models and start developing the custom components shown on this page.
Test, repeat, ... and see your app growing ;-)
This workflow should also allow a team of developers split into more design-oriented frontend developers and others to work together seamlessly.
The first will create and style the components (you can easily create a playground container for them to see them in the browser) and the latter will work on routes, reducers, actions, models, containers etc.

