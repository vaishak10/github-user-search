import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Search.css';
import { MContext } from './MyProvider';

async function getName(userName) {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

function getUser(){
    let userName;
    let element = document.querySelector('.user-name');
    if (element.value) {
        userName = element.value;
        console.log(userName)
        let userData = getName(userName);
        return userData;
    }  else {
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
                <MContext.Consumer>
                    {(context) => (
                <button className="btn btn-primary" onClick={()=> context.setUserData(getUser())}>Search</button>
                    )}
                </MContext.Consumer>
            </div>
        );
    }
}