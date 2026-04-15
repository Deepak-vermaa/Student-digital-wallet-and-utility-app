const express = require("express")
const router = express.Router();
const profileController = require("../controllers/profile.controllers")

router.get("/:id/getme",profileController.getProfile)  //done
router.post("/:id/update",profileController.updateProfile) //done

module.exports=router;