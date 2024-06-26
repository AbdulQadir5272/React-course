import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
      <div className="header">
        <div className="logo_container">
          <img
            className="logo"
            src={LOGO_URL}
            alt=""
          />
        </div>
        <div className="nav_items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
