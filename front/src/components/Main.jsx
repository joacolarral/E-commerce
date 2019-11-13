import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import store from "../store/index";

import BooksContainer from "../containers/BooksContainer";
import SingleBookContainer from "../containers/SingleBookContainer";
import NavBarContainer from "../containers/NavbarContainer";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import DashboardContainer from "../containers/DashboardContainer";
import AddBookContainer from "../containers/AddBookContainer";
import AddGenreContainer from "../containers/AddGenreContainer";
import EditGenreContainer from "../containers/EditGenreContainer";
import KartContainer from "../containers/KartContainer";
import CheckoutContainer from "../containers/CheckoutContainer";
import HistorialContainer from "../containers/HistorialContainer";
import { fetchUser } from "../store/actions/users";

export default () => {
  useEffect(() => {
    store.dispatch(fetchUser());
  });

  return (
    <div id="main">
      <Route path="/" component={NavBarContainer} />
      <Route path="/" component={KartContainer} />
      <Route path="/" component={HistorialContainer} />
      <Route exact path="/books/:id" component={SingleBookContainer} />
      <Route exact path="/" component={BooksContainer} />
      <Route path="/" component={LoginContainer} />
      <Route path="/" component={RegisterContainer} />
      <Route exact path="/dashboard" component={DashboardContainer} />
      <Route exact path="/dashboard/add" component={AddBookContainer} />
      <Route exact path="/dashboard" component={AddGenreContainer} />
      <Route exact path="/dashboard" component={EditGenreContainer} />
      <Route exact path="/books/:id/edit" component={AddBookContainer} />
      <Route exact path="/checkout" component={CheckoutContainer} />
    </div>
  );
};
