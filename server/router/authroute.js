const express = require("express");
const router = express.Router();
const authcontroller = require("../control/authcontrol");
const signupschema = require("../validator/authvalid");
const validate = require("../middlewares/valid-middle");

router.route("/").get(authcontroller.home);
router.route("/registration").post( validate(signupschema), authcontroller.registration);
router.route("/login").post(authcontroller.login);

module.exports = router;
