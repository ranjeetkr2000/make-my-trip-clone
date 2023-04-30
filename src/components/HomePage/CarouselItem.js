import React, { Component } from "react";

class CarouselItem extends Component {
    render() {
        return (
                <div className="carousel_item">
                    <img className="carousel_item_img" src={this.props.item.image} alt="img"/>
                    <div className="carousel_item_info">
                        <div className="carousel_item_top">Top {this.props.item.position}</div>
                        <h6>{this.props.item.title}</h6>
                    </div>
                </div>
        )
    }
}

export default CarouselItem;
