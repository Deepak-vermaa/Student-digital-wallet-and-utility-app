const walletModel = require("../models/wallet.model")

async function getWallet(req,res){

const id = req.params.id
const wallet = await walletModel.findOne({
    _id : id,
})
if(!wallet){
    return res.status(409).json({
        message : "wallet doesnt exist"
    })
}

return res.status(200).json({
    message : "wallet fetched successfully",
    wallet : wallet
})
}

async function getBalance(req,res){
    const id = req.params.id 
    const wallet = await walletModel.findOne({
        _id : id
    })
    if(!wallet){
        return res.status(409).json({
            message : "wallet doesnt exist"
        })
    }
    return res.status(200).json({
        message : "wallet balance fetched successfully",
        balance : wallet.balance
    })
}

async function getTransaction(req,res){
    const id = req.params.id
    const wallet = await walletModel.findOne({
        _id : id
    })
    if(!wallet){
       return res.status(409).json({
            message : "wallet doesn't exist"
        })  
    }
    return res.status(200).json(
    {
        message : "transaction fetched successfully",
        transaction : wallet.transaction
    }
    )
}

module.exports = { getWallet , getBalance , getTransaction }