import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import middleware from "./middleware";

class Router extends Component {

    state = {  
        isHome: false,
        isAbout: false,
        isContact: false
    }

    componentDidMount() {
        const permissions = middleware.isHasPermission(this.props.permissions);
        this.setState(permissions);
    }

    render() {
        const { isHome, isAbout, isContact } = this.state;

        const routes = [
          { path: '/', component: Home, hasComponent: isHome },
          { path: '/about', component: About, hasComponent: isAbout },
          { path: '/contact', component: Contact, hasComponent: isContact },
          { path: '*', hasComponent: false } // Catch-all for undefined routes
        ];

        return (
            <BrowserRouter>
                <Layout isHome={isHome} isAbout={isAbout} isContact={isContact}>
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
