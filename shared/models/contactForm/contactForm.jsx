import superagent 						from 'superagent';



export function postForm (data) {

	return new Promise((resolve, reject) => {

		superagent
			.post('/sendcontactform/')
			.send(data)
			.set('Content-Type', 'application/json')
			.end((err, res) => {

				if (res.status >= 400) {
					reject(new Error("Bad response from server"));
				}

				resolve(res);

			});
	});
}