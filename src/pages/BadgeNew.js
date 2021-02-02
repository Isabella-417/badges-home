import React from "react";

import "./styles/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import Navbar from "../components/Navbar";

class BadgeNew extends React.Component {
  state = { form: {
      firstName : "",
      lastName : "",
      jobTitle : "",
      email : "",
      twitterAccount : "",
      hashtagName : ""
  } };

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name] : event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div className="BadgeNew_background"></div>
          <div className="container">
            <Badge
              firstName={this.state.form.firstName}
              lastName={this.state.form.lastName}
              jobName={this.state.form.jobTitle}
              email={this.state.form.email}
              twitterAccount={this.state.form.twitterAccount}
              hashtagName={this.state.form.hashtagName}
            />
            <BadgeForm onChange={this.handleChange} form={this.state.form} />
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
