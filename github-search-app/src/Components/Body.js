import React from "react";
import '../styles/Body.css';
import logo from './../images/Octocat.jpg'

export default class Body extends React.Component {
    render(){
        return(
            <div className="body">
                <div className="image"><img src={logo} alt={'logo'} /></div>
                <div className="profile-details">
                <div className="body-content">
                    <div className="intro-date">
                        <p className="name">Mr. Vaish</p>
                        <p className="date">25 March 2020</p>
                    </div>
                    <p>@Vaish</p>
                </div>
                <div className="profile-info">
                    <table>
                        <tr>
                            <th>Repos</th>
                            <th>Followers</th>
                            <th>Following</th>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>2</td>
                            <td>5</td>
                        </tr>
                    </table>
                </div>
                <div className="links">
                    <div className="location"></div>
                    <div className="github"></div>
                    <div className="twitter"></div>
                    <div className="works-at"></div>
                </div>
                </div>
            </div>
        );
    }
}