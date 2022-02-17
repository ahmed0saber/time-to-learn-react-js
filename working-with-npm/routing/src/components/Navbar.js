import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";

class Navbar extends Component {
    render(){
        return (
        <div className="navbar">
            <h3>React App</h3>
            <div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </div>
            <Outlet/>
        </div>
        )
    }
}

export default Navbar;