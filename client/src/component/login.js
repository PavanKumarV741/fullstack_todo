import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

const Login =()=>{
    const navigate=useNavigate()
  const Signup=()=>{
    navigate("/signup")
  }
    const [data, setdata]=useState({
        email:"",
        password:"",
    })

    useEffect(()=> {
        
        const auth=localStorage.getItem('user')
        if (auth) {
            navigate("/")
        }
    },[])

    const handlesubmit = (e) => {
        e.preventDefault()
        axios({
            method:'POST',
            headers:{
                // auth: localStorage.setItem('user')
            },
            url:"http://localhost:5000/login",
            data:data
        }).then((token)=> {
            console.log('Hello',token.data)
            localStorage.setItem("user",token.data)
            navigate("/dashboard")
        }).catch((err)=> {
            window.alert(err.response.data)
        })
    }
    return(
     <div className="container">
          <input type="email" placeholder="User Id" className="email"onChange={(e)=> {setdata({...data, email: e.target.value})}} ></input>
          <input type="password" placeholder="password" className="password" onChange={(e)=> {setdata({...data, password: e.target.value})}} ></input>
          <button className="signin" onClick={handlesubmit}>Login</button>
          <a href={"./signup"} className="signup" onClick={Signup}>Sign Up</a>
    </div>
    
  );
}
export default Login;