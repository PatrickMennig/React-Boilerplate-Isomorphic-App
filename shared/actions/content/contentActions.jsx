/**
 * Import the associated model to access the function that
 * actually works with the data.
 * In the redux lifecycle, this method sits between the action and the reducer step.
 */
import { getContent as _getContent } from '../../models/content/contentModel';

/**
 * We export the action name to reduce typos across the app as
 * it is reused in the reducer.
 */
export const GET_CONTENT = 'GET_CONTENT';

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
export function getContent(page) {
	return {
		type: GET_CONTENT,
		page,
		promise: _getContent(page)
	}
}