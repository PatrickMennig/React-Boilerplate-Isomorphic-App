/**
 * Import the associated model to access the function that
 * actually works with the data.
 * In the redux lifecycle, this method sits between the action and the reducer step.
 */
import { postForm as _postForm } 		from '../../models/contactForm/contactForm';



/**
 * We export the action name to reduce typos across the app as
 * it is reused in the reducer.
 */
export const SEND_CONTACT_FORM = 'SEND_CONTACT_FORM';


/**
 * This is an action.
 * It just returns the action object, which has at least a type.
 * If you add a *promise* property, it will be handled asynchronously by
 * the promiseMiddleware.
 * It is then required that the value of this property is a promise.
 *
 * @param page
 * @returns {{type: string, page: *, promise: *}}
 */
export function postForm(data) {

	console.log('action');
	console.dir(data);

	return {
		type: SEND_CONTACT_FORM,
		promise: _postForm(data)
	}
}