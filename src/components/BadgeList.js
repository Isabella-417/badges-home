import React from "react";

import "./styles/BadgeList.css";

class BadgeList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.badges.map((element) => {
          return (
            <li>
              <div className="personInfoContainer" key={element.id}>
                <div className="profileImageHolder">
                  <img src={element.avatarUrl} alt="person profile" />
                </div>
                <div className="infoContent">
                  <div className="names">
                    {element.firstName} {element.lastName}
                  </div>
                  <div className="twitterAccount">@{element.twitter}</div>
                  <div className="jobTitle">{element.jobTitle}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
