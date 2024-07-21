import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/authProvider";
import DefaultLeyout from "../layout/defaultlayout"
import { useState } from "react";
export default function Login(){
    const [Username,SetUsername] = useState("");
    const [password,setPassword] = useState("");
    const auth = useAuth();
    if(auth.isAuthenticated){
        return <Navigate to="/dashboard" />
    }
    return (

         <DefaultLeyout>
            <form className="form">

                <h1>Login</h1>

                <label>Username: </label>
                <input type="text" value={Username} onChange={(e)=> SetUsername(e.target.value)} />

                <label htmlFor="">Password: </label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

                <button>Login</button>

                </form>
        </DefaultLeyout>
);
}