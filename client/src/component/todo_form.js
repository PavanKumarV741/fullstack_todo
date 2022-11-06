import {useState} from "react"
function Todo_form(){
    const [data, setdata]=useState({
       activity:"",
       status:"",
       action:""
    })

    return(
        <div>
           <input type="text" placeholder="activity" onChange={(e)=> {setdata({...data, name: e.target.value})}} ></input>
           <input type="text" placeholder="status" onChange={(e)=> {setdata({...data, name: e.target.value})}} ></input>
           <input type="text" placeholder="action" onChange={(e)=> {setdata({...data, name: e.target.value})}} ></input>
           <button>Add activity</button>
        </div>
    )
}

export default Todo_form