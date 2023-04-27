import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./components/HomePage/Main";

import "./App.css";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Info from "./components/Info";
import Details from "./components/HomePage/Details";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage/SearchPage";

class App extends Component {
    render() {
        return (
            <div className="App">
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
                            <>
                                <Header />
                                <SearchPage />
                            </>
                        } 
                    />
                </Routes>
            </div>
        );
    }
}

export default App;
