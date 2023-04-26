import React, { Component } from "react";

import Main from "./components/HomePage/Main";

import "./App.css";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Info from "./components/Info";
import Details from "./components/HomePage/Details";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Main />
                <Details />
                <Info />
                <Features />
                <Footer />
            </div>
        );
    }
}

export default App;
