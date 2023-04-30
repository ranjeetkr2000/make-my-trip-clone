import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../../images/mmtLogoWhite.png";
import discountIcon from "../../images/discount.png";
import briefCase from "../../images/briefcase.png";
import tripsImg from "../../images/trips.png";

import MainHeader from "./MainHeader";
import indiaFlag from "../../images/india.png";
import HeroSection from "./HeroSection";
import LoginPage from "../Login/LoginPage";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <MainHeader />
                <header className="hero_header">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="d-flex">
                        <img
                            src={discountIcon}
                            alt="icon"
                            className="icon me-2"
                        />
                        <div className="d-flex flex-column me-3">
                            <span className="fw-bold">Super Offers</span>
                            <small>Explore great deals and offers</small>
                        </div>

                        <img src={briefCase} alt="icon" className="icon me-2" />
                        <div className="d-flex flex-column me-3">
                            <span className="fw-bold">Introducing myBiz</span>
                            <small>Business Travel Solution</small>
                        </div>

                        <img src={tripsImg} alt="icon" className="icon me-2" />
                        <div className="d-flex flex-column me-3">
                            <span className="fw-bold">My Trips</span>
                            <small>Manage Your Bookings</small>
                        </div>
                        <>
                            {
                                this.props.user.name?
                                <span className="user_details">Hi, {this.props.user.name}</span>
                                :
                                <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
                                    <small>Login or Create Account</small>
                                </button>
                            }
                        </>
                        <LoginPage />
                        <div className="d-flex align-items-center btn btn-secondary text-white">
                            <span>
                                <img
                                    src={indiaFlag}
                                    alt="india"
                                    className="flag"
                                />{" "}
                            </span>
                            <small> IN | ENG | INR</small>
                        </div>
                    </div>
                </header>
                <HeroSection />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user : state.userReducer.userData,
    }
}

export default connect(mapStateToProps)(Main);
