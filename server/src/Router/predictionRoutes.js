const express = require("express");

const router = express.Router();

const {predictReport} = require("../controller/predictionController");

router.post("/predict", predictReport);

module.exports = router;