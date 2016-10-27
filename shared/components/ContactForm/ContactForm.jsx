import React, { Component, PropTypes } 	from 'react';
import { Field, reduxForm } 			from 'redux-form';

import styles 							from './contactForm.css';



const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Required'
	} else if (values.name.length < 3 || values.name.length > 50) {
		errors.name = 'Must be more than 2 and less than 50 characters'
	}
	if (!values.company) {
		errors.company = 'Required'
	}
	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}
	if(!values.text){
		errors.text = 'Required'
	} else if (values.text.length < 10) {
		errors.text = 'Must be more than 10 characters'
	}
	return errors
};

const warn = values => {
	const warnings = {};
	return warnings
};



const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
	<div className={styles.line}>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type}/>
			{touched && ((error && <span className={styles.error}>{error}</span>) || (warning && <span className={styles.warning}>{warning}</span>))}
		</div>
	</div>
);

const renderTextarea = ({ input, label, type, meta: { touched, error, warning } }) => (
	<div className={styles.line}>
		<label>{label}</label>
		<div className={styles.alignTop}>
			<textarea {...input} placeholder={label} type={type}/>
			{touched && ((error && <span className={styles.error}>{error}</span>) || (warning && <span className={styles.warning}>{warning}</span>))}
		</div>
	</div>
);



class ContactForm extends Component {

	render() {

		const { handleSubmit } = this.props;

		return(
			<form onSubmit={handleSubmit} className={styles.form}>

				<Field name="name" component={renderField} type="text" label="First and Last Name"/>

				<Field name="company" component={renderField} type="text" label="Company"/>

				<Field name="email" component={renderField} type="email" label="Email"/>

				<Field name="text" component={renderTextarea} label="Your Message"/>

				<div className={styles.line}>
					<label htmlFor="asCC" />
					<div className={styles.alignMiddle}>
						<Field name="asCC" component="input" type="checkbox"/>
						<label className={styles.labelRight} htmlFor="asCC">Send me a copy of my message</label>
					</div>
				</div>
				<button type="submit">Submit</button>
			</form>
		)
	}
}



// Decorate the form component
ContactForm = reduxForm({
	form: 'contact', // a unique name for this form
	validate,
	warn
})(ContactForm);

export default ContactForm;