import { useState } from 'react';
import { createUserWithEmailAndPassword, 
    onAuthStateChanged
 } from "firebase/auth";
import { auth } from "../firebase-config"
import { useNavigate } from 'react-router-dom'
import oski from "./oski.webp"
function Signup() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPw, setRegisterPw] = useState("");
    let navigate = useNavigate();

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPw);
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div className="flex flex-col justify-center items-center mt-12">  
        
            <div className="flex flex-col justify-center items-center mt-12">
                <div className="flex flex-col justify-center items-center mt-12 text-3xl font-bold">Sign Up</div>
                <input type="text" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setRegisterPw(e.target.value)}/>
                <button onClick={register}>Submit</button>
                <img class="h-60 w-150 p-2" src={oski}/>

            </div>
        </div>
    )

}
export default Signup
