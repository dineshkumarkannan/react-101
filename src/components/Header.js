import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    // console.log("Header called!");

    // If no dependency array => useEffect will call on every render
    // If dependency array is empty = [] => useEffect will call once in initial render of the component
    // If dependency array has dependent = [btnLogin] => useEffect will call up on initial render + that dependent changes

    const cartItems = useSelector((store) => store.cart.items);

    useEffect(() => {
        // console.log("useEffect called!");
    }, [btnLogin]);
    return (
        <div className="flex justify-between bg-sky-50 shadow-md p-2">
            <div className="p-2">
                <img className="w-28 h-auto" src={LOGO_URL} />
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

                    <li className="m-2 p-2">
                        <Link to="/cart">Cart({cartItems.length} items)</Link>
                    </li>

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
