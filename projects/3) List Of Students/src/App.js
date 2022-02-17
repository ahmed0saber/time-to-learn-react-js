import React, { Component } from "react";
import Item from './components/item';

var num = 0;

class App extends Component {
  handleChange = (e) => {
    this.setState({
      currentItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault();
    num++
    let myItems = this.state.items
    myItems.push({id: num, name: this.state.currentItem})
    this.setState({
      items: myItems,
      currentItem: ''
    })
  }

  state = {
    items: [],
    currentItem: ''
  }

  render() {
    return (
      <div>
        <h3>List Of Students</h3>
        <Item data={this.state.items}/>
        <form onSubmit={this.addItem}>
          <input type="text" placeholder="Enter student name" value={this.state.currentItem} onChange={this.handleChange}/>
          <button>Add Student</button>
        </form>
      </div>
    )
  }
}

export default App;