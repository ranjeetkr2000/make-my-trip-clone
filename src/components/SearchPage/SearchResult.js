import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Flight from "./Flight";
import Loader from "../Loader/Loader";

import { INIT_FLIGHTS } from "../../redux/actionTypes";
import Filters from "./Filters";
import FetchError from "./FetchError";

class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.API_STATES = {
            LOADING: "loading",
            LOADED: "loaded",
            ERROR: "error",
        };

        this.state = {
            status: "",
            errorMsg: "",
        };
    }

    fetchFlights = (url) => {
        this.setState(
            (prevState) => {
                return {
                    ...prevState,
                    status: this.API_STATES.LOADING,
                };
            },
            () => {
                axios
                    .get(url)
                    .then((response) => {
                        this.props.initFlights(response.data);

                        this.setState({
                            status: this.API_STATES.LOADED,
                            errorMsg: "",
                        });
                    })
                    .catch((err) => {
                        console.error("error:", err);
                        this.setState({
                            status: this.API_STATES.ERROR,
                            errorMsg:
                                "An API error occurred, please try after some time.",
                        });
                    });
            }
        );
    };

    componentDidMount() {
        this.fetchFlights("https://flights-api-ook1.onrender.com/flights");
    }

    render() {
        let flightsData = this.props.allFlights.filter((currFlight) => {
            return (
                currFlight.from === this.props.fromCity &&
                currFlight.to === this.props.toCity
            );
        });

        let filteredFlightsData = flightsData.filter((currFlight) => {
            if (this.props.filters.length === 0) {
                return true;
            } else {
                return this.props.filters.includes(currFlight.name);
            }
        });

        return (
            <>
                {this.state.status === this.API_STATES.LOADING && (
                    <div className="loader d-flex align-self-center flex-column align-items-center">
                        <Loader />
                        <h4 className="text-dark">
                            Hold on, we are fetching flights for you
                        </h4>
                    </div>
                )}

                {this.state.status === this.API_STATES.ERROR && (
                    <FetchError />
                )}

                {this.state.status === this.API_STATES.LOADED &&
                    !this.state.errorMsg && (
                        <>
                            <Filters />
                            <div className="search_result">
                                <h4>
                                    Flights from {this.props.fromCity} to{" "}
                                    {this.props.toCity}
                                </h4>
                                {filteredFlightsData.length !== 0 ? (
                                    filteredFlightsData.map((flight) => {
                                        return (
                                            <Flight
                                                key={flight.id}
                                                flightData={flight}
                                            />
                                        );
                                    })
                                ) : (
                                    <h4 className="text-dark">No flights found</h4>
                                )}
                            </div>
                        </>
                    )}
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        fromCity: state.searchReducer.from.city,
        toCity: state.searchReducer.to.city,
        allFlights: state.flightReducer.allFlights,
        filters: state.flightReducer.filters,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        initFlights: (flightsData) => {
            dispatch({
                type: INIT_FLIGHTS,
                payload: flightsData,
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
