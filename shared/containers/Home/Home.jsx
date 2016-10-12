import React 							from 'react';
import { connect }						from 'react-redux';

import * as mainActions					from '../../actions/main/mainActions';

import styles							from './home.css';

import { Content,
		 HeaderContainer,
		 MenuBar,
		 Banner,
		 Footer,
		 Teaser }						from '../../components';
import { Grid, Row, Column }			from 'react-cellblock';



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

		const logo = require('../../assets/images/icon/cat_64x64.png');
		const bannerImg = require('../../assets/images/banner/banner.jpg');
		const teaserImg = require('../../assets/images/teaser/dog.jpg');

		const menuEntries = [
			{name: 'Home', to:'/', active:true},
			{name: '2nd Entry', to:'/two'},
			{name: '3rd Entry', to:'/three'},
			{name: '4th Entry', to:'/three'}
		];

		const footerLeftEntries = [
			{name: 'Press', to:'/press'},
			{name: 'Contact', to:'/contact'}
		];

		const footerRightEntries = [
			{name: 'Legal', to:'/impressum'},
			{name: 'Disclaimer', to:'/disclaimer'},
			{name: 'Data Security', to:'/datasecurity'}
		];



		return (
			<div>
				<MenuBar entries={menuEntries} />

				<HeaderContainer logoSrc={logo}>
					React-Boilerplate-Isomorphic-App
				</HeaderContainer>

				<Banner imgSrc={bannerImg}>
					React-Boilerplate-Isomorphic-App
				</Banner>

				<Content>
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
						At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
						no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
						consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua.</p>
					<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
						At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
						no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
						consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua.</p>
					<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
						At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
						no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
						consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua.</p>
				</Content>

				<Teaser imgSrc={teaserImg}>
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
					<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
					<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
				</Teaser>

				<Footer entriesLeft={footerLeftEntries}
						entriesRight={footerRightEntries} />
			</div>
		)
	}

};








/*
 <div>


<div>Hello World</div>

<div>{main.get('pending')+''}</div>
<div>{main.get('resolved')+''}</div>
<div>{main.get('content')}</div>

<button onClick={this.handleClick}>Click Me</button>

<img src={logo} />
{children}
</div>
 */