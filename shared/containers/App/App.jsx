import React 							from 'react';
import styles							from './app.css';
import { Page }							from '../../components/index';

export default class App extends React.Component {
	render() {
		return (
			<Page>{this.props.children}</Page>
		)
	}
}