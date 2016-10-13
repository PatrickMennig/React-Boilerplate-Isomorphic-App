import { getContent as _getContent } from '../../models/content/contentModel';


export const GET_CONTENT = 'GET_CONTENT';

export function getContent(page) {
	return {
		type: GET_CONTENT,
		page,
		promise: _getContent(page)
	}
}