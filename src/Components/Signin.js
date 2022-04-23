import { useState } from 'react';
import { signInWithEmailAndPassword,
    onAuthStateChanged
 } from "firebase/auth";
import { auth } from "../firebase-config"
import { useNavigate } from 'react-router-dom'

function Signin() {

    const [signInEmail, setSignInEmail] = useState("");
    const [signInPw, setSignInPw] = useState("");
    let navigate = useNavigate();

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    
    const signIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, signInEmail, signInPw);
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
    }

    
    return (
        <div className="flex flex-col">  

            <div className="flex flex-col">
                <div>Sign In</div>
                <input type="text" placeholder="Email" onChange={(e) => setSignInEmail(e.target.value)}/>
                <input type="text" placeholder="Password" onChange={(e) => setSignInPw(e.target.value)}/>
                <button onClick={signIn}>Submit</button>
            </div>
        </div>
    )

}
export default Signin
