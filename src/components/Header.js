import { useState, useEffect } from "react";
import logo from "./../../public/asset/app_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    // console.log("Header called!");

    // If no dependency array => useEffect will call on every render
    // If dependency array is empty = [] => useEffect will call once in initial render of the component
    // If dependency array has dependent = [btnLogin] => useEffect will call up on initial render + that dependent changes

    useEffect(() => {
        // console.log("useEffect called!");
    }, [btnLogin]);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>
            <div className="nav-items">
                <ul className="nav">
                    <li>
                        {" "}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <button
                            onClick={() => {
                                btnLogin === "Login"
                                    ? setBtnLogin("Logout")
                                    : setBtnLogin("Login");
                            }}
                        >
                            {btnLogin}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
