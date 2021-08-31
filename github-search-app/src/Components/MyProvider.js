import React from "react";

export const MContext = React.createContext();  //exporting context object

export class MyProvider extends React.Component {
state = {message: ""}
render() {
        return (
            <MContext.Provider value={
            {   state: this.state,
                setUserData: (value) => this.setState({
                            message: value })}}>
            {this.props.children} 
            </MContext.Provider>
        )
    }
}