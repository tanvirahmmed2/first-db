const express= require("express")

const router= express.Router()
const { getUser, postUser,  deleteUser, getoneUser, updateUser } = require("../controllers/users.controller")


router.get("/", getUser)
router.get("/:id", getoneUser)
//create user
router.post("/", postUser)



router.delete("/:id", deleteUser)
router.patch("/:id", updateUser)




module.exports= router