const { GetAlluser,CreatAlluser, UpdateOneuser, DeleteOneuser } = require("../Controller/user.controller")

const router=require("express").Router()

//route of get , post ,put ,delete http method

// router.get("/",GetAlluser)
router.post("/",CreatAlluser)
// router.put("/:id", UpdateOneuser)
// router.delete("/:id", DeleteOneuser)

module.exports=router