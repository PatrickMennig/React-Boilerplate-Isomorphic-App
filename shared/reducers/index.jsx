/**
 * This file exports all reducers you have created.
 * Redux will use this to build your store.
 * The name of each "sub store" is defined by export { default as <name> } ...
 *
 * Every time you create a new reducer, you **have** to add it to the index reducer.
 */

export { default as	formState }    		from './contactForm/formStateReducer';
export { default as content }			from './content/contentReducer';
export { default as form } 				from './formReducer/formReducer';