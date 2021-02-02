import React from "react";

import "./styles/NotFound.css";
import "../global.css";

import NotFoundPage from "../images/404.svg";
function NotFound() {
  return (
    <React.Fragment>
      <figure className="notFoundPage">
        <figcaption>
          <h3>Sorry, we couldn't find the page you're looking for :(</h3>
        </figcaption>
        <img src={NotFoundPage} alt="Not found page" width="500" />
      </figure>
    </React.Fragment>
  );
}

export default NotFound;
