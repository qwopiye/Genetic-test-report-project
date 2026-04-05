const axios = require("axios");

const getPrediction = async (features) => {
  const response = await axios.post("http://127.0.0.1:8000/predict", {
    features: features,
  });

  return response.data;
};

module.exports = { getPrediction };