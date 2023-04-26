import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Main";
import Details from "./Details";
import Info from "../Info";
import Features from "../Features";
import Footer from "../Footer";
import Header from "../Header";

class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Main />
                            <Details />
                            <Info />
                            <Features />
                            <Footer />
                        </>
                        } 
                    />

                    <Route path="search" element={
                        
                            <Header />
                        
                        } 
                    />
                </Routes>
            </div>
        );
    }
}

export default HomePage;
