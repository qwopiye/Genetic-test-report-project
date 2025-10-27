const mongodb=require("mongoose")
const config=require('./config');
const { default: mongoose } = require("mongoose");

const DBURL=config.db.url;

mongoose.connect(DBURL)
.then(()=>{
    console.log("mongodb is connectred")
})
.catch((error)=>{
   console.log(error)
   process.exit(1)

})

