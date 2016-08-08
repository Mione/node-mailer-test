var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var myEmailAddress = 'girl@gmail.com'; //this is the address that's setup within google's apps dashboard.
var clientId = process.env.CLIENT_ID; //you'll have access to these within the dashboard
var clientSecret = process.env.CLIENT_SECRET;
var refreshToken = process.env.REFRESH_TOKEN;
var accessToken = process.env.ACCESS_TOKEN;//this one is optional.

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: myEmailAddress,
      clientId: clientId,
      clientSecret: clientSecret,
      refreshToken: refreshToken,
      accessToken: accessToken
    })
  }
});

var mailOptions = {
  from: "no-reply@myDomainHere.com",
  to: 'guy@gmail.com',
  subject: "Yo",
  text: "Tot pe sunet de roua produs la ora 2 zi-ne, pace noua",
  html: "<h1>Tine-le sus</h1><br><br><p>Tot pe sunet de roua produs la ora 2 zi-ne, pace noua</p>"
}

console.log('Getting ready to send the email. mailoptions are: ' + mailOptions);

//the format of the sendMail should be the bellow(and above)
// transporter.sendMail(mailOptions, function (err, response) {
//   if (err) {
//     console.log('There is an error?'+JSON.stringify(err));
//   }
//   console.log('Request has been successful'+JSON.stringify(response));
// });

module.exports = {
  sendEmail: transporter.sendEmail
}