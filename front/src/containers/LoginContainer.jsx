import { connect } from "react-redux";
import Login from "../components/Login";
import React, { Component } from "react";
import { fetchUser, loginUser } from "../store/actions/users";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      warning: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props
      .loginUser(this.state.username, this.state.password)
      .then(user => {
        $("#exampleModal").modal("hide");
        $("#slider").removeClass("open");
        $("#slide-button").removeClass("moved");
        localStorage.clear();
      })
      .catch(err => {
        console.log(err);
        this.setState({ warning: "Wrong username or password" });
      });
  }

  handleUserInput(username) {
    this.setState({ username });
  }

  handlePasswordInput(password) {
    this.setState({ password });
  }

  handleRegister() {
    $("#exampleModal").modal("hide");
  }

  render() {
    return (
      <div>
        <Login
          handleSubmit={this.handleSubmit}
          handleUserInput={this.handleUserInput}
          handlePasswordInput={this.handlePasswordInput}
          handleRegister={this.handleRegister}
          warning={this.state.warning}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(fetchUser(user)),
  loginUser: (username, password) => {
    return dispatch(loginUser(username, password));
  }
});

export default connect(null, mapDispatchToProps)(LoginContainer);
