import React from "react";
import {Component} from "react";
import "../styles/body.scss"

class SideNavBar extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="side-nav-bar">
                <div className="align-self-center d-flex align-items-start flex-column">
                    <button className="btn btn-secondary active m-2">
                        Add APIs
                    </button>
                    <button className="btn btn-secondary m-2">
                        Update APIs
                    </button>
                    <button className="btn btn-secondary m-2">
                        Delete APIs
                    </button>
                    <button className="btn btn-secondary m-2">
                        Show APIs
                    </button>
                </div>
            </div>
        );
    }
}

export default SideNavBar;