// ====================== send mail in nodejs  start ======================
// npm install nodemailer
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'userakram09@gmail.com',
        pass: 'akram7as77##go'
    }
})

var mailOptions = {
    from: 'userakram09@gmail.com',  
    to: 'akramrp7@gmail.com',
    subject: 'Sending email using NodeJS',
    text: "Hello Akram,<br>this email send by nodejs using nodemailer module"
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err)
        console.log(err);
    else{
        console.log('Email Sent:'+ info.response);
        console.log('Email Sent successfully.');
    }
})
// ====================== send mail in nodejs  end   ======================