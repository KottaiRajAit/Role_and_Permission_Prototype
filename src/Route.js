import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home";
import Campaign from "./Campaign";
import Settings from "./Settings";
import middleware from "./middleware";

class Router extends Component {

    constructor(props) {
        super(props);
    }

    state = {  
        isHome : false,
        isCampaign : false,
        isSettings : false
    }

    componentDidMount() {
       let isHasPermission = middleware.isHasPermission(this.props.permissions)
       this.setState(isHasPermission)
    }

    render() {
        return (
            <BrowserRouter>
                <Layout isCampaign={this.state.isCampaign} isHome={this.state.isHome} isSettings={this.state.isSettings}>
                    <Routes>
                        {this.state.isHome && <Route path="/" element={<Navigate to="/Home" />} />}
                        {this.state.isHome && <Route path="/Home" element={<Home />} />}
                        {this.state.isCampaign && <Route path="/campaign" element={<Campaign />} />}
                        {this.state.isSettings && <Route path="/settings" element={<Settings />} />}
                    </Routes>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default Router;