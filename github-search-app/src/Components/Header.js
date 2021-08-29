import React from "react";
import '../styles/Header.css';

export default class Header extends React.Component {
    render(){
        return(
            <div className="heading">
                <h4>Dev Finder</h4>
                <p className="theme-selector">light</p>
            </div>
        );
    }
}