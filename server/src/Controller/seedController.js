const User = require("../Models/userModel");
const data = require("../data");

const seedUser = async (req, res, next) => {
  try {
    // await User.deleteMany({});
    const users = await User.insertMany(data.users);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { seedUser };
