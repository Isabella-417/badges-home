import md5 from "md5";
import React from "react";
import { Link } from "react-router-dom";

import Gravatar from "../components/Gravatar";
import "./styles/BadgeList.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="personInfoContainer">
        <div className="profileImageHolder">
          <Gravatar email={md5(this.props.badge.email)} />
        </div>
        <div className="infoContent">
          <div className="names">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </div>
          <div className="twitterAccount">
            @{this.props.badge.twitterAccount}
          </div>
          <div className="jobTitle">{this.props.badge.jobTitle}</div>
        </div>
      </div>
    );
  }
}

class BadgeList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>There isn't data to show</h3>
          <Link className="button" to="/badges/new">
            Create new Badge
          </Link>
        </div>
      );
    }
    return (
      <ul>
        {this.props.badges.map((element) => {
          return (
            <li key={element.id}>
              <Link to={`/badges/${element.id}/edit`}>
                <BadgesListItem badge={element} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
