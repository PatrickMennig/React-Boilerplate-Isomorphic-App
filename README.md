# Yet another React boilerplate project

## Motivation

Since Facebook has released react the community has shown it's awesomeness with countless projects leveraging the framework.
Many boilerplate projects exist that aim at helping developers getting started quickly.
You can even search and filter a pretty long list at <a href="http://andrewhfarmer.com/starter-project/" target="_blank">Andrew H Farmers site.</a>
While these projects all are awesome in their own way, I didn't find one that actually helped me understand what happens under the hood.
This boilerplate project tries to fill this gap with an uncommon approach: "documentation for all the things"!
The ultimate goal is to provide an extensive readme and code documentation.
You should be able to understand what I've done just by reading this, but if you really want to use this boilerplate project, the code should explain itself to you with the code comments to provide a great way to start your next project.

### Target Group
Is this an introduction to react or just an explanation of the boilerplate project?
Who should read this?
If you're familiar with react and you've already developed some apps with it, using the typical infrastructure you might feel like this is not the right place for you.
In case you just started learing react and want to have a base project that **explains** itself to you then you are in my target group.
I will not explain every react/redux/... feature but explain the way they are combined and brought together.

### Additional Notes

This project is still WIP and many features are not yet implemented (see ToDo section below).
If you feel like having a look, please do and leave me some feedback!
I will work on adding more features as often as there is time left at the end of the day ;-)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisities

This project requires to have node.js and npm installed on your machine.
You can get your enviroment up and running by following this guide: <a href="http://blog.npmjs.org/post/85484771375/how-to-install-npm" target="_blank">How to install npm</a>. 
To manage your node versions, I recommend the <a href="https://github.com/creationix/nvm" target="_blank">Node Version Manager</a>.
It should be straightforward to setup your enviroment by following these guides.


### Installing

To actually use this boilerplate check it out (or fork it on github), open your terminal and navigate to the root folder of the project.
Run the following command:

```
npm install
```

This will take a while to download all project dependencies and save them locally in your project folder under "node_modules".

When npm did it's job, run the following command:

```
npm run dev
```

to start the boilerplate project's servers. 

Open your browser of choice and navigate to http://localhost:3000 and you should see the sample site in all it's glory.
You might see nothing at all, just end the process and run it once again (see the ToDo section).

## Projects of React's ecosystem used

Not every awesome project / library can be used. The following list gives a short overview of the ones used for this boilerplate project.

* [React](https://facebook.github.io/react/) - This boilerplate project is for react applications
* [Redux]() - A great implementation of the Flux architecture for react apps
* [Webpack Isomorphic Tools]() - React apps don't need to work on the client only
* [Babel](https://babeljs.io) - Babel is used to transform jsx and ES6 syntax to plain old javascript for browsers
* [Webpack]() - We use webpack to bundle all projects files for development and production
* [React-Router]() - The routing library
* [Redux-Devtools]() - Enabling debugging of app state 
* [Webpack Hot Module Replacement]() - No page reload necessary to view code and style changes in development
* [Immutable]() - All app state is immutable
* [Classnames]() - Webpack allows us to use styles local to modules, classnames enables more than one class name
* [React Cellblock]() - An interesting grid library for responsive layouts of grids
* [Web-Service]() - A simple to use web server that works well with webpack-isomorphic-tools
* ... many others are used, I tried to just mention the most important


## Project structure

This project's structure is somewhat different to other (boilerplate) projects found on the web.
While you may argue that this shouldn't be an indicator for quality but a concern, I've experienced the structure of other projects as sometimes *difficult*.
After cloning the project and running `npm install` you will see the following folder structure:

```
.
+-- dist
+-- node_modules
+-- server
|   +-- content
|   +-- main
|   +-- pageRenderingServer
+-- shared
|   +-- actions
|   +-- assets
    |   +-- fonts
    |   +-- images
    |   +-- styles
|   +-- components
|   +-- containers
|   +-- models
|   +-- reducers
|   +-- redux
    |   +-- middleware
|   +-- routes
+-- webpack
```

Why did I choose this structure?
Most of the code resides in "shared", while server specific code is placed in "server".
Webpack's configuration is placed inside "webpack" to avoid cluttering the root folder.
Once you start running the build process, all output is moved to "dist".

Most of the time you will work in "shared" or "server". 
You might even ignore the other folders for now.

"shared" contains the main application you develop and this folder itself contains many children.
I am following redux's convention of splitting the UI into components and containers.
The first are unaware of application state hence should be reusable across projects.
All properties necessary for them to work are passed as props.
The latter (containers) are indeed aware of the application's state and connect to the store.

The folders "actions", "reducers" and "models" are tightly coupled to redux's way of thinking.
You may argue that this is pretty verbose, as you don't have to extensively split them like this,
but I've personally found this way of working *cleaner*. 
You may or may not disapprove.
Normally, you wouldn't need the "models" folder at all. 
I am using the models to represent the data structure and do client->server requests here.
The reason is, that in my opinion, the action should be unaware of the way the action result is obtained.
This way, I decouple the dispatching of an action from the actual way the result is obtained.

"redux" contains enhancements like additional middelware that is loaded.

The "routes" folder contains at least one file for all the app's routes. 
Again, this is nested deeper than necessary, just my personal opinion here again.

The "assets" folder contains - as you would expect ;-) - the app's assets like images, fonts or global styles.


## Where to start exploring?

This isn't an easy question, as I've found the parts of react projects to be extremely coupled by nature.
You need a server and the client code from start when developing an universal application.
Webpack and a handful of packages like webpack-isomporphic tools etc. are necesseray.
Routes, stores etc. have to be defined prior to really start working.

So, where to start?
Begin by exploring the folder structure and take a look at "shared/routes/routes.jsx". 

```
<Route name="app" component={App} path="/">
    <IndexRoute component={() => <Home page="home" />} />
    <Route path="/test" component={() => <Home page="test" />} />

    <Route path="*" state={404} component={() => <Home page="notFound"><NotFound /></Home>} />
</Route>
```

Here you will find all the available *pages* of the application.
We have a main container wrapping all subcomponents called App. 
It just wraps all child components and is used to define some app wide styles.

*This container is pretty verbose and might would have been easier to create with a stateless functional component, but I prefer the readability the class pattern provides #justmypopinion.*

```
import React 					        from 'react';
import styles					        from './app.css';
import { Page }					        from '../../components';

export default class App extends React.Component {
	render() {
		return (
			<Page>{this.props.children}</Page>
		)
	}
}
```

The Page component works the same way, it just applies some page-specfic styling.

```
import React, { Component, PropTypes } 	from 'react';
import styles							from './page.css';

export default class Page extends Component {
	render() {
		return (
			<div className={styles.page}>
				{this.props.children}
			</div>
		)
	}
}
```

At this time it just provides some basic styling.
The index route is "/" just displaying the "Page" container.
This contains a menu, a header and a footer.
If you navigate to any unknown route, you will see the "Page" container with the "NotFound" component.

If you visit http://localhost:3000 the index route is used and you see the "Page" container ("shared/containers/Page/Page.jsx").
This is a typical react-redux container, connecting to the application's state and displaying some child components like the Menu etc.

In the router, you will see that the way the notFound route is defined differs from the index route.
It returns a stateless component that nests a custom component inside the "Page" container.

Go and add another route of your choice.
Create a new container component, add it to "shared/components/index.js" for easier import and nest whatever component from "shared/components" feels appropriate.
Right now you will have to restart the process (`npm run dev`) or reload the browser as hot module replacement is a bit broken.
Hop to the browser and visit your new route.
You have created your first own page.

To show some custom content, go to "server/content/main.jsx" and add another *get* handler.
You should have added the page property to your new route: use the same name on the server and respond with some content.
(Reload) and revisit your page in the browser.
You will see the string you've entered on the server.

Why?
Go to "shared/actions" have a look at "./contentActions/contentActions.jsx".

```
import { getContent as _getContent } from '../../models/content/contentModel';


export const GET_CONTENT = 'GET_CONTENT';

export function getContent(page) {
	return {
		type: GET_CONTENT,
		page,
		promise: _getContent(page)
	}
}
```

It allows nothing but to dispatch the **GET_CONTENT** action.
This will use the function provided in "shared/models/content/contentModel.jsx" to create a GET request and access the route on the server for the passed page name. 
The promise is async and resolves at least two times.
In case the action contains the *promise* property, the "promiseMiddleware" in "shared/redux/middleware/promiseMiddleware" intercepts the action and dispatches customized actions for **_REQUEST** and **_FAILURE**.  

```
/* code omitted for brevity */

if (!promise) return next(action);

const SUCCESS = type;
const REQUEST = type + '_REQUEST';
const FAILURE = type + '_FAILURE';
next({ ...rest, type: REQUEST });

/* code omitted for brevity */
```

The reducer will handle all three actions:

```
import Immutable 						from 'immutable';
import { GET_CONTENT }					from '../../actions/content/contentActions';



export default function contentReducer (state, action={}) {

	switch (action.type) {

		case GET_CONTENT:

			return Immutable.Map({
				...(state.toJS()),

				[action.res.page]: {
					content: action.res.content,
					pending: false,
					resolved: true
				}
			});

		case GET_CONTENT + '_REQUEST':

			return Immutable.Map({
				...(state.toJS()),

				[action.page]: {
					pending: true,
					resolved: false
				}
			});


		case GET_CONTENT + '_FAILURE':

			return Immutable.Map({
				...(state.toJS()),

				[action.page]: {
					pending: false,
					resolved: false
				}
			});

		default:
			return Immutable.Map({});
	}
}
```

Once the content for a specific page is requested, the reducer adds an immutable object under the page's name key to the store.
The name of the content store is defined in "shared/reducers/index.jsx".
 
```
export { default as content }			from './content/contentReducer';
```

Upon the request, the state's object is in `pending: true` and `resolved: false`.
In case of a succesfull request the pending state is set to false and resolved to true.
If it fails, the pending state is also true but the resolved state is false.
You might use this this to display a loading info or errors.

This way you can easily implement some logic to handle simple pages that don't differ much but just display some content like the legal and disclaimer pages.

What if you want more advanced pages?
... more to follow soon!


## ToDo

A lot of work still has to be done to make this project worthy of the github community:

- [ ] Add a database connection sample
- [ ] Remove strange bug when initially starting the development server showing no output
- [ ] Documentation for all the things!
- [ ] Add redux-forms
- [ ] Complete production config for webpack
- [ ] Add deployment information
- [ ] Add local font usage example


## Contributing

to be done


## Authors

* **Patrick Mennig** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

In short words, do whatever you want with this code! Just be awesome!

## Acknowledgments

* Shoutout to all the awesome folks of the react community
* A special thank's goes to [Nikolay](https://github.com/halt-hammerzeit) for helping me understand his webpack-isomorphic-tools even on friday evenings ;). This boilerplate project also relies heavily on some of his code in his sample [webapp](https://github.com/halt-hammerzeit/webapp).
