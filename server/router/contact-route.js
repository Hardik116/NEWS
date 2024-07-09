const express = require("express");
const router = express.Router();
const contactform = require("../control/contact-control");
router.route('/contact').post(contactform);

module.exports = router;