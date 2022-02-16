## Clicks Counter

An app that counts user clicks on a certain button.

https://react-yus4kq.stackblitz.io/

## An alternative to code included in App.js

<pre>
<code>
  import React, { Component } from "react";
  import Header from './Header';

  class App extends Component {
    state = {
      num: 0
    }
    /*increament(){
      var x = this.state.num + 1
      this.setState({num: x});
      console.log(x)
    }*/
    increament = () => {
      var x = this.state.num + 1
      this.setState({num: x});
      console.log(x)
    }
    render() {
      return (
        &lt;div&gt;
          &lt;Header/&gt;
          &lt;h3&gt;Hi, You clicked this button {this.state.num} times !&lt;/h3&gt;
          &lt;button onClick={this.increament}&gt;Click Me&lt;/button&gt;
        &lt;/div&gt;
      )
    }
  }

  export default App;
</code>
</pre>
