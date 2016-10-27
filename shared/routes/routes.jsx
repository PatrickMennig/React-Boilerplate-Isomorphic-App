import React     				from 'react';
import { Route, IndexRoute } 	from 'react-router';

import { App, Home, Contact }	from '../containers/index';
import { NotFound }				from '../components';



export default function () {
	return (
		<Route name="app" component={App} path="/">
			<IndexRoute component={() => <Home page="home" />} />
			<Route path="/test" component={() => <Home page="test" />} />


			<Route path="/contact" component={() => <Home page="home"> <Contact /> </Home>} />


			<Route path="*" state={404} component={() => <Home page="notFound"> <NotFound /> </Home>} />

		</Route>
	);
};