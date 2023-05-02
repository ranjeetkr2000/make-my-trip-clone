import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_FILTER, REMOVE_FILTER } from "../../redux/actionTypes";

class Filters extends Component {

    handleChange = (event) => {
        if(event.target.checked){
            this.props.addFilter(event.target.value);
        }
        else{
            this.props.removeFilter(event.target.value);
        }
    }

    render() {
        return (
            <div className="filters">
                <div>
                    <h6 className="fw-bold">Popular Filters</h6>
                </div>
                <div className="filter">
                    <div className="my-2">
                        <input
                            type="checkbox"
                            id="AirAsia"
                            className="me-2"
                            value="AirAsia"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="AirAsia">Air Asia</label>
                    </div>

                    <div className="my-2">
                        <input
                            type="checkbox"
                            id="Air-India"
                            className="me-2"
                            value="Air India"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="Air-India">Air India</label>
                    </div>

                    <div className="my-2">
                        <input
                            type="checkbox"
                            id="Go-First"
                            className="me-2"
                            value="Go First"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="Go-First">Go First</label>
                    </div>

                    <div className="my-2">
                        <input
                            type="checkbox"
                            id="IndiGo"
                            className="me-2"
                            value="IndiGo"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="IndiGo">Indigo</label>
                    </div>

                    <div className="my-2">
                        <input
                            type="checkbox"
                            id="Vistara"
                            className="me-2"
                            value="Vistara"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="Vistara">Vistara</label>
                    </div>
                </div>

                <div className="price_slider">
                    <input type="range" min="6000" max="15000" defaultValue={10500} className="slider" id="price-range" />
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        addFilter: (filterToAdd) => {
            dispatch({
                type: ADD_FILTER,
                payload: filterToAdd,
            })
        },
        removeFilter: (filterToRemove) => {
            dispatch({
                type: REMOVE_FILTER,
                payload: filterToRemove,
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Filters);
