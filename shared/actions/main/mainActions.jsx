import { getMainContent as getMain } from '../../models/main/main';


export const GET_MAIN_CONTENT = 'GET_MAIN_CONTENT';

export function getMainContent() {
	return {
		type: GET_MAIN_CONTENT,
		promise: getMain()
	}
}