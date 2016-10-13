import 'isomorphic-fetch';



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