import React, { Component } from 'react';
import './Login.css';
import userRoles from './userRoles.json';
import Router from './Route'; // Import the Router component

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            permissions: null // Add permissions to the state
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleLogin = () => {
        const { username, password } = this.state;
        console.log('Username:', username);
        console.log('Password:', password);

        const user = userRoles.roles.find(role => role.slug === username);

        if (user) {
            this.setState({ permissions: user.permissions });
        } else {
            alert('User not found');
        }
    }

    render() {
        const { username, password, permissions } = this.state;

        if (permissions) {
            return <Router permissions={permissions} />; // Pass permissions to Router
        }

        return (
            <div className="login-container">
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleInputChange}
                    placeholder="Username"
                />
                <br />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                />
                <br />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}

export default Login;