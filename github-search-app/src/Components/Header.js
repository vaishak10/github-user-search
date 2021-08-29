import React from "react";
import '../styles/Header.css';

export default class Header extends React.Component {
    render(){
        return(
            <div className="heading">
                <p>Dev Finder</p>
                <p>light</p>
            </div>
        );
    }
}