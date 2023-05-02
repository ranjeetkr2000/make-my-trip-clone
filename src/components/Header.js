import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

import logo from "../images/mmtLogoDark.png";
import indiaFlag from "../images/india.png";

import "./Header.css";
import Navbar from "./Navbar";
import LoginPage from "./Login/LoginPage";

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-lg bg-white d-flex justify-content-evenly">
                <div className="navbar-brand">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <Navbar />

                <div className="header-end d-flex align-items-center">
                    <div className="d-flex flex-column fw-bold">
                        {
                            this.props.user.name? 
                            <span className="user_details">Hi, {this.props.user.name}</span>
                            :
                            <div className="header_login_btn" data-bs-toggle="modal" data-bs-target="#loginModal">
                                <span>Login or</span>
                                <span>Create Account</span>
                            </div>
                        }
                    </div>
                    <LoginPage />
                    <div className="dropdown d-flex flex-column">
                        <span>Country</span>
                        <div
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <span className="fw-bold">
                                <img
                                    src={indiaFlag}
                                    alt="india"
                                    className="icon"
                                />
                                <small> India</small>
                            </span>
                        </div>

                        <ul className="dropdown-menu">
                            <li className="dropdown-item">India</li>
                            <li className="dropdown-item">UAE</li>
                            <li className="dropdown-item">USA</li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column dropdown">
                        <span>Language</span>
                        <div
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <small className="fw-bold">ENG</small>
                        </div>

                        <ul className="dropdown-menu">
                            <li className="dropdown-item">English</li>
                            <li className="dropdown-item">Hindi</li>
                            <li className="dropdown-item">Urdu</li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state){
    return {
        user : state.userReducer.userData,
    }
}

export default connect(mapStateToProps)(Header);
