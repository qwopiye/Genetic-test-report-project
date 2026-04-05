const express = require("express");
const predictrouter = express.Router();
const { predict } = require("../Controller/predictionController")

predictrouter.get("/", predict);

module.exports = predictrouter;