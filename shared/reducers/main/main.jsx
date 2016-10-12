import Immutable 						from 'immutable';
import { GET_MAIN_CONTENT }				from '../../actions/main/mainActions';


const defaultState = Immutable.Map({
	pending: false,
	resolved: false
});

export default function mainReducer (state, action={}) {

	switch (action.type) {

		case GET_MAIN_CONTENT:
			return Immutable.Map({
				pending: false,
				resolved: true,
				content: action.res.content
			});

		case GET_MAIN_CONTENT + '_REQUEST':
			/*state.set('pending', true);
			return state;*/

			return Immutable.Map({
				pending: true,
				resolved: false
			});


		case GET_MAIN_CONTENT + '_FAILURE':
			return Immutable.Map({
				pending: false,
				resolved: false
			});

		default:
			return Immutable.Map({
				pending: false,
				resolved: false
			});
	}
}