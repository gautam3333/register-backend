const express = require('express');
const registrationController = require('../controller/registrationController');

const router = express.Router();
router.route('/').post(registrationController.createRegistration);

module.exports = router;
