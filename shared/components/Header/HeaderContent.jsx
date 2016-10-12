import React, { Component, PropTypes } 	from 'react';
import { Link }							from 'react-router';

import styles							from './headerContent.css';

import Content							from '../Content/Content';
import HeaderClaim						from './HeaderClaim';



export default class HeaderContent extends Component {

	render() {

		const { children, logoSrc } = this.props;

		return (
			<div className={styles.headerContent}>
				<Content>
					{/* display logo left if given */}
					{logoSrc &&
						<Link to="/">
							<img className={styles.logo} src={logoSrc} />
						</Link>
					}

					{/* align all other header content right */}
					<div className={styles.rightContent}>
						<HeaderClaim>
							{children}
						</HeaderClaim>
					</div>
				</Content>
			</div>
		)
	}
}

HeaderContent.propTypes = {
	logoSrc: PropTypes.string
};