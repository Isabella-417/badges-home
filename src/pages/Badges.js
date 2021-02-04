import { Link } from "react-router-dom";
import React from "react";

import api from "../api";
import "./styles/Badges.css";

import BadgeList from "../components/BadgeList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(() => {
      this.fetchData();
    }, 5000);
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew_background"></div>
        <section className="BadgeContainerList">
          <div className="btn-options">
            <Link
              to="/badges/new"
              className="button btn-save btn-medium btn-round"
            >
              New Badge
            </Link>
          </div>
          <div className="badgeContainer">
            <BadgeList badges={this.state.data} />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Badges;
