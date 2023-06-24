import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import Navbar from "../Navbar";
import './signin.css';

const SignIn = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate();

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
            navigate('/home');
        })
    }
    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })
    return (
        <>
            <Navbar />
            <div className="signup">
                <h1>Sign Up</h1>
                <form className="signup-form">
                    <label for="username">Username</label>
                    <input 
                        type="text" 
                    />
                    <label for="password">Password</label>
                    <input 
                        type="password" 
                    />
                    <button className="signup-btn">Sign Up</button>
                </form>

                <div className="or"> 
                    <span>OR</span>
                </div>
                
                <button className="google-signup" onClick={handleClick}>
                    <img src="/assets/google.png" alt="google"></img>
                </button>
            </div>
        </>
    )
}

export default SignIn;