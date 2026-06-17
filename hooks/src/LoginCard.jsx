import { useState } from "react";
/*
{export const LoginCard = () =>{

useState with boolean datatype
    const[isLoggedIn, setIsLoggedIn] = useState("flase")
    
const handleClick =() =>{
    setIsLoggedIn(!isLoggedIn);
}
return(
    <button onClick={handleClick}>{isLoggedIn ? "Login" : "Logout"}</button>
)
}
}*/

{/* usstate using a string */}
export const ConsoleMsg = () =>{
    const[msg,setMsg]= useState("")
    const handleChange =(event) =>{
        setMsg(event.target.value);
    }
    return(
        <>
        <input type="text" placeholder="type any message" value = {msg}  onChange={handleChange}/>
        <p>{msg}</p>
        </>
    )
}