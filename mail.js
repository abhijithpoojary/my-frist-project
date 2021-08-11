const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'd9ff8cf9335284bfaef60dd1a0ac4425-9ad3eb61-bae1924b',
        domain: 'sandbox4b73e37b7a24428cb8c8a988209fd4d6.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, message, cb) => {
    const mailOptions = {
        name: name,
        from: email,
        to: 'abhijithpoojari1122@gmail.com',
        subject: subject,
        text: message,
        //text: comment

    };
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

// Exporting the sendmail
module.exports = sendMail;
