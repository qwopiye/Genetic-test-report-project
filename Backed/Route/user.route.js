const { GetAlluser,CreatAlluser } = require("../Controller/user.controller")

const router=require("express").Router()

router.get("/",GetAlluser)
router.post("/",CreatAlluser)
// router.put()
// router.delete()

module.exports=router