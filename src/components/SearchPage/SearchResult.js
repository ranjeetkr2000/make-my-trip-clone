import React, { Component } from "react";
import flightsData from "../../data/flights.json";
import { connect } from "react-redux";
import Flight from "./Flight";

class SearchResult extends Component {
    render() {
        return (
            <div className="search_result">
                <h4>Flights from {this.props.fromCity} to {this.props.toCity}</h4>
                {flightsData.filter((currFlight) => {
                    return (
                        currFlight.from === this.props.fromCity &&
                        currFlight.to === this.props.toCity
                    );
                }).map((flight) => {
                    console.log(flight);
                    return (
                        <Flight key={flight.id} flightData={flight}/>
                    )
                })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        fromCity: state.searchReducer.from.city,
        toCity: state.searchReducer.to.city,
    };
}

export default connect(mapStateToProps)(SearchResult);
