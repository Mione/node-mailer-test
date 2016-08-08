// load aws sdk
var aws = require('aws-sdk');

// load aws config
aws.config.loadFromPath('config.json'); //load here access key and secret key or configure them on process.env

// load AWS SES
var ses = new aws.SES({apiVersion: '2010-12-01'});//yes, need to set the version

// send to list
var to = ['guy@domain.com'];

// this must relate to a verified SES account
var from = 'meh@gmail.com';

// this sends the email
// @todo - add HTML version
ses.sendEmail( 
	{ 
		Source: from, 
		Destination: { ToAddresses: to },
		Message: {
			Subject: {
				Data: 'This is a message'
			},
			Body: {
				Text: {
					Data: 'Behe hehhehe',
				}
			}
		}
	}
, function(err, data) {
	if(err) throw err
	console.log('Email sent:');
	console.log(data);
});


