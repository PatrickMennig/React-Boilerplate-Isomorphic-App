import React, { Component, PropTypes } 	from 'react';

import styles							from './headerContainer.css';

import HeaderContent					from './HeaderContent';



export default class HeaderContainer extends Component {

	render() {

		const { children, logoSrc } = this.props;

		return (
			<div className={styles.headerContainer}>
				<HeaderContent
					logoSrc={logoSrc}
				>
					{children}
				</HeaderContent>
			</div>
		)
	}
}

HeaderContainer.propTypes = {
	logoSrc: PropTypes.string
};