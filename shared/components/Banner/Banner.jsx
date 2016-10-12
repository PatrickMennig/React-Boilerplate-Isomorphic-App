import React, { Component, PropTypes } 	from 'react';

import styles							from './banner.css';



export default class Banner extends Component {

	render() {

		const { children, imgSrc } = this.props;

		return (
			<div className={styles.banner}
				 style={{backgroundImage: `url(${imgSrc})`}}
			>
				<div className={styles.text}>
					<div className={styles.textInner}>
						{children}
					</div>
				</div>
			</div>
		)
	}
}

Banner.propTypes = {
	imgSrc: PropTypes.string.isRequired
};