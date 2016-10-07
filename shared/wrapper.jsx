import React, { Component, PropTypes } 	from 'react';
import { Provider }                    	from 'react-redux';

/*
import lightBaseTheme 					from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme 						from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider 				from 'material-ui/styles/MuiThemeProvider';
*/


function Wrapper(props){
	// all React "prop"erty providers go here.
	// e.g. redux Provider, react-intl IntlProvider.
	const { store } = props;

	return (
		<Provider store={store} key="provider">
			{props.children}
		</Provider>
	);
}

Wrapper.propTypes = {
	store     : PropTypes.object.isRequired
};

export default Wrapper





