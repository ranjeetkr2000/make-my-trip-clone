import React, { Component } from "react";
import validator from "validator";

import "./LoginPage.css";
import googleIcon from "../../images/google.png";
import { connect } from "react-redux";

import { LOGIN } from "../../redux/actionTypes";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileNumber: "",
            errorMsg: "",
            formValid: false,
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.validate){
            this.props.updateUser({
                name: "Traveller",
                mobile: this.state.mobileNumber,
            });
        } 
    };

    handleChange = (event) => {
        let number = event.target.value;
        this.setState((prevState) => {
            return {
                ...prevState,
                mobileNumber: number,
                formValid: false,
            };
        }, this.validate);

    };

    validate = () => {
        if (
            !validator.isInt(this.state.mobileNumber.trim()) ||
            this.state.mobileNumber.trim().length !== 10
        ) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    errorMsg: "Please Enter Valid 10 Digit Mobile Number",
                    formValid: false,
                };
            });
            return false;

        } else {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    errorMsg: "",
                    formValid: true,
                };
            });
            console.log("yes");
            return true;
        }
    }

    render() {
        return (
            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
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
                                    <div>MYBIZ ACCOUNT</div>
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
                                            value={this.state.mobileNumber}
                                            onChange={this.handleChange}
                                        />
                                        <small className="text-danger">
                                            {this.state.errorMsg}
                                        </small>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        data-bs-dismiss={
                                            this.state.formValid ? "modal" : ""
                                        }
                                        onClick={this.handleSubmit}
                                    >
                                        CONTINUE
                                    </button>

                                    <div className="break">
                                        <span></span>
                                        <div>Or Login/Signup With</div>
                                        <span></span>
                                    </div>
                                    <div className="google_icon">
                                        <img
                                            src={googleIcon}
                                            alt="google"
                                        ></img>
                                    </div>
                                    <div className="login_tos">
                                        By proceeding, you agree to MakeMyTrip's
                                        Privacy Policy, User Agreement and T&Cs
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

function mapDispatchToProps(dispatch) {
    return {
        updateUser: (data) => {
            dispatch({
                type: LOGIN,
                payload: data,
            });
        },
    };
}

export default connect(null, mapDispatchToProps)(LoginPage);
