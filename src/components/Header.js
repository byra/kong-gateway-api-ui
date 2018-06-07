import React from "react";
import {Component} from "react";
import "../styles/header.scss";


class Header extends Component{

    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className="title-bar">
                <div className="d-flex justify-content-center">
                    <p className = "align-self-center">Kong API Gateway UI</p>
                </div>
            </div>
        );
    };
}

export default Header