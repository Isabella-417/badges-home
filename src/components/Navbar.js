import React from "react";

import "../global.css";
import "./styles/Navbar.css";
import backgroundImage from "../images/backgroundHeader.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <img src={backgroundImage} width="70" alt="logo" />
          </li>
          <li>
            <a href="/">
              <span className="font-weight-light">Home</span>
              <span className="font-weight-bold">Blue</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
