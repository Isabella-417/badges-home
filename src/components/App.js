import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";

import BadgeEdit from "../pages/BadgeEdit";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";


function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
        <Route component={NotFound} />
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
