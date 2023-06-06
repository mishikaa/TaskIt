import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useEffect, useState } from "react";

import Home from "../Home";

const SignIn = () => {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }
    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })
    return (
        <>
            {value ? <Home /> : 
            <button onClick={handleClick}>
                Sign in
            </button>}
        </>
    )
}

export default SignIn;