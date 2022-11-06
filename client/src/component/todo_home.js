import {useNavigate} from "react-router-dom"

function Todo_home(){
    const navigate=useNavigate()

    const form=()=>{
        navigate("/Todo_form")
    }

    const handleLogout=()=>{
        localStorage.removeItem("authToken")
        navigate("/")
      }


    return(
        <div>
            <div className="header">
            <header>username</header>
            </div>
            <div className="navbar">
            <nav className="nav"><button onClick={form}>Add new activity</button></nav>
            </div>
            <div className="footer">
            <footer><button onClick={handleLogout}>logout</button></footer>
            </div>
        </div>
    )
}

export default Todo_home