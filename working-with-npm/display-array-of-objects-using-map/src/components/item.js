import React, { Component } from "react";

class Item extends Component {
    render() {
        const items = this.props.data
        // in the next line, we can use item instead of (item) because it is only one parameter.
        const oneItem = items.map( (item) => {
            return(
                <p>Student number {item.num} is called {item.name} with {item.age} years old.</p>
            )
        })
        return (
            <div>
                {oneItem}
            </div>
        )
    }
}

export default Item;
