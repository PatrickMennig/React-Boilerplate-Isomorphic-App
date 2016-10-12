import React 							from 'react';

import styles							from './app.css';

import { Page }							from '../../components';



export default class App extends React.Component {

	render() {

		const { children } = this.props;

		return (
			<Page>{children}</Page>
		)
	}
}