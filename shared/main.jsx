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