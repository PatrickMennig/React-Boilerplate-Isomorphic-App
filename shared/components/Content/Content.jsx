import React, { Component, PropTypes } 	from 'react';

import classNames 						from 'classnames';
import styles							from './content.css';

export default class Content extends Component {

	render() {

		const { children, hasNoPadding, alignChildren } = this.props;

		return (
			<div className={styles.content}>
				<div className={hasNoPadding ? classNames(styles.contentInner, styles.hasNoPadding) : styles.contentInner}>
					<div className={styles.contentInnerInner} style={{textAlign: alignChildren}}>
						{children}
					</div>
				</div>
			</div>
		)
	}
}

Content.propTypes = {
	hasNoPadding: PropTypes.bool,
	alignChildren: PropTypes.string
};

Content.defaultProps = {
	hasNoPadding: false,
	alignChildren: 'left'
};