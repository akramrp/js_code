var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'userakram09@gmail.com',
        pass: 'akram7as00$$go'
    }
});

var mailOptions = {
    from : 'userakram09@gmail.com',
    to: 'akramrp7@gmail.com',
    subject: 'test node mail',
    text: 'this mail sent by ===> modemailer.'
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error)
        console.log(error);
    else
        console.log('Email Sent:'+ info.response);
});