import React     				from 'react';
import { Route, IndexRoute } 	from 'react-router';

import { App, Home }			from '../containers';



export default function () {
	return (
		<Route name="app" component={App} path="/">
			<IndexRoute component={Home} />
		</Route>
	);
};