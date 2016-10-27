/**
 * Here, ismorphic-fetch is used to perform the GET request from the
 * client to the hosting server.
 */
import 'isomorphic-fetch';



/**
 * The model exports at least one function that returns a promise.
 * This is required by the promiseMiddelware to allow
 * async calls to the backend. *
 *
 * @param page
 * @returns {Promise}
 */
export function getContent(page) {

	return new Promise((resolve, reject) => {

		fetch(`/content/${page}`).then(response => {
			if (response.status >= 400) {
				reject(new Error("Bad response from server"));
			}
			resolve(response.json());
		});
		
	});
}