const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/se", (req,res) => {
    let transporter = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : "faizanpathan122@gmail.com",
            pass : "ogghddndlufyrmpk"
        }
    });

    let mailOptions = {
        from : "faizanpathan122@gmail.com",
        to : "22814046faizan@viva-technology.org"
    }

    transporter.sendMail(mailOptions,(err,info) => {
        if (err)
        res.status(500).json({"message" : "server error"});
    else
    res.status(200).json({"message" : "email sent"});
    })
});

app.listen(9000,() => { console.log("ready to server @ 9000"); });