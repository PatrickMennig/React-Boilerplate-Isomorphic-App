import React, { Component, PropTypes } 	from 'react';
import { Link }							from 'react-router';

import styles							from './teaser.css';

import { Content }						from '../';
import { Grid, Row, Column }			from 'react-cellblock';



export default class Teaser extends Component {

	render() {

		const { children, imgSrc } = this.props;

		return (
			<div className={styles.teaser}>
				<Content>
					<Grid columnWidth={400}
						  gutterWidth={0}
						  breakpoints={[3,9]}
						  flexible={true}
						  initialBreakpoint={9}
					>
						<Row>
							<Column width="1/3">
								<img src={imgSrc} className={styles.teaserImg} />
							</Column>
							<Column width="2/3" className={styles.teaserChildren}>
								{children}
							</Column>
						</Row>
					</Grid>
				</Content>
			</div>
		)
	}
}

Teaser.propTypes = {
	imgSrc: PropTypes.string.isRequired
};