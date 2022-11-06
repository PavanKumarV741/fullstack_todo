import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"

const Signup =()=>{
    let navigate=useNavigate()

    const [data, setdata]=useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const handlesubmit = (e) => {
        e.preventDefault()
        axios({
            method:"POST",
            url:'http://localhost:5000/register',
            data:data
        }).then((user)=> {
                window.alert(user.data)
                navigate("/")
        }).catch((err)=> {
            window.alert(err.response.data)
        })
    }
    return(
    <div className="container">
          <div className="tittle-1">
            Create New Account
          </div>

          <input type="name" placeholder="name" className="name-1" onChange={(e)=> {setdata({...data, name: e.target.value})}} ></input>
          <input type="email" placeholder="User Id" className="email-1" onChange={(e)=> {setdata({...data, email: e.target.value})}} ></input>
          <input type="password" placeholder="password" className="form-control" onChange={(e)=> {setdata({...data, password: e.target.value})}}  ></input>
          <input type="password" placeholder="confirmpassword" className="confrim-password" id="confirmpassword" onChange={(e)=> {
                    setdata({...data,confirmpassword:e.target.value})
                }} ></input>

          <button className="signin-1" onClick={handlesubmit} >Login</button>
    </div>
    
  );
}
export default Signup;