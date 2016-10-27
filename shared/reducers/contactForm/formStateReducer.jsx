import Immutable 						from 'immutable';
import { SEND_CONTACT_FORM }			from '../../actions/contactForm/contactFormActions';



export default function fromStateReducer (state, action={}) {

	switch (action.type) {

		case SEND_CONTACT_FORM:

			return Immutable.Map({
				...(state.toJS()),

				contact: {
					pending: false,
					resolved: true
				}
			});



		case SEND_CONTACT_FORM + '_REQUEST':

			return Immutable.Map({
				...(state.toJS()),

				contact: {
					pending: true,
					resolved: false
				}
			});



		case SEND_CONTACT_FORM + '_FAILURE':

			return Immutable.Map({
				...(state.toJS()),

				contact: {
					pending: false,
					resolved: false
				}
			});



		default:
			return Immutable.Map({});
	}
}