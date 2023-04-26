import React, { Component } from "react";

import Airport from "./Airport";

import airports from "../data/airports.json";

class SearchBox extends Component {
    render() {
        return (
            <div className="search_box">
                {/* <input
                    type="text"
                    className="form-control search_input"
                    placeholder={this.props.place}
                /> */}
                <h6><small>POPULAR AIRPORTS</small></h6>
                <div>
                    {
                        airports.map((currAirport) => {
                            return (
                                <Airport
                                    data={currAirport}
                                    key={currAirport.id}
                                    setAirport={this.props.setAirport}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default SearchBox;
