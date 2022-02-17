import React, { Component } from "react";

var username = '';

class App extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    username = e.target.value;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: username})
  }

  render() {
    return (
      <div>
        <h3>Form Handling</h3>
        <p>Hello {this.state.name} !</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter your name" onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
