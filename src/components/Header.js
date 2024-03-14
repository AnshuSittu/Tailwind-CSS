import { LOGO_URL } from "../../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");


  const onlineStatus = useOnlineStatus();


  return (
    <div className="header">
      <div className="logo-container">
      <Link to="/"> <img className="logo" src={LOGO_URL} /></Link> 
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="nav">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav">About Us</Link>
          </li>
          <li>
            <Link to="/grocery" className="nav">Grocery</Link>
          </li>
          <li>
            <Link to="/contact" className="nav">Contact Us</Link>
          </li>
          <li><Link to="/cart" className="nav">Cart</Link></li>
          <li className="nav">{onlineStatus ? "🟢" : "🔴"}</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
