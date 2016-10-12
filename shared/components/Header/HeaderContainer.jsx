import React, { Component, PropTypes } 	from 'react';

import styles							from './headerContainer.css';

import HeaderContent					from './HeaderContent';



export default class HeaderContainer extends Component {

	render() {

		const { children, logoSrc } = this.props;

		return (
			<header className={styles.headerContainer}>
				<HeaderContent
					logoSrc={logoSrc}
				>
					{children}
				</HeaderContent>
			</header>
		)
	}
}

HeaderContainer.propTypes = {
	logoSrc: PropTypes.string
};