import React from "react";
import api from "../api";

import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import PageLoading from "../components/PageLoading";

import "./styles/BadgeNew.css";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitterAccount: "",
      hashtagName: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div>
          <div className="BadgeNew_background"></div>
          <div className="container">
            <Badge
              firstName={this.state.form.firstName || "FIRSTNAME"}
              lastName={this.state.form.lastName || "LASTNAME"}
              jobName={this.state.form.jobTitle || "JOBNAME"}
              email={this.state.form.email || "EMAIL"}
              twitterAccount={this.state.form.twitterAccount || "TWITTER"}
              hashtagName={this.state.form.hashtagName || "HASHTAG"}
            />
            <BadgeForm
              formName="EDIT ATTENDANT"
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              form={this.state.form}
              error={this.state.error}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
