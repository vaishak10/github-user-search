import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Search.css';

export default class Search extends React.Component{
    render(){
        return(
            <div class="input-field">
                <span><i class="fa fa-search"></i></span>
                <input type="text" placeholder="Enter name here" className="user-name"/>
                <input class="btn btn-primary" type="button" value="Search"/>
            </div>
        );
    }
}