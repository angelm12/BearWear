import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Nav() {
    let navigate = useNavigate();
    const logOut = async () => {
        await signOut(auth);
        navigate("/")
    }
    return (
        <div>
            <div>
            <Link to={"/Signup"}>BearWear</Link>
            </div>
            <button onClick={ logOut }>Log Out</button>
        </div>
    )
};

export default Nav