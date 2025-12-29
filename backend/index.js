require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})
app.get('/', (req, res) => {
    res.send("Hello world!");
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.TO_EMAIL,
        subject: 'Atlas',
        text: '2'
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
        }else{
            console.log('Email sent:' + info.response);
        }
    }
    )
 })
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log("App listening on port 3000!") });

