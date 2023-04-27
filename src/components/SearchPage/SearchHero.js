import React, { Component } from "react";
import { connect } from "react-redux";

class SearchHero extends Component {
    render() {
        return (
            <div className="search_hero">
                <div className="search_main">
                    <div className="divs">
                        <div className="text-primary">TRIP TYPE</div>
                        <div>One Way</div>
                    </div>

                    <div className="divs">
                        <div className="text-primary">FROM</div>
                        <div>{this.props.from.city}</div>
                    </div>
                    <i className="fa-solid fa-arrow-right-arrow-left text-primary"></i>
                    <div className="divs">
                        <div className="text-primary">TO</div>
                        <div>{this.props.to.city}</div>
                    </div>

                    <div className="divs">
                        <div className="text-primary">DEPART</div>
                        <div>Thu, Apr 27, 2023</div>
                    </div>
                    <div className="divs">
                        <div className="text-primary">RETURN</div>
                        <div>Select Return</div>
                    </div>
                    <div className="divs">
                        <div className="text-primary">PASSENGERS & CLASS</div>
                        <div>1 Adult, Economy</div>
                    </div>
                    <button className="search_btn">SEARCH</button>
                </div>

                <div className="fare_types">
                    <div className="fare_type">Fare Type:</div>

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
                            Regular
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
                            Armed Forces
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
                            Student
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
                            Senior Citizen
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
                            Doctor & Nurses
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
                            Double Seat
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        from: state.searchReducer.from,
        to: state.searchReducer.to,
    };
}

export default connect(mapStateToProps)(SearchHero);
