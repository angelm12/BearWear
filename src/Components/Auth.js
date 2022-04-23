import { useState } from 'react';
import { auth } from "../firebase-config"
import Signin from "./Signin"
import Signup from "./Signup"
import { Link } from "react-router-dom"

function Auth() {
return (
    <div>
    <Link to={"/Signup"}>Signup</Link>
    <Link to={"/Signin"}>Signin</Link>
    </div>
)
}
export default Auth