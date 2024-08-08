import React, { Component } from 'react';
import './Login.css'; // Import the CSS file for styling

class Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialize your state variables here
        };
    }

    render() {
        return (
            <div className="campaign-container">
                <h1>Campaign</h1>
                <p>Welcome to the Campaign page!</p>
            </div>
        );
    }
}

export default Campaign;