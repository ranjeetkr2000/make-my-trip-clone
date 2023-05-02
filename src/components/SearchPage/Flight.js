import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BOOK_FLIGHT } from "../../redux/actionTypes";

class Flight extends Component {

    handleClick = () => {
        this.props.addBookedFlight(this.props.flightData);
    }

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
                    <Link to="/book" onClick={this.handleClick}>
                        <button className="book_now">
                            Book Now
                        </button>
                    </Link>
                </div>    
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        addBookedFlight : (data) => {
            dispatch({
                type: BOOK_FLIGHT,
                payload: data,
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Flight);
