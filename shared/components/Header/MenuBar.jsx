import React, { Component, PropTypes } 	from 'react';
import { Link }							from 'react-router';

import classNames						from 'classnames';
import styles							from './menuBar.css';

import Content							from '../Content/Content';



export default class MenuBar extends Component {

	render() {

		const { children, entries } = this.props;

		return (
			<div className={styles.menuBar}>
				<Content hasNoPadding={true} alignChildren="right">
					{entries.map( e => (
						<Link className={e.active ? classNames(styles.entry, styles.active) : styles.entry}
							  key={e.name + e.to}
							  to={e.to}>
							{e.name}
						</Link>
					))}
				</Content>
			</div>
		)
	}
}

MenuBar.propTypes = {
	entries: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		to: PropTypes.string.isRequired,
		active: PropTypes.bool,
		subEntries: PropTypes.array
	}))
};