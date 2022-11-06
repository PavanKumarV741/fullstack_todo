const express=require("express")
const activityModal=require("./schema")

const router=express.Router()

router.post("/add",(req,res)=>{
    let {activity,status,action}=req.body
    activityModal.create({activity:activity,status:status,action:action}).then((data)=>{
        res.send("activity added successfully")
    }).catch((err)=>{
        res.send(err)
    })
})

router.get("/add", async (req,res)=>{
    try{
   const result= await activityModal.find()
   res.send(result)
   console.log(result)
    }
    catch(err){
        console.log(err)
    }
})

module.exports=router