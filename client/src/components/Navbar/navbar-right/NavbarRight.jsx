import "./NavbarRight.css";
import { FaSearch, FaBell } from "react-icons/fa";

const NavbarRight = () => {
  return (
    <div className="navbar-right-content">

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search campaigns..."
        />
        <FaSearch className="search-icon" />
      </div>

      {/* Notification */}
      <div className="notification">
        <FaBell />
        <span className="notification-badge">3</span>
      </div>

      {/* Login */}
      <button className="login-btn">
        Login
      </button>

      {/* Start Fundraiser */}
      <button className="fundraiser-btn">
        Start Fundraiser
      </button>

    </div>
  );
};

export default NavbarRight;