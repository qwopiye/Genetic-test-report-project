// const { getPrediction } = require("../serves/aiService");

// exports.predict = async (req, res) => {
//   try {
//     const { features } = req.body;

//     const result = await getPrediction(features);

//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ message: "AI prediction failed" });
//   }
// };
const predict=(req,res)=>{
    try {
     res.status(200).json({messages:"the genetic"})
        
    } catch (error) {
          res.status(500).json({ message: "AI prediction failed" });

        
    }
}
module.exports={predict}