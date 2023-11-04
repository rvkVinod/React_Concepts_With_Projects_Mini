import React, { Component } from "react";

class ClassComponent extends React.Component {

    state = {
        name:"prashanthi",
        place:"madarapakam",
        im:"sister"
    }
    constructor(){
        super();
    }
    render(){
        let place = "hyd"
        return(
            <div>
                <h1>Im am class Component </h1>
               
                <h2>My name is state={this.state.name} from state={this.state.place}im Vinod's state={this.state.im}</h2>
            </div>
        )
    }
}

export default ClassComponent;


 