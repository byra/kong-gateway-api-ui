import React from "react";
import {Component} from "react";
import "../styles/footer.scss"

class Footer extends Component{

    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className="footer-bar">
                <div className="d-flex justify-content-center">
                    <p className = "align-self-center">Developed by Intellisoft Technologies</p>
                </div>
            </div>
        );
    };
}

export default Footer;