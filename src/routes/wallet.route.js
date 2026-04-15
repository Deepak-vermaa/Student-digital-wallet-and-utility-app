const express = require("express")
const router=express.Router();
const walletController=require("../controllers/wallet.controllers")

router.get("/:id/",walletController.getWallet)//done
router.get("/:id/balance/",walletController.getBalance)//done
router.get("/:id/transactions/",walletController.getTransaction)//done

module.exports=router;
