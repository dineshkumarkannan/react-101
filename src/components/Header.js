import logo from "./../../public/asset/app_logo.png";

const Header = () => (
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
            </ul>
        </div>
    </div>
);

export default Header;
