import React 							from 'react';
import { Link }							from 'react-router';

import styles							from './notFound.css';

import { Content }						from '../../components';




export default class NotFound extends React.Component {

	render() {

		const { children } = this.props;
		const coffeeImg = require('../../assets/images/notFound/coffee.jpg');

		return (
			<div style={{backgroundImage: `url(${coffeeImg})`}} className={styles.coffeeImg}>

				<Content>

						<h1 className={styles.headline}>
							The Bad News
						</h1>
						<h2 className={styles.subline}>
							We cannot find the page you're looking for
						</h2>

						<h1 className={styles.headline}>
							The Good News
						</h1>

						<h2 className={styles.subline}>
							Why not use this for a reason to take a break?
							Grab a cup of coffe and start browsing <Link to="/">at the home page</Link> again.
						</h2>

				</Content>

				<Content>
					<p className={styles.caption}> &#xA9; Coffee Image: <Link to="https://www.flickr.com/photos/basheertome/8747148779/">Basheer Tome</Link></p>
				</Content>

			</div>
		)
	}
}