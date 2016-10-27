import { postForm as _postForm } 		from '../../models/contactForm/contactForm';



export const SEND_CONTACT_FORM = 'SEND_CONTACT_FORM';

export function postForm(data) {

	console.log('action');
	console.dir(data);

	return {
		type: SEND_CONTACT_FORM,
		promise: _postForm(data)
	}
}

export function postAndReset(data) {
	return (dispatch) => {
		return postForm(data).then(()=>{dispatch(reset('contact'))})
	}
}