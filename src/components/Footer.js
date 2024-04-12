import React from "react";
import logo from "../logo_footer.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={logo} style={{ width: "162px", height: "279px" }}></img>
        <div>
          <nav>
            <p style={{fontSize: "20px", fontWeight:"bold"}}>Doormat Navigation</p>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Menu</a>
              </li>
              <li>
                <a>Reservations</a>
              </li>
              <li>
                <a>Order Online</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </nav>
          <div className="contact">
            <p style={{fontSize: "20px", fontWeight:"bold"}}>Contact</p>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
          </div>
          <div className="social-media-links">
            <p style={{fontSize: "20px", fontWeight:"bold"}}>Social Media Link</p>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
