import React, { Component } from "react";
import Item from './components/item';

class App extends Component {
  state = {
    items: [
      {num:1, name:'Ahmed', age:21},
      {num:2, name:'Ali', age:20},
      {num:3, name:'Ashraf', age:20},
      {num:4, name:'Mohammed', age:19},
      {num:5, name:'Saber', age:22},
      {num:6, name:'Yasser', age:21}
    ]
  }
  render() {
    return (
      <div>
        <h3>List Of Items</h3>
        <Item data={this.state.items}/>
      </div>
    )
  }
}

export default App;
