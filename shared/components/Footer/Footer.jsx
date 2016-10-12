import React, { Component, PropTypes } 	from 'react';
import { Link }							from 'react-router';

import styles							from './footer.css';

import { Content }						from '../../components';



export default class Footer extends Component {

	render() {

		const { children, entriesLeft, entriesRight} = this.props;

		return (
			<footer className={styles.footer}>
				<Content hasNoPadding={true}>
					<nav className={styles.inFooter}>

						<div className={styles.left}>
							{entriesLeft.map(e => (
								<Link className={styles.entry} key={e.name + e.to} to={e.to}>
									{e.name}
								</Link>
							))}
						</div>

						<div className={styles.right}>
							{entriesRight.map(e => (
								<Link className={styles.entry} key={e.name + e.to} to={e.to}>
									{e.name}
								</Link>
							))}
						</div>

					</nav>
				</Content>
			</footer>
		)
	}
}

Footer.propTypes = {
	entriesLeft: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		to: PropTypes.string.isRequired
	})),
	entriesRight: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		to: PropTypes.string.isRequired
	}))
};