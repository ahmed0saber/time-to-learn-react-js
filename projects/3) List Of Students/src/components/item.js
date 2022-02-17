import React, { Component } from "react";

class Item extends Component {
    render() {
        const items = this.props.data
        // in the next line, we can use item instead of (item) because it is only one parameter.
        const oneItem = items.map( (item) => {
            return(
                <p key={item.id}>Student number {item.id} is called {item.name}.</p>
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