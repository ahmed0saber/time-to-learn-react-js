## Hello User

An app that takes the user name as input that says "Hello user"


## An alternative to App.js, to work on submission not on change

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
      &lt;div&gt;
        &lt;h3&gt;Form Handling&lt;/h3&gt;
        &lt;p&gt;Hello {this.state.name} !&lt;/p&gt;
        &lt;form onSubmit={this.handleSubmit}&gt;
          &lt;input type="text" placeholder="Enter your name" onChange={this.handleChange}/&gt;
          &lt;button&gt;Submit&lt;/button&gt;
        &lt;/form&gt;
      &lt;/div&gt;
    )
  }
}

export default App;
