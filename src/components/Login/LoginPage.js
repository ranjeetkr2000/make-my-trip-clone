import React, { Component } from "react";

import "./LoginPage.css";
import googleIcon from "../../images/google.png";

class LoginPage extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    render() {
        return (
            <div
                className="modal fade"
                id="loginModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        
                        <div className="modal-body">
                            <div className="login_div">
                                <div className="login_title">
                                    <div className="account">
                                        PERSONAL ACCOUNT
                                    </div>
                                    <div>
                                        MYBIZ ACCOUNT
                                    </div>
                                </div>
                                <form className="login_form">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="mobile"
                                            className="form-label"
                                        >
                                            Mobile Number
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="mobile"
                                            placeholder="Enter Mobile Number"
                                        />
                                    </div>
                                   
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={this.handleSubmit}
                                    >
                                        CONTINUE
                                    </button>

                                    <div className="break">
                                        <span></span>
                                        <div>
                                            Or Login/Signup With
                                        </div>
                                        <span></span>
                                    </div>
                                    <div className="google_icon">
                                        <img src={googleIcon} alt="google"></img>
                                    </div>
                                    <div className="login_tos">
                                        By proceeding, you agree to MakeMyTrip's  Privacy Policy, User Agreement and T&Cs
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
