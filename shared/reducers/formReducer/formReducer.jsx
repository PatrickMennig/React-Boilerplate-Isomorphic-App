import { reducer as formReducer } 			from 'redux-form';
import { SEND_CONTACT_FORM }				from '../../actions/contactForm/contactFormActions';



export default formReducer.plugin({
	contact: (state, action) => {
		switch (action.type) {
			// Reset the form content after successfully submitting the contact form
			case SEND_CONTACT_FORM:
				return undefined;
			default:
				return state;
		}
	}
});