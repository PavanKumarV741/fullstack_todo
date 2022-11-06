const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:String
})

const userModel=mongoose.model("user_data",userSchema)

const activitySchema=new mongoose.Schema({
    activity:String,
    status:String,
    action:String
})

const activityModal= mongoose.model("activity",activitySchema)

module.export=userModel
module.export=activityModal