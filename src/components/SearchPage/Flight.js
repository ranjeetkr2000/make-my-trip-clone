import React, { Component } from "react";

class Flight extends Component {
    render() {
        const { name, arrTime, depTime, from, to, duration, fare, logo } =
            this.props.flightData;

        return (
            <div className="flight_info">
                <div className="flight_name">
                    <img src={logo} alt={"logo"} className="me-1"></img>
                    {name}
                </div>

                <div>
                    <div className="fw-bold">{depTime}</div>
                    <div>{from}</div>
                </div>

                <div>{duration}</div>

                <div>
                    <div className="fw-bold">{arrTime}</div>
                    <div>{to}</div>
                </div>

                <div className="fw-bold">
                    <span className="me-2">₹ {fare.toLocaleString("en-IN")}</span>
                    <button className="book_now">
                        Book Now
                    </button>
                </div>    
            </div>
        );
    }
}

export default Flight;
