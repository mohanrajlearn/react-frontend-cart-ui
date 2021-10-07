import React from "react";
import "./Header.css";
import LoggedInView from "./LoggedInView";
import LoggedOutView from "./LoggedOutView";

export default class Header extends React.Component {
  root = () => {
    this.props.history.push("/");
  };

  explore = () => {
    this.props.history.push("/products");
  };

  register = () => {
    this.props.history.push("/register");
  };

  login = () => {
    this.props.history.push("/login");
  };

  logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="header">
        {/* Shows Qkart title image */}
        <div className="header-title" onClick={this.root}>
          <img src="icon.svg" alt="QKart-icon"></img>
        </div>

        {/* TODO: CRIO_TASK_MODULE_PRODUCTS - Display any child element passed to the component*/}
           {this.props.children}      

        {/* Display links based on if the user's logged in or not */}
        <div className="header-action">
          {localStorage.getItem("username") ? (
            <LoggedInView login = {this.login} />
            ) : (
              <LoggedOutView logout = {this.logout}/>
            )}
        </div>
      </div>
    );
  }
}
