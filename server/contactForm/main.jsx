import express						from 'express'
import bodyParser					from 'body-parser';
import emailjs						from 'emailjs';
import configuration				from '../../configuration.jsx';
import mailConfig					from './mailConfig';
import fs 							from 'fs';
import path							from 'path';



const addressBook = configuration.addressBook;
const mailServer = emailjs.server.connect(mailConfig);
const receiver = 'patrick.mennig@gmail.com';
const subject = 'New message request from react-boilerplate-isomorphic-app.';

// mailConfig should be implemented as following:
/*
 export default {
 user:    	"username",
 email: 	"username/email-address",	// if user is not an email address
 password:	"password",
 host:    	"smtp.gmail.com",			// or others
 ssl:     	true
 }
 */



const app =	express();

app.use(bodyParser.json());

app.post('/', (req, res, next) => {

	const { name, company, email, text, asCC }  = req.body;

	saveEmail(name, company, email, text).then(()=>{
		res.sendStatus(201);
	}).catch(err => {
		console.log('Unable to save email:');
		console.log(err);
		res.sendStatus(500);
	}).then(()=>{
		return sendEmail(name, company, email, text, asCC);
	}).catch(err => {
		console.log('Unable to send email:');
		console.log(err);
	});
});

// start the server
app.listen(addressBook.contactFormServer.http.port, () => {
	console.info('[contactForm-server] running. Listening at ' +
		`http://${addressBook.contactFormServer.http.host}:${addressBook.contactFormServer.http.port}`);
});



function sendEmail(name, company, email, text, asCC) {

	return new Promise((resolve, reject) => {
		// send the message and get a callback with an error or details of the message that was sent
		mailServer.send({
			text:	 mailText(name, company, email, text),
			from:    mailConfig.email || mailConfig.user,
			to:      receiver,
			cc:      asCC ? email : null,
			subject: subject
		}, err => {
			if(err) return reject(err);
			resolve();
		});
	});
}

function saveEmail(name, company, email, text) {

	return new Promise((resolve, reject)=>{

		let now = new Date().getTime();

		fs.writeFile(path.join(__dirname, '/mails/', now + '.txt'), mailText(name, company, email, text), err => {
			if(err) return reject(err);
			resolve();
		});
	});
}

const mailText = (name, company, email, text) => `
Hallo, \r\n 
Sie haben eine neue Anfrage von ${name}, von ${company}. 
\r\n \r\n 
Die Anfrage lautet: 
\r\n
----------
${text}
----------
\r\n
Bitte antworten Sie an: ${email}.`;