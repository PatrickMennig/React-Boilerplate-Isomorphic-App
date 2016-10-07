import React 							from 'react';
import { connect }						from 'react-redux';


@connect(state => ({main: state.main}))
export default class App extends React.Component {

	render() {

		const { children } = this.props;

		return (
			<div>
				My App
				{children}
			</div>
		)
	}

}