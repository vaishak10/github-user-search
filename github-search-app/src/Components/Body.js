import React from "react";

export class Body extends React.Component {
    render(){
        return(
            <div class="body">
                <div class="image"></div>
                <div class="body-content">
                    <div class="intro-date">
                        <p>Mr. Vaish</p>
                        <p>25 March 2020</p>
                    </div>
                    <p>Mr Vaish</p>
                </div>
                <div class="profile-info">
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
                <div class="links">
                    <div class="location"></div>
                    <div class="github"></div>
                    <div class="twitter"></div>
                    <div class="works-at"></div>
                </div>
            </div>
        );
    }
}