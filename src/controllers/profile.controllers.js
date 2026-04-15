const profileModel = require('../models/profile.model')

async function getProfile(req,res){
    
    const id = req.params.id
    
    const profile = await profileModel.findOne(
        
        {
            _id : id
        }
       
    )
    if(!profile){
        return res.status(409).json({
            message : "profile doesnt exist"
        })
    }
    console.log(profile)
    res.status(200).json({
        message : "profile fetched successfully",
        profile : profile
    })
}

async function updateProfile(req,res){
    const id = await req.params.id
    console.log(id)
    console.log(req.body)
    const {phoneno,college,year,course}  = req.body
    const profile = await profileModel.findOneAndUpdate({

    },{
        $set : {
            phoneno : phoneno,
            college : college,
            year :  year,
            course : course
        }
    })
    if(!profile){
        return res.status(409).json({
            message : "profile doesnt exist",
            profile_id  : id
        })
    }
    return res.status(200).json({
        message : "profile updated succesfully",
        profile : profile
    })
    

}
module.exports = {getProfile ,updateProfile}