import React, { Component } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import NoPage from "./components/NoPage"
import Users from "./components/Users"

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="*" element={<NoPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;