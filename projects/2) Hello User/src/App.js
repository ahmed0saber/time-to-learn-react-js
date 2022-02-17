import React, { Component } from "react";

class App extends Component {

  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value})
  }

  render() {
    return (
      <div>
        <h3>Form Handling</h3>
        <p>Hello {this.state.name} !</p>
        <form>
          <input type="text" onChange={this.handleChange} placeholder="Enter your name"/>
        </form>
      </div>
    )
  }
}

export default App;
