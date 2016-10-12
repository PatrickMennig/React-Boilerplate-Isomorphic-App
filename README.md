# Yet another React boilerplate project

## Motivation

Since Facebook has released react the community has shown it's awesomeness with countless projects leveraging the framework.
Many boilerplate projects exist that aim at helping developers getting started quickly.
You can even search and filter a pretty long list at <a href="http://andrewhfarmer.com/starter-project/" target="_blank">Andrew H Farmers site.</a>
While these projects all are awesome in their own way, I didn't find one that actually helped me understand what happens under the hood.
This boilerplate project tries to fill this gap with an uncommon approach: "documentation for all the things"!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisities

This project requires to have node.js and npm installed on your machine.
You can get your enviroment up and running by following this guide: <a href="http://blog.npmjs.org/post/85484771375/how-to-install-npm" target="_blank">How to install npm</a>. 
To manage your node versions, I recommend the <a href="https://github.com/creationix/nvm" target="_blank">Node Version Manager</a>.
It should be straightforward to setup your enviroment by following these guides.


### Installing

To actually use this boilerplate check it out, open your terminal and navigate to the root folder of the project.
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


## ToDo

A lot of work still has to be done to make this project worthy of the github community:

* Add a database connection sample
* Remove strange bug when initially starting the development server showing no output
* Documentation for all the things!
* Add redux-forms
* Complete production config for webpack
* Add deployment information
* Add local font usage example


## Contributing

to be done


## Authors

* **Patrick Mennig** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* Shoutout to all the awesome folks of the react community
* A special thank's goes to [Nikolay](https://github.com/halt-hammerzeit) for helping me understand his webpack-isomorphic-tools even on friday evenings ;)
