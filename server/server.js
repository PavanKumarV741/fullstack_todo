const express=require("express")
const { default: mongoose } = require("mongoose")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
require("dotenv").config()
const cors=require("cors")
const useractivity=require("./schema/router")

const userModel=require("./schema/schema")

const app=express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use("/todo",useractivity)

app.get("/",(req,res)=>{
    res.send("home server")
})

// register
app.post("/register",(req,res)=>{
    let {name,email,password,confirmpassword}=req.body
    if(!name || !email || !password || !confirmpassword){
        return res.send("please fill the details")
    }
    userModel.findOne({email:email}).then((exists)=>{
        if(exists){
            return res.send("user already exists")
        }
        else{
            if(password==confirmpassword){
                bcrypt.hash(password,10).then((hashpassword)=>{
                    userModel.create({
                        name:name,
                        email:email,
                        password:hashpassword
                    }).then((data)=>{
                        console.log(hashpassword)
                        res.send("user successfully registered")
                    }).catch((err)=>{
                        res.send(err)
                    })
                })
            }else{
                return res.send("password missmatch")
            }
        }
    })
})

// register
// const salt=10
// app.post("/register",(req,res)=>{
//     bcrypt.genSalt(salt, (err,hashSalt)=> {
//         bcrypt.hash(req.body.password, hashSalt, (err, passwordHash)=> {
//             userModel.create({name: req.body.name, email: req.body.email, password: passwordHash}).then(()=> {
//                 res.status(200).send("user Added Successfully");
//             }).catch((err)=> {
//                 res.status(400).send(err);
//             })
//         })
//     })
// });

// login
app.post("/login",(req,res)=>{
    let {email,password}=req.body
    if(!email || !password){
        return res.send("please enter ur login details")
    }
    userModel.findOne({email:email}).then((exists)=>{
        if(exists){
            bcrypt.compare(password,exists.password).then((check)=>{
                // if correct password =true
                if(check){
                    const token=jwt.sign(exists.email,process.env.SECREt_KEY)
                    res.send(token)
                }
                else{
                    return res.send("invalid user credentials")
                }
            })
        }
        else{
            res.send("user does not match")
        }
    })
})


app.get("/register", async(req,res)=>{
    try{
        const user_auth = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
       const result=await userModel.find({userid:user_auth})
       res.send(result)
       console.log(result)
    }catch(err){
            console.log(err)
        }
})

// server connection
const port=process.env.PORT || 5000
app.listen(port,(err)=>{
    if(!err){
        console.log(`server started at ${port}`)
    }
    else{
        console.log(err)
    }
})

// database connection
mongoose.connect("mongodb://localhost/todo").then((data)=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})