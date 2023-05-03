import React, { Component } from "react";
import { connect } from "react-redux";

import "./BookingPage.css";
import RefundSection from "./RefundSection";
import Header from "../Header";
import TravellerDetails from "./TravellerDetails";

class BookingPage extends Component {
    render() {
        const { name, from, to, duration, fare, arrTime, depTime, logo } =
            this.props.bookedFlight;

        let fareStr = fare? fare.toLocaleString("en-IN") : "";
        let tax = (18*fare)/100;

        return (
            <>
                <Header />
                <div className="booking_page">
                    <div className="booking_header">
                        <h4 className="text-white booking_heading">
                            Complete Your Booking
                        </h4>
                    </div>
                    <div className="booking_details_main">
                        <div className="booking_details_container">
                            <div className="booking_flight">
                                <div className="booking_flight_details">
                                    <div className="booking_city">
                                        <div className="d-flex align-items-center">
                                            <h5 className="fw-bold">{from}</h5>
                                            <i className="fa-solid fa-arrow-right mx-2"></i>
                                            <h5 className="fw-bold">{to}</h5>
                                        </div>

                                        <div className="cancel_fees">
                                            Cancellation fees apply
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <small className="me-1">Non stop . </small>
                                        <small>{duration}</small>
                                    </div>

                                    <div className="flight_name">
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="me-2"
                                        />
                                        <span>{name}</span>
                                    </div>

                                    <div className="book_flight_info">
                                        <div className="book_flight_info_left">
                                            <div className="time_details">
                                                <span className="fw-bold">
                                                    {depTime}
                                                </span>
                                                <i
                                                    className="fa-sharp fa-regular fa-circle"
                                                    style={{
                                                        fontSize: "0.7rem",
                                                        color: "grey",
                                                    }}
                                                />
                                                <span className="fw-bold">
                                                    {from} .
                                                </span>
                                                <span>
                                                    {
                                                        this.props.from
                                                            .airportName
                                                    }
                                                </span>
                                            </div>

                                            <div>
                                                <small>{duration}</small>
                                            </div>

                                            <div className="time_details">
                                                <span className="fw-bold">
                                                    {arrTime}
                                                </span>
                                                <i
                                                    className="fa-sharp fa-regular fa-circle"
                                                    style={{
                                                        fontSize: "0.7rem",
                                                        color: "grey",
                                                    }}
                                                />
                                                <span className="fw-bold">
                                                    {to} .{" "}
                                                </span>
                                                <span>
                                                    {this.props.to.airportName}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="book_flight_info_right">
                                            <ul className="baggage_details">
                                                <li>
                                                    <small>Baggage</small>
                                                    <small className="text-dark fw-bold">
                                                        ADULT
                                                    </small>
                                                </li>
                                                <li>
                                                    <small>Check-in</small>
                                                    <small className="text-dark fw-bold">
                                                        15 Kgs (1 piece only)
                                                    </small>
                                                </li>
                                                <li>
                                                    <small>Cabin</small>
                                                    <small className="text-dark fw-bold">
                                                        7 Kgs (1 piece only)
                                                    </small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <RefundSection
                                from={this.props.from}
                                to={this.props.to}
                                flightData={this.props.bookedFlight}
                            />
                            <TravellerDetails />
                        </div>

                        <div className="fare_summary">
                            <h5 className="fw-bold mb-2 text-dark">Fare Summary</h5>
                            <div className="fares_types">
                                <div className="fare_row">                              
                                    <span className="fare_header">
                                        <i className="fa-solid fa-circle-plus me-2"></i>
                                        Base Fare
                                    </span>                                
                                    <span className="">
                                        ₹ {fareStr}
                                    </span>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="fareTypeWrap">
                                <div className="fare_row">
                                    <span className="fare_header">
                                        <i className="fa-solid fa-circle-plus me-2"></i>
                                        Taxes and Surcharges
                                    </span>
                                    
                                    <span className="">
                                        ₹ {tax.toLocaleString("en-IN")}
                                    </span>
                                </div>
                            </div>
                            <p className="footer_hr mt-3"></p>
                            
                            <div className="fare_footer">
                                <div className="fare_row">
                                    <span className="fare_header">
                                        Total Amount
                                    </span>
                                    <span className="fw-bold">
                                        ₹{" "}
                                        {(fare + tax).toLocaleString("en-IN")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        from: state.searchReducer.from,
        to: state.searchReducer.to,
        bookedFlight: state.flightReducer.bookFlight,
    };
}

export default connect(mapStateToProps)(BookingPage);
