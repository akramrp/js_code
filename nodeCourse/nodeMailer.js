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
        user: 'mohd.akram@myphoneme.com',
        pass: 'akram7as77##my'
    }
})

var mailOptions = {
    from: 'mohd.akram@myphoneme.com',  
    to: 'akramrp7@gmail.com', // to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',     // send to many
    subject: 'Sending email using NodeJS',
    text: "Hello Akram,\n\nthis email send by nodejs using nodemailer module \n\ncheck:> js_code/nodeCourse/nodeMailer.js file"
}

transporter.sendMail(mailOptions, (err, info) => {
    if (err)
        console.log('error ==> ', err);
    else{
        console.log('Email Sent:'+ info.response);
        console.log('Email Sent successfully.');
    }
})
// ====================== send mail in nodejs  end   ======================