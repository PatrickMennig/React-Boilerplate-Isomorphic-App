import React, { Component, PropTypes }	from 'react';
import { connect }						from 'react-redux';

import * as contactFormActions 			from '../../actions/contactForm/contactFormActions';
import { ContactForm, Content }			from '../../components';
import { reset } 						from 'redux-form';



@connect(state => ({content: state.content, formState: state.formState}))
export default class Contact extends Component {

	constructor(props) {
		super(props);
		this.handleContactSubmit = this.handleContactSubmit.bind(this);
	}

	handleContactSubmit(data) {
		const { dispatch } = this.props;
		dispatch(contactFormActions.postForm(data));
	}

	render() {

		const { children } = this.props;

		return (
			<div>
				<Content>
					<ContactForm onSubmit={this.handleContactSubmit} />
					{ children }
				</Content>
			</div>
		)
	}
};