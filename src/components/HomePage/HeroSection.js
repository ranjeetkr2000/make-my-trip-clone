import React, { Component } from "react";
import Navbar from "../Navbar";

class HeroSection extends Component {
    render() {
        return (
            <div className="hero_section">
                <Navbar />
                <div className="d-flex justify-content-between">
                    <form className="d-flex">
                        <div className="form-check me-4">
                            <input
                                type="radio"
                                id="one-way"
                                value="one-way"
                                name="trip"
                                className="form-check-input"
                            ></input>
                            <label
                                className="form-check-label"
                                htmlFor="one-way"
                            >
                                One Way
                            </label>
                        </div>
                        <div className="form-check me-4">
                            <input
                                type="radio"
                                id="round-trip"
                                value="round-trip"
                                name="trip"
                                className="form-check-input"
                            ></input>
                            <label
                                className="form-check-label"
                                htmlFor="round-trip"
                            >
                                Round Trip
                            </label>
                        </div>
                        <div className="form-check me-4">
                            <input
                                type="radio"
                                id="multi-city"
                                value="multi-city"
                                name="trip"
                                className="form-check-input"
                            ></input>
                            <label
                                className="form-check-label"
                                htmlFor="multi-city"
                            >
                                Multi City
                            </label>
                        </div>
                    </form>
                    <div>Book International & Domestic Flights</div>
                </div>

                <div className="d-flex search_div">
                    <div className="from">
                        <span>From</span>
                        <span>
                            <h4>Delhi</h4>
                            <small>DEL, Delhi Airport India</small>
                        </span>
                    </div>

                    <div className="to">
                        <span>To</span>
                        <span>
                            <h4>Bangaluru</h4>
                            <small>BLR, Bengaluru Airport India</small>
                        </span>
                    </div>
                    <div className="departure">
                        <span>Departure</span>
                        <span>
                            <h4>26 Apr'23</h4>
                            <small>Wednesday</small>
                        </span>
                    </div>
                    <div className="return">
                        <span>Return</span>
                        <span>
                            <h4>27 Apr'23</h4>
                            <small>Thursday</small>
                        </span>
                    </div>

                    <div className="travellers">
                        <span>Travellers & Class</span>
                        <span className="d-flex flex-column">
                            <h4>1 Traveller</h4>
                            <small>Economy/Premium Economy</small>
                            <small>Group Bookings Available!</small>
                        </span>
                    </div>
                </div>

                <div className="fare_search">
                    <div className="fare_types">
                        <div className="select_fare">Select A Fare Type:</div>

                        <div className="form-check">
                            <input
                                type="radio"
                                id="regular-fare"
                                value="regular"
                                name="fare-type"
                                className="form-check-input"
                            ></input>
                            <label
                                className="form-check-label"
                                htmlFor="regular-fare"
                            >
                                Regular Fares
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="armed-fare"
                                value="armed"
                                name="fare-type"
                                className="form-check-input"
                            ></input>
                            <label
                                className="form-check-label"
                                htmlFor="armed-fare"
                            >
                                Armed Forces Fares
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="student-fare"
                                value="student"
                                name="fare-type"
                                className="form-check-input"
                            ></input>
                            <label
                                className="form-check-label"
                                htmlFor="student-fare"
                            >
                                Student Fares
                            </label>
                        </div>

                        <div className="form-check">
                            <input
                                type="radio"
                                id="senior-fare"
                                value="senior"
                                name="fare-type"
                                className="form-check-input"
                            ></input>
                            <label
                                className="form-check-label"
                                htmlFor="senior-fare"
                            >
                                Senior Citizen Fares
                            </label>
                        </div>

                        <div className="form-check">
                            <input
                                type="radio"
                                id="doctor-fare"
                                value="doctor"
                                name="fare-type"
                                className="form-check-input"
                            ></input>
                            <label
                                className="form-check-label"
                                htmlFor="doctor-fare"
                            >
                                Doctor & Nurses Fares
                            </label>
                        </div>

                        <div className="form-check">
                            <input
                                type="radio"
                                id="double-fare"
                                value="double"
                                name="fare-type"
                                className="form-check-input"
                            ></input>
                            <label
                                className="form-check-label"
                                htmlFor="double-fare"
                            >
                                Double Seat Fares
                            </label>
                        </div>
                    </div>
                    <div className="trendings_div">
                        <div className="fw-bold">Trending Searches:</div>
                        <div className="trending">
                            Chennai <i className="fa-solid fa-arrow-right"></i>{" "}
                            Hyderabad
                        </div>
                        <div className="trending">
                            Mumbai <i className="fa-solid fa-arrow-right"></i>{" "}
                            Bangkok
                        </div>
                    </div>
                </div>

                <button className="search_btn">
                    SEARCH
                </button>
            </div>
        );
    }
}

export default HeroSection;