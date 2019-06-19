import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ReservationPage from "views/Reservation/ReservationPage.jsx";
import Reservations from "./views/Components/Reservations/index";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import Welcome from "./components/Welcome";
import LandingPageBis from "./views/LandingPage/LandingPageBis";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/landing-page-bis" component={LandingPageBis} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/reservations" component={Reservations} />
      <Route path="/reservation-page" component={ReservationPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route exact path="/" component={Welcome} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
