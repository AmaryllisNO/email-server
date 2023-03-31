const express = require('express');
const app = express();
const port = 8080;
const dotenv = require('dotenv');
const cors = require('cors');
const nodemailer = require('nodemailer');

dotenv.config();
app.listen(port);
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb' }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

const myEmail = process.env.MY_EMAIL;
const myPassword = process.env.MY_PASSWORD;

const sendEmail = ({ name, senderEmail, subject, message }) => {
  console.log('senderEmail', senderEmail);

  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: myEmail,
        pass: myPassword,
      },
    });

    const mailOptions = {
      to: myEmail,
      subject: subject,
      from: `${name} <${senderEmail}>`,
      html: `
        <html>
            <head>
                <style>
                    ul {
                        list-style: none;
                        padding: 0;
                    }
                </style>
            </head>

            <ul>
                <li>From: ${name}</li>
                <li>Sender email: ${senderEmail}</li>
                <li>Message: <p>${message}</p> </li>
            </ul>
        </html>
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};
app.get('/', (req, res) => {
  res.send('This is an emailer server');
  // const emailOptions = {
  //   name: 'John Doe',
  //   senderEmail: senderEmail,
  //   subject: 'Test email',
  //   message: 'This is a test email',
  // };

  // sendEmail(emailOptions)
  //   .then((response) => res.send(response.messsage))
  //   .catch((error) => res.send(error.message));
});

app.post('/send-email', (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.messsage))
    .catch((error) => res.status(500).send(error.message));
});
