import React, { Component } from "react";

class Airport extends Component {

    handleClick = () => {
        this.props.setAirport(this.props.data);
    }

    render() {
        return (
            <div className="airport" onClick={this.handleClick}>
                <div>
                    <div className="fw-bold text-dark">
                        {this.props.data.city}, {this.props.data.country}
                    </div>
                    <small>{this.props.data.airportName}</small>
                </div>

                <small>
                    {this.props.data.IATA}
                </small>
            </div>
        );
    }
}



export default Airport;
