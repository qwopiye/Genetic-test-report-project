require("dotenv").config()

const serverPort=process.env.SERVER_PORT||3000

const mongdbUrl=process.env.DB_URL||'mongodb://localhost:27017/userDemo'

module.exports={serverPort,mongdbUrl}