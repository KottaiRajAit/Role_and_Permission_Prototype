import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home";
import Campaign from "./Campaign";
import Settings from "./Settings";
import middleware from "./middleware";

class Router extends Component {

    state = {  
        isHome: false,
        isCampaign: false,
        isSettings: false,
        loading: true
    }

    componentDidMount() {
        const permissions = middleware.isHasPermission(this.props.permissions);
        this.setState({ ...permissions, loading: false });
    }

    render() {
        const { isHome, isCampaign, isSettings, loading } = this.state;
        
        if (loading) {
            return <div>Loading...</div>;
        }

        const routes = [
          { path: '/', component: Home, hasComponent: isHome },
          { path: '/campaign', component: Campaign , hasComponent: isCampaign },
          { path: '/settings', component: Settings, hasComponent: isSettings },
        ];

        const currentPath = window.location.pathname;

        const validRoute = routes.find(route => route.path === currentPath && route.hasComponent);

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
                            ) : null
                        )}

                        {!validRoute && <Route path="*" element={<Navigate to="/" replace />} />}
                    </Routes>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default Router;
