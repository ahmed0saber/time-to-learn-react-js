import React, { Component } from "react";
import Item from './components/item';

class App extends Component {
  render() {
    return (
      <div>
        <h3>List Of Items</h3>
        <Item num="1" name="Ahmed" age="21"/>
        <Item num="2" name="Ali" age="20"/>
        <Item num="3" name="Ashraf" age="20"/>
        <Item num="4" name="Mohammed" age="19"/>
        <Item num="5" name="Saber" age="22"/>
      </div>
    )
  }
}

export default App;
