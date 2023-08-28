const express = require("express");
const router = express.Router();

const {createUser} = require("../controllers/userControllers");

//Create user:
router.route("/").post(createUser)

module.exports = router;

