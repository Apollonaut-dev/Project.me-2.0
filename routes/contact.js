const router = require('express').Router();
const { check } = require('express-validator');

const Contact = require('../controllers/contact');

router.post(
  '/contact',
  [
    check('name').exists({ checkFalsy: true })
      .withMessage('No name given'),
    check('email').isEmail()  
      .withMessage('Invalid email'),
    check('message').exists({ checkFalsy: true })
      .withMessage('No message provided')
  ],
  Contact.contactFormSubmission);

module.exports = router;