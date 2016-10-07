import React 							from 'react';
import { connect }						from 'react-redux';




@connect(state => ({main: state.main}))
export default class App extends React.Component {

	render() {

		const { children } = this.props;

		return (
			<div className="test">
				Home Page with a kittycat which is soooo cute

				<img src={require('../../assets/images/icon/cat_64x64.png')} />
				{children}
			</div>
		)
	}

};