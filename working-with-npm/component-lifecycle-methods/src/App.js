import React, { Component } from "react";

class App extends Component {
  constructor(){
    super()
    console.log("from constructor")
  }

  componentDidMount(){
    console.log("from componentDidMount")
  }

  componentDidUpdate(){
    console.log("from componentDidUpdate")
  }

  render(){
    console.log("from render")
    return (
      <div>
        <h3>Open Console</h3>
      </div>
    )
  }
}

export default App;