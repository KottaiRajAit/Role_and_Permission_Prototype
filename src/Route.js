import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home";
import Campaign from "./Campaign";
import Settings from "./Settings";
import middleware from "./middleware";

class Router extends Component {

    state = {  
        isHome: false,
        isCampaign: false,
        isSettings: false
    }

    componentDidMount() {
        const permissions = middleware.isHasPermission(this.props.permissions);
        this.setState(permissions);
    }

    render() {
        const { isHome, isCampaign, isSettings } = this.state;

        const routes = [
          { path: '/', component: Home, hasComponent: isHome },
          { path: '/campaign', component: Campaign , hasComponent: isCampaign  },
          { path: '/settings', component: Settings, hasComponent: isSettings  },
          { path: '*', hasComponent: false } // Catch-all for undefined routes
        ];

        return (
            <BrowserRouter>
                <Layout isHome={isHome} isCampaign={isCampaign} isSettings={isSettings}>
                    <Routes>
                        {routes.map((route, index) => 
                            route.hasComponent ? (
                                <Route 
                                    key={index} 
                                    path={route.path} 
                                    element={<route.component />} 
                                />
                            ) : (
                                <Route 
                                    key={index} 
                                    path={route.path} 
                                    element={<Navigate to="/" replace />} 
                                />
                            )
                        )}
                    </Routes>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default Router;
