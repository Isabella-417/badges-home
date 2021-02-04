import React from "react";

import Gravatar from "./Gravatar";

import "./styles/Badges.css";
import backgroundImage from "../images/newUser.svg";

class Badge extends React.Component {
  render() {
    return (
      <section className="badge">
        <header>
          <img src={backgroundImage} width="100" alt="background" />
        </header>
        <div className="content-badge">
        <Gravatar email={this.props.email}/>
          <h1>
            {this.props.firstName} {this.props.lastName}
          </h1>
        </div>
        <div className="main-info">
          <h3>{this.props.jobName}</h3>
          <p>@{this.props.twitterAccount}</p>
        </div>
        <footer>#{this.props.hashtagName}</footer>
      </section>
    );
  }
}

export default Badge;
