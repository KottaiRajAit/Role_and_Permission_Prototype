import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import the CSS file for styling

class MenuBar extends Component {
    render() {
        const { isCampaign, isHome, isSettings } = this.props;
        return (
            <nav className="menu-bar">
                {isHome && <Link to="/">Home</Link>}
                {isCampaign && <Link to="/campaign">Campaign</Link>}
                {isSettings && <Link to="/settings">Settings</Link>}
            </nav>
        );
    }
}

export default MenuBar;