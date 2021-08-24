const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '85e13ce5cf02a24e56e44eb88a2942e3-fb87af35-e39f8e2e',
        domain: 'sandbox05c30ea78aba4bd88c6b8bbefd3e4305.mailgun.org'
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
