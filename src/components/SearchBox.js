import React, { Component } from "react";

import Airport from "./Airport";

import airports from "../data/airports.json";

class SearchBox extends Component {

     constructor(props){
        super(props);

        this.state = {
            airports : airports,
        }
     }

    handleClick = (event) =>{
        event.preventDefault();
        event.stopPropagation();
    }

    handleChange = (event) => {
        let seachStr = event.target.value;
        airports.sort((airport1, airport2) => {
            if(airport1.city.toLowerCase().includes(seachStr)){
                return -1;
            }
            else if(airport2.city.toLowerCase().includes(seachStr)){
                return 1;
            }
            else {
                return 0;
            }
        });

        this.setState({
            airports: [...airports],
        });
    }

    render() {
        return (
            <div className="search_box">
                <input
                    type="text"
                    className="form-control search_input"
                    placeholder={this.props.place}
                    onClick={this.handleClick}
                    onChange={this.handleChange}
                />
                <h6 className="m-2 text-dark"><small>POPULAR AIRPORTS</small></h6>
                <div>
                    {
                        this.state.airports.map((currAirport) => {
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
