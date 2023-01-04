import * as React from "react";

import logo from "../img/logo.svg";

const Footer = () => {
  
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Immersive Labs"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            &copy; 2023
            <br />
          </div>
        </div>
      </footer>
    );
};

export default Footer;
