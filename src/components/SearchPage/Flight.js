import React, { Component } from "react";

class Flight extends Component {
    render() {
        const { name, arrTime, depTime, from, to, time, fare } =
            this.props.flightData;

        return (
            <div className="flight_info">
                <div>{name}</div>

                <div>
                    <div>{depTime}</div>
                    <div>{from}</div>
                </div>

                <div>{time}</div>

                <div>
                    <div>{arrTime}</div>
                    <div>{to}</div>
                </div>

                <div>₹ {fare}</div>
            </div>
        );
    }
}

export default Flight;
