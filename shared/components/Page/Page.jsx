import React, { Component, PropTypes } 	from 'react';

import styles							from './page.css';

export default class Page extends Component {
	
	render() {
		return (
			<div className={styles.page}>
				{this.props.children}
			</div>
		)
	}
	
}