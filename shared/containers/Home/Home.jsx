import React 							from 'react';
import { connect }						from 'react-redux';

import * as mainActions					from '../../actions/main/mainActions';

import styles							from './home.css';

import { Content,
		 HeaderContainer,
		 MenuBar }						from '../../components';



@connect(state => ({main: state.main}))
export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}


	handleClick() {
		const { dispatch } = this.props;
		dispatch(mainActions.getMainContent());
	}

	render() {

		const { children, main } = this.props;
		const logo = require('../../assets/images/logo/fhws-logo.png');
		const entries = [
			{name: 'Home', to:'/', active:true},
			{name: '2nd Entry', to:'/two'},
			{name: '3rd Entry', to:'/three'},
			{name: '4th Entry', to:'/three'}
		];

		return (
			<div>
				<MenuBar entries={entries}/>
				<HeaderContainer logoSrc={logo}>
					Technologietransfer Hochschule - Mittelstand Mainfranken
				</HeaderContainer>

				<Content>
					<div>
						{/*Home Page with a kittycat which is soooo cute*/}

						<div>Hello World</div>

						<div>{main.get('pending')+''}</div>
						<div>{main.get('resolved')+''}</div>
						<div>{main.get('content')}</div>
						
						<button onClick={this.handleClick}>Click Me</button>

						<img src={logo} />
						{children}
					</div>
				</Content>
			</div>
		)
	}

};