import React, { Component } from "react";
import Header from './Header';

class App extends Component {
  state = {
    name: 'Ahmed'
  }
  increament = () => {
    if(this.state.name === 'Ahmed'){
      this.setState({name: 'Saber'});
    }else{
      this.setState({name: 'Ahmed'});
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <h3>Hi, your name is {this.state.name} !</h3>
        <button onClick={this.increament}>Click Me</button>
      </div>
    )
  }
}

export default App;
