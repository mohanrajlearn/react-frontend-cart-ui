import React,{Component} from "react";
import { Button } from "antd";
export default class LoggedInView  extends Component {
render(){
    return (
        <>
              <div className="header-link" onClick={this.explore}>
                Explore
              </div>

              <div className="header-link" onClick={this.props.login}>
                Login
              </div>

              <div className="header-link">
                <Button type="primary" onClick={this.register}>
                  Register
                </Button>
              </div>
            </>
        
    );
}          
}