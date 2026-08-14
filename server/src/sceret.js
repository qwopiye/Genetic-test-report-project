require("dotenv").config()

const serverPort=process.env.PORT||3001

const mongdbUrl=process.env.DB_URL||'mongodb://localhost:27017/userDemo'
const jwtActivatedToken=process.env.JWT_ACTIVATED_KEY|| 'SDKBFGHGNBG123%$'
const jwtAcessKye=process.env.JWT_ASCESS_KEY|| udjhvckdjfcvbjfci%W;

module.exports={serverPort,mongdbUrl, jwtActivatedToken,jwtAcessKye}