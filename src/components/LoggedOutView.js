
import React,{Component} from "react";
import { Button } from "antd";
export default class LoggedOutView  extends Component {
render(){
    return (
       <>
        <img
          src="avatar.png"
          alt="profile"
          className="profile-image"
        ></img>

        <div className="header-info">
          {localStorage.getItem("username")}
        </div>

        <Button type="primary" onClick={this.props.logout}>
          Logout
        </Button>
      </>
    );
}
}