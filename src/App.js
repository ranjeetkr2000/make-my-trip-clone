import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage/SearchPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} 
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
