const jwt = require('jsonwebtoken');

const creatwebToken = (payload, sceretKey, expiresIn) => {
   const token = jwt.sign(payload, sceretKey, { expiresIn });
   return token;
};

module.exports = { creatwebToken}; 