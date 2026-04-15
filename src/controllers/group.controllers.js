const groupModel = require("../models/group.model")

async function createGroup(req,res){    
    const data = req.body
    const group = await groupModel.create({
        name : data.name,
        members : data.members
    })
    if(!group){
        return res.status(409).json({
            message : "cannot create group"
        })
    }
    return res.status(201).json({
        message : "group created successfully",
        group : group
    })

}

async function getGroup(req,res){
    const userId = req.params.userid
    const group = await groupModel.find(
        {
            "members.userid" : userId 
        }
    )
    if(!group){
        return res.status(409).json({
            message : "you are not a member in any group"
        })
    }
    return res.status(200).json({
        message : "groups fetched successfully",
        group : {
            group
        }
    })
}

async function addGroupMember(req,res) {
    const data = req.body
    const group = await groupModel.findOne({
         _id : data._id 
    })
    if(!group){
        return res.status(409).json({
            message : "group does not exist"
        })
    }
    group.members.push({userid : data.userid})
    await group.save()
    return res.status(201).json({
        message : "member added successfully",
        group : group
    })
}
module.exports = {createGroup,getGroup,addGroupMember}