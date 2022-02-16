import React, { Component } from "react";
import Header from './Header';

class App extends Component {
  state = {
    num: 0
  }
  increament(){
    var x = this.state.num + 1
    this.setState({num: x});
    console.log(x)
  }
  render() {
    return (
      <div>
        <Header/>
        <h3>Hi, You clicked this button {this.state.num} times !</h3>
        <button onClick={this.increament.bind(this)}>Click Me</button>
      </div>
    )
  }
}

export default App;
