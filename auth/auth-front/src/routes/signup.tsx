import { useState } from "react";
import { Navigate } from "react-router-dom";
import DefaultLeyout from "../layout/defaultlayout.tsx"
import { useAuth } from "../auth/authProvider.tsx";
import { API_URL } from "../auth/constans.ts";


export default function Signup(){
    const [name,setName] = useState("");
    const [Username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const [errorResponse,setErrorResponse] = useState("")
    const auth = useAuth()

async function handdleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        try {
            const response = await fetch(`${API_URL}/signup`,{
                method : "POST",
                headers : {
                    "Content-Type": "applcation/json"
                },
                body : JSON.stringify({
                    name,
                    Username,
                    password
                }),
            });

            if (response.ok){
                console.log("User Created Successfully")
            }else{
                console.log("Something went Wrong")
                const json = await response.json()
            }
        }catch(error){
            console.log(error)
        }
    }

    if(auth.isAuthenticated){
        return <Navigate to="/dashboard" />
    }
    return (

         <DefaultLeyout>
            <form className="form" onSubmit={handdleSubmit}>

                <h1>Signup</h1>

                <label>Nombre: </label>
                <input type="text"  value={name} onChange={(e)=>setName(e.target.value) }/>

                <label>Username: </label>
                <input type="text" value={Username} onChange={(e)=>setUsername(e.target.value) }/>

                <label htmlFor="">Password: </label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value) }/>

                <button>CreateUser</button>

                </form>
        </DefaultLeyout>
);
}