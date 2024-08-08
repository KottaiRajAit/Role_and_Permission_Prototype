import React, { Component } from "react";
import MenuBar from "./menu.jsx";
import "./Login.css"; // Import the CSS file for styling

class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="layout-container">
                <MenuBar isCampaign={this.props.isCampaign} isHome={this.props.isHome} isSettings={this.props.isSettings}/>
                <div className="content-container">
                    {children}
                </div>
            </div>
        );
    }
}

export default Layout;