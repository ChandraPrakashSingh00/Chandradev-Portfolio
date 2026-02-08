const express = require("express");
const { hireRequest } = require("../controllers/hire.controller");


const router = express.Router();

router.post("/", hireRequest);
module.exports = router;
