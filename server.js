const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const app = express()

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.post('/mailjet', (req, res) => {
	console.log("callback from Mail Jet:", req.body)
})

app.post('/sendgrid', (req, res) => {
	console.log("callback from SendGrid:", req.body);
})

app.post('/postmark', (req, res) => {
	console.log("callback from PostMark:", req.body);
})

app.listen(80, () => {
	console.log(`Example app listening on port 80`)
})