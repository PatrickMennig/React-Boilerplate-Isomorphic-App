import React, { Component, PropTypes }	from 'react';
import { connect }						from 'react-redux';

import * as contentActions				from '../../actions/content/contentActions';

import styles							from './index.css';

import { MenuBar,
		 HeaderContainer,
		 Content,
		 Footer }						from '../../components';



@connect(state => ({content: state.content}))
export default class Page extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount () {
		const { dispatch, page } = this.props;
		dispatch(contentActions.getContent(page));
	}

	handleClick() {
		const { dispatch } = this.props;
		// dispatch(actionName(props));
	}

	render() {

		const { children, content, page } = this.props;

		const logo = require('../../assets/images/icon/cat_64x64.png');
		const bannerImg = require('../../assets/images/banner/banner.jpg');
		const teaserImg = require('../../assets/images/teaser/dog.jpg');

		const menuEntries = [
			{name: 'Home', to:'/'},
			{name: '2nd Entry', to:'/two'},
			{name: '3rd Entry', to:'/three'},
			{name: '4th Entry', to:'/four'}
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


		const pageContent = content.get(page);

		return (
			<div>
				<MenuBar entries={menuEntries} />

				<HeaderContainer logoSrc={logo}>
					React-Boilerplate-Isomorphic-App
				</HeaderContainer>

				{/* other containers or routes may pass children, show them here */}
				{ children }

				{/*
					in case the server responded with content for this page,
					work out some way to display it
				*/}
				<Content>
					{pageContent && !pageContent.pending && pageContent.resolved && !pageContent.noContent && pageContent.content}
				</Content>

				<Footer entriesLeft={footerLeftEntries}
						entriesRight={footerRightEntries} />
			</div>
		)
	}
};

Page.propTypes = {
	page: PropTypes.string.isRequired 			// used to determine the current page
};