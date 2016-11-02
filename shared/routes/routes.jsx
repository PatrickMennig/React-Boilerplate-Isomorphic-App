import React     				from 'react';
import { Route, IndexRoute } 	from 'react-router';

import { App, Index, Contact }	from '../containers/index';
import { NotFound }				from '../components';



export default function () {
	return (
		<Route name="app" component={App} path="/">
			<IndexRoute component={() => <Index page="Index" />} />
			<Route path="/test" component={() => <Index page="test" />} />


			<Route path="/contact" component={() => <Index page="Index"> <Contact /> </Index>} />


			<Route path="*" state={404} component={() => <Index page="notFound"> <NotFound /> </Index>} />

		</Route>
	);
};