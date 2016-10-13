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