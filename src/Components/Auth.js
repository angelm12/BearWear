import { useState } from 'react';
import { auth } from "../firebase-config"
import Signin from "./Signin"
import Signup from "./Signup"
import { Link } from "react-router-dom"
import logo from "./logo.png"
function Auth() {
return (
    <div className = "flex flex-col justify-center items-center mt-48">
        <div className = "text-5xl font-bold">
            BearWear
        </div>
        <h3 className="text-2xl font-mono text-gray-400/100">
            Personalize and Store Your Clothing Today
        </h3>
        <div className = "flex flex-col lg:flex-row justify-center items-center mt-6">
            <img class="h-60 w-60 p-2" src={logo}/>
            <div className = "p-5 lg:p-10 w-1/4 flex flex-col justify-center items-center mb-5"> 
                <div className="mt-2 w-48  p-2 border rounded-3xl text-center">
                <Link to={"/Signup"}>Signup</Link>
                </div>
                <div className="mt-2 w-48  p-2 border rounded-3xl text-center">
                <Link to={"/Signin"}>Signin</Link>
                </div>
            </div>
        </div>

    </div>

)
}
export default Auth