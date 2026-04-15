const mongoose = require("mongoose");
const { Schema } = mongoose;
const groupSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    members : [{
        userid : {
            type: Schema.Types.ObjectId, 
            ref: 'user',
            unique : true
        }
    }]
},{
    timestamps:true
})
const groupModel=mongoose.model('group',groupSchema)
module.exports=groupModel