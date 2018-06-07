import React from "react";
import {Component} from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "../styles/layout.scss";

class Layout extends Component {

    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col p-0">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-0">
                        <Body/>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-0">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Layout;