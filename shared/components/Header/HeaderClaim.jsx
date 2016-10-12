import React, { Component, PropTypes } 	from 'react';

import styles							from './headerClaim.css';



export default class HeaderClaim extends Component {

	render() {
		return (
			<div className={styles.claim}>
				<div className={styles.claimText}>
					{this.props.children}
				</div>
			</div>
		)
	}
}