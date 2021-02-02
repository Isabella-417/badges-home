import React from "react";

import "./styles/Badges.css";

import avatar from "../images/avatar.png";
import backgroundImage from "../images/backgroundHeader.png";

class Badge extends React.Component {
  render() {
    return (
      <section className="badge">
        <header>
          <img src={backgroundImage} width="100" alt="background" />
        </header>
        <div className="content-badge">
          <img src={avatar} alt="profile" width="120" />
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
