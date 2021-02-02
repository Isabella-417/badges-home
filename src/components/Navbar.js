import React from "react";
import {Link} from "react-router-dom";

import "../global.css";
import "./styles/Navbar.css";
import backgroundImage from "../images/backgroundHeader.svg";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <img src={backgroundImage} width="70" alt="logo" />
          </li>
          <li>
            <Link to="/">
              <span className="font-weight-light">Blue</span>
              <span className="font-weight-bold">Conf</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
