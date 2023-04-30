import React, { useState } from "react";
import Navbar from "../Navbar";
import FromTo from "./FromTo";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

function HeroSection(props) {

    const [isSameCity, setIsSameCity] = useState(false);
    const navigate = useNavigate();
    const handleSearchClick = (event) => {

        if(props.fromCity === props.toCity){
            setIsSameCity(true);
        }
        else {
            setIsSameCity(false);
            navigate("/search");
        }
    };

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
                            defaultChecked
                        ></input>
                        <label className="form-check-label" htmlFor="one-way">
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

            <FromTo isSameCity={isSameCity}/>

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
                            defaultChecked
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

            <button className="search_btn" onClick={handleSearchClick}>
                SEARCH
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        fromCity: state.searchReducer.from.city,
        toCity: state.searchReducer.to.city,
    }
}

export default connect(mapStateToProps)(HeroSection);
