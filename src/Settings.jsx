import React, { Component } from 'react';
import './Login.css'; // Import the CSS file for styling
class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialize your state variables here
        };
    }

    render() {
        return (
            <div className='setting-container'>
                <h1>Settings</h1>
                <p>Welcome to the Settings page!</p>
            </div>
        );
    }
}

export default Settings;