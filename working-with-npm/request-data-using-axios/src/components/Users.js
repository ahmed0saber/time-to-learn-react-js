import React, { Component } from "react";
import axios from "axios"

class Users extends Component {
    state = {
        users: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            this.setState({
                users: res.data
            })
        })
    }
    render(){
        return (
        <div>
            <h3>Users</h3>
            <p>All users here are requested from fake data API.</p>
            <div>
                {this.state.users.map(user =>
                    <div key={user.id} className="user-card">
                        <p>name: {user.name}</p>
                        <p>username: {user.username}</p>
                        <p>email: {user.email}</p>
                    </div>
                )}
            </div>
        </div>
        )
    }
}

export default Users;