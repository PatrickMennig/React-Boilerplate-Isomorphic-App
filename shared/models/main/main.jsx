import 'isomorphic-fetch';



export function getMainContent() {
	return new Promise((resolve, reject) => {
		fetch('/content/main').then(response => {
			if (response.status >= 400) {
				reject(new Error("Bad response from server"));
			}
			resolve(response.json());
		});
	});
}