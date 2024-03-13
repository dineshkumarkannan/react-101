import { useState } from "react";
import logo from "./../../public/asset/app_logo.png";

const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>
            <div className="nav-items">
                <ul className="nav">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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
