import { useState } from 'react';
import { createUserWithEmailAndPassword, 
    onAuthStateChanged
 } from "firebase/auth";
import { auth } from "../firebase-config"
import { useNavigate } from 'react-router-dom'

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
        <div className="flex flex-col">  
        
            <div className="flex flex-col">
                <div>Sign Up</div>
                <input type="text" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)}/>
                <input type="text" placeholder="Password" onChange={(e) => setRegisterPw(e.target.value)}/>
                <button onClick={register}>Submit</button>
            </div>
        </div>
    )

}
export default Signup
