const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { sendmail } = require('../controllers/mail.controller');



router.post('/send',sendmail);

module.exports = router;