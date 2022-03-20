
import React, {useState} from "react";
import "./loginlogic.css";
import { useNavigate } from "react-router-dom";

// npm install react-router-dom
function LoginLogic(){

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/home`; 
    navigate(path);
  }

    const [loginLogic, setloginLogic]= useState(false);
    
    const toggleloginLogic = () => {
        setloginLogic(!loginLogic)
    } 
return(
    <div >
        <button onClick={toggleloginLogic} className="btn-loginLogic">
            Code
        </button>
        {loginLogic && (
        <div className="loginLogic">
    <div onClick={toggleloginLogic} className="overlay"> </div>
    <div className="loginLogic-content">
    <input  type="password" placeholder="Enter Secret Code" name="psw" required />
        
        <br/>
        <button color="primary" className="px-4"
            onClick={routeChange}
              >
              submit
            </button>
       
        
    </div>
</div>)
}


    </div>

    
) 
}

export default LoginLogic