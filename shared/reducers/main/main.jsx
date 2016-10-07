import Immutable 						from 'immutable';
import { LOAD,
	LOAD_FAILURE,
	LOAD_REQUEST } 						from '../../reducers/main/static';


const defaultState = new Immutable.Map({
	loaded: false
});

export default function teamReducer (state=defaultState, action={}) {

	switch (action.type) {

		case LOAD:
			return new Immutable.Map({
				...state,
				loading: true
			});

		case LOAD_REQUEST:
			return new Immutable.Map({
				loaded: true,
				loading: true
			});

		case LOAD_FAILURE:
			return new Immutable.Map({
				loaded: false,
				loading: true
			});

		default:
			return state;
	}
}