import React from "react";

import "./styles/HomePage.css";
import "../global.css";

import HomePageImage from "../images/homePage.svg";

function HomePage() {
  return (
    <div className="backgroundHome">
      <figure>
        <img src={HomePageImage} alt="welcome page" />
        <figcaption></figcaption>
      </figure>
      <div className="welcomeText">
        <p>Welcome to</p>
        <h1>
          <span className="borderTitle">Blue</span>
          <span className="borderTitle">Conf</span>
        </h1>
        <p>Manager</p>
        <button type="button" className="btn-save btn-started">
          Get Started!
        </button>
      </div>
    </div>
  );
}

export default HomePage;
