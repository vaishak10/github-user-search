import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Search.css';
import { MContext } from './MyProvider';

let profileData;

async function getName(userName) {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        profileData = data;
    } catch (error) {
        console.log(error);
    }
}

function getUser(){
    let userName;
    let element = document.querySelector('.user-name');
    if (element.value) {
        userName = element.value;
        getName(userName);
    }  else {
        alert("Enter user name");
    }
}

function Search() {
    return(
        <div className="input-field">
            <span><i className="fa fa-search"></i></span>
            <input type="text" placeholder="Enter name here" className="user-name"/>
            <MContext.Consumer>
                {(context) => (
            <button className="btn btn-primary" onClick={()=> {getUser();context.setUserData(profileData)}}>Search</button>
                )}
            </MContext.Consumer>
        </div>
    );
}

export default Search;