import React from "react";

import "./styles/BadgeForm.css";
import "../global.css";

class BadgeForm extends React.Component {
  handleClick = (e) => {
    console.log("Button was clicked");
  };

  render() {
    return (
      <div onSubmit={this.props.onSubmit} className="formContainer">
        <h1>{this.props.formName}</h1>
        <form className="formBadge">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              onChange={this.props.onChange}
              name="firstName"
              value={this.props.form.firstName}
              minLength="5"
              maxLength="20"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              onChange={this.props.onChange}
              name="lastName"
              value={this.props.form.lastName}
              minLength="5"
              maxLength="20"
              required
            />
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={this.props.onChange}
              name="email"
              value={this.props.form.email}
              minLength="5"
              maxLength="200"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job title</label>
            <input
              type="text"
              onChange={this.props.onChange}
              name="jobTitle"
              value={this.props.form.jobTitle}
              minLength="5"
              maxLength="20"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              onChange={this.props.onChange}
              name="twitterAccount"
              value={this.props.form.twitterAccount}
              minLength="5"
              maxLength="20"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hashtag">Hashtag</label>
            <input
              type="text"
              onChange={this.props.onChange}
              name="hashtagName"
              value={this.props.form.hashtagName}
              minLength="5"
              maxLength="20"
              required
            />
          </div>

          <div className="form-group">
            <label className="terms-policy" htmlFor="terms">
              <input
                type="checkbox"
                name="terms"
                onChange={this.props.onChange}
              />
              I accept
              <span className="highLightService"> terms of service </span>
              and the <span className="highLightService"> privacy policy</span>
            </label>
          </div>

          <button onClick={this.handleClick} className="btn-save btn-big">
            Save
          </button>
          {this.props.error && <p class="text-danger">{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
