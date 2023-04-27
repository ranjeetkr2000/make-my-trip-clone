import React, { Component } from "react";

import { connect } from "react-redux";

import SearchBox from "../SearchBox";
import { UPDATE_FROM_LOCATION, UPDATE_TO_LOCATION } from "../../redux/actionTypes";

class FromTo extends Component {

    constructor(props){
        super(props);

        this.state = {
            showFromSearch : false,
            showToSearch: false,
        }
    }

    handleFromClick = (event) => {
        event.stopPropagation();
        this.setState((prevState) => {
            return {
                ...prevState,
                showToSearch: false,
                showFromSearch : !prevState.showFromSearch,
            }
        })
    }

    handleToClick = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                showFromSearch: false,
                showToSearch : !prevState.showToSearch,
            }
        })
    }

    setAirport = (data) => {
        if(this.state.showFromSearch){
            this.props.updateFrom(data);
        }
        if(this.state.showToSearch){
            this.props.updateTo(data);
        }
    }

    render() {
        return (
            <div className="d-flex search_div">
                <div className="from" onClick={this.handleFromClick}>
                    <span>From</span>
                    <span>
                        <h4>{this.props.from.city}</h4>
                        <small>{this.props.from.IATA}, {this.props.from.airportName}</small>
                    </span>
                    {
                        this.state.showFromSearch && <SearchBox place={"From"} setAirport={this.setAirport}/>
                    }
                </div>

                <div className="to" onClick={this.handleToClick}>
                    <span>To</span>
                    <span>
                        <h4>{this.props.to.city}</h4>
                        <small>{this.props.to.IATA}, {this.props.to.airportName}</small>
                    </span>
                    {
                        this.state.showToSearch && <SearchBox place={"To"} setAirport={this.setAirport}/>
                    }
                </div>
                <div className="departure">
                    <span>Departure</span>
                    <input 
                        type="date"
                        defaultValue="2023-04-27"
                    />
                </div>
                <div className="return">
                    <span>Return</span>
                    <input 
                        type="date"
                    />
                </div>

                <div className="travellers">
                    <span>Travellers & Class</span>
                    <span className="d-flex flex-column">
                        <h4>1 Traveller</h4>
                        <small>Economy/Premium Economy</small>
                        <small className="text-warning">Group Bookings Available!</small>
                    </span>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        from: state.searchReducer.from,
        to: state.searchReducer.to,
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateFrom : (data) => {
            dispatch({
                type: UPDATE_FROM_LOCATION,
                payload : data,
            })
        },
        updateTo : (data) => {
            dispatch({
                type: UPDATE_TO_LOCATION,
                payload: data,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FromTo);
