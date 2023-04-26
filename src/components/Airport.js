import React, { Component } from "react";

import {connect} from "react-redux";

class Airport extends Component {

    handleClick = () => {
        this.props.setAirport(this.props.data);
    }

    render() {
        return (
            <div className="airport" onClick={this.handleClick}>
                <div>
                    <div className="fw-bold">
                        {this.props.data.city}, {this.props.data.country}
                    </div>
                    <div>{this.props.data.airportName}</div>
                </div>

                <div>
                    {this.props.data.IATA}
                </div>
            </div>
        );
    }
}



export default Airport;
