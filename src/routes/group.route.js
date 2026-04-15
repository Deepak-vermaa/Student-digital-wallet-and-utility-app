const express = require("express")
const router = express.Router();
const groupController=require("../controllers/group.controllers")
router.post("/create",groupController.createGroup)//tested
router.get("/:userid/groups",groupController.getGroup)//tested
router.post("/:groupid/add-member",groupController.addGroupMember)//tested

module.exports=router;