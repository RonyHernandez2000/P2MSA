
import React, {useState} from "react";
import "./loginlogic.css";

function LoginLogic(){
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
    <input type="password" placeholder="Enter Secret Code" name="psw" required/>
        <button onClick={toggleloginLogic}> CLOSE</button>
    </div>
</div>)
}


    </div>

    
) 
}

export default LoginLogic