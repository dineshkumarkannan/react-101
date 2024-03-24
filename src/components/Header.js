import { useState, useEffect, useContext } from "react";
import logo from "./../../public/asset/app_logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    // console.log("Header called!");

    // If no dependency array => useEffect will call on every render
    // If dependency array is empty = [] => useEffect will call once in initial render of the component
    // If dependency array has dependent = [btnLogin] => useEffect will call up on initial render + that dependent changes

    useEffect(() => {
        // console.log("useEffect called!");
    }, [btnLogin]);
    return (
        <div className="flex justify-between bg-sky-50 shadow-md p-2">
            <div className="p-2">
                <img className="w-28 h-auto" src={logo} />
            </div>
            <div className="flex items-center">
                <ul className="flex justify-around">
                    <li className="m-2 p-2">
                        online status : {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="m-2 p-2">
                        {" "}
                        <Link to="/">Home</Link>
                    </li>
                    <li className="m-2 p-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="m-2 p-2">
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li className="m-2 p-2">Cart</li>

                    <li className="m-2 p-2">
                        <Link to="/grocery">Grocery</Link>
                    </li>

                    <li className="m-2 p-2">
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
                    <li className="m-2 p-2">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
