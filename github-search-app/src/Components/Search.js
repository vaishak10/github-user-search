import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Search.css';

function getName(userName) {
    fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json()) 
    .then( data => console.log(data))
    .catch( error => console.error(error));
}

function getUser(){
    let userName;
    let element = document.querySelector('.user-name');
    if (element.value) {
        userName = element.value;
        console.log(userName)
        getName(userName);
    }
    else {
        alert("Enter user name");
    }
}

let button = document.querySelector('button');
if(button){
    button.addEventListener('click',getUser);
}

export default class Search extends React.Component{
    render(){
        return(
            <div className="input-field">
                <span><i className="fa fa-search"></i></span>
                <input type="text" placeholder="Enter name here" className="user-name"/>
                <button className="btn btn-primary" onClick={getUser}>Search</button>
            </div>
        );
    }
}