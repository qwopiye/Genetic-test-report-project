const axios = require("axios");

const predictReport = async (req, res) => {
    try {
        const data = req.body;

        const response = await axios.post("http://127.0.0.1:5000/predict", {
            features: data,  
        });

        return res.status(200).json(response.data);  // ✅ return করে সাথে সাথেই response পাঠানো হচ্ছে

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Prediction Failed"
        });
    }
};

module.exports = {
    predictReport
};