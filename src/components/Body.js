import React from "react";
import {Component} from "react";
import SideNavBar from "./SideNavBar"
import "../styles/body.scss";

class Body extends Component{

    constructor(props){
        super(props);
    };

    render(){
      return (
          <div className="body align-self-center">
            <SideNavBar/>
          </div>
      )
    };
}

export default Body;