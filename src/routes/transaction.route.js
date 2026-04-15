const express = require("express")
const router=express.Router()
const transactionController=require("../controllers/transaction.controllers")

router.post("/send",transactionController.sendMoney)//done
router.get("/:userid/history",transactionController.transactionHistory)//done
router.post("/request",transactionController.requestMoney)//done
router.get("/:userid/requests",transactionController.getAllRequest)//done
router.put("/request/:requestid",transactionController.acceptOrDeclineRequest)//done

// router.post("/qr-pay",transactionController.sendMoneyQr) ===>//as if now not neccessary can be done by /send

module.exports=router;