import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="heading-container">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
        <p className="logo-name">Restaurant Guru</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;