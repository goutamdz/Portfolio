const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_APP_PASSWORD,
    },
});

const sendmail = async (req, res) => {
	try{
        console.log("Sending email...");
        console.log(req.body);
        const { firstName, lastName, email, subject, message } = req.body;
        console.log(firstName, lastName, email, subject, message);
        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.MAIL_TO,
            subject: subject,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message} \n coming from portfolio`,
        });
        res.json({ message: "Email sent successfully" });
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: "Error sending email" });
    }
};

module.exports = { sendmail };