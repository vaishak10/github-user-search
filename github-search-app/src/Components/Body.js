import React from "react";
import '../styles/Body.css';
import logo from './../images/Octocat.jpg'

async function getName(userName) {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '---',
            created_at: '---',
            login: '---',
            public_repos:'---',
            followers:'---',
            following:'---',
            avatar:logo,
        };
    }

    handleChange = () => {
        let userName;
        let element = document.querySelector('.user-name');
        let monthsArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        if (element.value) {
            userName = element.value;
            let data = getName(userName);
            data.then((response) => {
                //Set the github acc creation date in the format: date mon year (Ex: 14 Jul 2019)
                let joinDate = response.created_at.split('-');
                joinDate[1] = monthsArray[parseInt(joinDate[1])-1];
                joinDate[2] = parseInt(joinDate[2].slice(0,2));

                this.setState({
                    name: response.name,
                    created_at: 'Joined ' + joinDate.reverse().join(' '),
                    login: '@' + response.login,
                    public_repos:response.public_repos,
                    followers:response.followers,
                    following:response.following,
                    avatar: response.avatar_url
                });
            });
        } else {
            this.setState({
                name: '---',
                created_at: '---',
                login: '---',
                public_repos:'---',
                followers:'---',
                following:'---',
                avatar: logo
            });
            setTimeout(() => alert("Enter user name"),500);
        }
    }

    render() {
        return (
            <div className="body-contents">
                <div className="input-field">
                    <span><i className="fa fa-search"></i></span>
                    <input type="text" placeholder="Enter name here" className="user-name" />
                    <button className="btn btn-primary" onClick={this.handleChange}>Search</button>
                </div>
                <div className="body">
                    <div className="image"><img src={this.state.avatar} alt={'logo'} /></div>
                    <div className="profile-details">
                        <div className="body-content">
                            <div className="intro-date">
                                <p className="name">{this.state.name}</p>
                                <p className="date">{this.state.created_at}</p>
                            </div>
                            <p className="login-name">{this.state.login}</p>
                        </div>
                        <div className="profile-info">
                            <table>
                                <thead>
                                    <tr className="labels">
                                        <th>Repos</th>
                                        <th>Followers</th>
                                        <th>Following</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="data">
                                        <td>{this.state.public_repos}</td>
                                        <td>{this.state.followers}</td>
                                        <td>{this.state.following}</td>
                                    </tr>
                                </tbody>
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
            </div>
        );
    }
}

//export default App;
//export default Body;