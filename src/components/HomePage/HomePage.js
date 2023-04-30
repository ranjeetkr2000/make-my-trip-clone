import React, { Component } from "react";
import Main from "./Main";
import Details from "./Details";
import Info from "./Info";
import Features from "./Features";
import Footer from "../Footer";
import Carousel from "./Carousel";

import "./HomePage.css";

class HomePage extends Component {
    render() {
        return (
            <>
                <Main />
                <Details />
                <Carousel />
                <Info />
                <Features />
                <Footer />
            </>
        );
    }
}

export default HomePage;
