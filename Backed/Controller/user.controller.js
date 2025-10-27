const User = require('../Module/user.model');

const { v4 : uuidv4} = require('uuid');

//Create User with post method
const GetAlluser=(req,res)=>{
    res.status(200).json({
        message:" i am a get method"
        
    });
};

// Creatr All user with post method
// const CreatAlluser= async(req,res)=>{
//     try {
//         const newUser=new User({
//         name:req.body,
//         age:Number(req.body),
//         geneticMarkers:req.body

//     })
//     await newUser.save();
//      res.status(200).json(newUser)
        
//     } catch (error) {
//         res.status(500).json(error.message)
        
//     }
// };
const CreatAlluser = async (req, res) => {
  try {
    const { name, age, geneticMarkers } = req.body;

    // Optional: Validate before saving
    if (!name || !age || !geneticMarkers) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({
      name: name,
      age: Number(age),  // safely convert
      geneticMarkers: geneticMarkers
    });

    await newUser.save();
    res.status(200).json(newUser);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//update one user with put method
const UpdateOneuser=async(req,res)=>{
//   const userId=req.params.id;
//   const {name,age}=req.body;
//   users.filter((user)=> userId===id).map((seletedUser)=>{
//     seletedUser.name=name,
//     seletedUser.age=age
//   })
//   res.status(204).json(users)
};
//Delete one user with a Delete method 
const DeleteOneuser=async(req,res)=>{
    await res.status(200).json({
        message:"post method" 
    })
};
module.exports={GetAlluser,CreatAlluser,UpdateOneuser,DeleteOneuser}