import React, { Component } from "react";

class Item extends Component {
    render() {
        /*
        const num = this.props.num
        const name = this.props.name
        const age = this.props.age
        */
        const {num, name, age} = this.props
        
        return (
            <p>Student number {num} is called {name} with {age} years old.</p>
        )
    }
}

export default Item;
