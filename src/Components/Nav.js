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
        <div className="">
            <div className=" p-2 text-3xl font-bold">
            <Link to={"/"}>BearWear</Link>
            </div>
            <div className="flex justify-end items-center text-2xl  pr-8 font-mono ">
            <button onClick={ logOut }>Log Out</button>
            </div>
           
        </div>
    )
};

export default Nav