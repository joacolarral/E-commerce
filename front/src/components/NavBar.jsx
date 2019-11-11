import React from "react";
import SearchBarContainer from "../containers/SearchBarContainer";
import Greeting from "./Greeting";
import { Link } from "react-router-dom";
import logo from "../../../back/public/images/logo_transparent.png";
import styles from "../css-modules/navBar.module.css";
import Genres from './Genres'


export default props => {
  return (
    <nav className={"navbar navbar-expand-sm " + styles.navbar}>
      <div className="col-lg-3">
        <Link to="/">
          <img src={logo} width="auto" height="40" alt="" />
        </Link>
      </div>

      <div className="bar col-lg-4">
        <SearchBarContainer
          books={props.books}
          filtered={props.filtered}
          history={props.history}
        />

      </div>
      <div className="bar col-lg-1">
        <Genres fetchGenre={props.fetchGenre} genres={props.genres}/>
      </div>
      {props.loggedName ? (
        <div className={"col-lg-4 " + styles.login}>
          {props.loggedName.permisos > 1
           ?<button
            className="btn btn-info"
            onClick={() => {
              props.history.push("/dashboard");
            }}>   
            Dashboard
          </button>: false}
          <button
            className="btn btn-danger"
            onClick={() => {
              props.history.push("/");
              props.handleLogOut();
            }}
          >
            Logout
          </button>
          <Greeting name={props.loggedName} />
        </div>
      ) : (
        <div className={"col-lg-4 " + styles.login}>
          <button
            data-toggle="modal"
            data-target="#exampleModal"
            className="btn btn-info"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};
