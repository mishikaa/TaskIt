// Component for the navigation bar

import React from "react";

const navStyle = {
        backgroundImage: "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
        textAlign: "center",
        fontSize: "2rem",
        color: "white",
        fontWeight: "600",
        padding: "1rem",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
}
const imgStyling = {
    width: "50px",
    margin: "0.5rem"
}

const Navbar = () => {
    return (
        <>
            <nav style={navStyle}>
                <div>
                  <img src="./assets/logo.svg" alt="logo" style={imgStyling}/>
                  <span className="navbar-brand">Task<span>It</span></span>
                </div>
            </nav>
        </>
    )
}

export default Navbar;