import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import NoPage from "./NoPage"


//React Hook "useParams" cannot be called in a class component. React Hooks must be called in a React function component or a custom React Hook function
class ProfilePage extends Component {
    state = {
        user: [],
        found: false
    }

    componentDidMount() {
        const id = this.props.params.id
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            for(var i=0; i<res.data.length; i++) {
                if(res.data[i].id == id) {
                    this.setState({
                        user: res.data[i],
                        found: true
                    })
                }
            }
        })
    }

    render(){
        return (
        <div>
            { this.state.found ? <div>
                <h3> {this.state.user.name}'s Profile </h3>
                <p> username: {this.state.user.username} </p>
                <p> email: {this.state.user.email} </p>
            </div> : <NoPage/> }
        </div>
        )
    }
}

const Profile = (props) => {
    const param = useParams()
    console.log(param)

    return (
        <ProfilePage params={param}/>
    )
}

export default Profile;