const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'fd5c02a66b2876fc5faaeb3024db3f12-7b8c9ba8-9ca79348',
        domain: 'sandbox3484253624c1454387c7f94d4d61550e.mailgun.org'
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
