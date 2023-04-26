import React, { Component } from "react";
import SearchBox from "../SearchBox";

class FromTo extends Component {

    constructor(props){
        super(props);

        this.state = {
            showFromSearch : false,
            showToSearch: false,
            airport: {
                from:{
                    city: "Delhi",
                    airportName: "Delhi Airport India",
                    IATA: "DEL"
                },
                to: {
                    city: "Bengaluru",
                    airportName: "Bengaluru Airport India",
                    IATA: "BLR"
                }
            },
        }
    }

    handleFromClick = () => {
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

    getAirport = (airportData) => {
        const {city, airportName, IATA} = airportData;
        if(this.state.showFromSearch){
            this.setState((prevState) => {
                return {
                    ...prevState,
                    airport: {
                        ...prevState.airport,
                        from: {
                            city,
                            airportName,
                            IATA,
                        }
                    }
                }
            })
        }
        if(this.state.showToSearch){
            const {city, airportName, IATA} = airportData;
            this.setState((prevState) => {
                return {
                    ...prevState,
                    airport: {
                        ...prevState.airport,
                        to: {
                            city,
                            airportName,
                            IATA,
                        }
                    }
                }
            })
        }
    }

    render() {
        return (
            <div className="d-flex search_div">
                <div className="from" onClick={this.handleFromClick}>
                    <span>From</span>
                    <span>
                        <h4>{this.state.airport.from.city}</h4>
                        <small>{this.state.airport.from.IATA}, {this.state.airport.from.airportName}</small>
                    </span>
                    {
                        this.state.showFromSearch && <SearchBox place={"From"} getAirport={this.getAirport}/>
                    }
                </div>

                <div className="to" onClick={this.handleToClick}>
                    <span>To</span>
                    <span>
                        <h4>{this.state.airport.to.city}</h4>
                        <small>{this.state.airport.to.IATA}, {this.state.airport.to.airportName}</small>
                    </span>
                    {
                        this.state.showToSearch && <SearchBox place={"To"} getAirport={this.getAirport}/>
                    }
                </div>
                <div className="departure">
                    <span>Departure</span>
                    <input type="date" />
                </div>
                <div className="return">
                    <span>Return</span>
                    <input type="date" />
                </div>

                <div className="travellers">
                    <span>Travellers & Class</span>
                    <span className="d-flex flex-column">
                        <h4>1 Traveller</h4>
                        <small>Economy/Premium Economy</small>
                        <small>Group Bookings Available!</small>
                    </span>
                </div>
            </div>
        );
    }
}

export default FromTo;
