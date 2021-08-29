const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '325c3cb093019363158af25458875443-fb87af35-3de7732a',
        domain: 'sandbox4278221038044c0197d8e16505f3d492.mailgun.org'
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
