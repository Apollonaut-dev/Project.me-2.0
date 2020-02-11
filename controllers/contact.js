const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { validationResult } = require('express-validator');


const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
);

module.exports.contactFormSubmission = (req, res, next) => {
  const validation = validationResult(req);
  let errors = validation.errors;
  if (errors.length) {
    res.status(422).json({ errors });
  } else {
    transporter.sendMail({
      to: 'anthonydevellis@gmail.com',
      from: 'emailer@anthonydev.com',
      subject: `Contact from ${req.body.name}`,
      html: ` 
              From: ${req.body.name}<br />
              Email: ${req.body.email}<br />
              Phone: ${req.body.phone}<br />
              <br />
              Body<br />
              ============================================<br />
              <br />
              ${req.body.message}
            `
    })
      .then(() => {
        res.status(200).json({ msg: 'form received' });
      })
      .catch(console.log);
  }
};