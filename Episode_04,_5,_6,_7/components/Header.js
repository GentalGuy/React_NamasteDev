import { LOGO_URL } from "../src/utils/constants";
import { Link, useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleClick = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <h4>Welcome, {user.name}</h4>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            style={{ background: `red` }}
            onClick={handleClick}
            className="login"
          >
            Log out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
