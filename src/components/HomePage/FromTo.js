import React, { Component } from "react";
import SearchBox from "../SearchBox";

class FromTo extends Component {

    constructor(props){
        super(props);

        this.state = {
            showFromSearch : false,
            showToSearch: false,
            airport: {},
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

    getAirport = () => {
        
    }

    render() {
        return (
            <div className="d-flex search_div">
                <div className="from" onClick={this.handleFromClick}>
                    <span>From</span>
                    <span>
                        <h4>Delhi</h4>
                        <small>DEL, Delhi Airport India</small>
                    </span>
                    {
                        this.state.showFromSearch && <SearchBox place={"From"} getAirport={this.getAirport}/>
                    }
                </div>

                <div className="to" onClick={this.handleToClick}>
                    <span>To</span>
                    <span>
                        <h4>Bangaluru</h4>
                        <small>BLR, Bengaluru Airport India</small>
                    </span>
                    {
                        this.state.showToSearch && <SearchBox place={"To"} getAirport={this.getAirport}/>
                    }
                </div>
                <div className="departure">
                    <span>Departure</span>
                    <span>
                        <h4>26 Apr'23</h4>
                        <small>Wednesday</small>
                    </span>
                </div>
                <div className="return">
                    <span>Return</span>
                    <span>
                        <h4>27 Apr'23</h4>
                        <small>Thursday</small>
                    </span>
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
