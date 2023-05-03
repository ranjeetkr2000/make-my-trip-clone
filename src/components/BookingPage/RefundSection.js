import React, { Component } from "react";

class RefundSection extends Component {
    render() {
        return (
            <section className="refund_section">
                <div className="refund_div">
                    <div className="refund_header">
                        <h5 className="text-dark fw-bold">
                            Cancellation Refund Policy
                        </h5>
                        
                        <span className="text-primary">
                            View Policy
                        </span>  
                    </div>
                    <div className="review_policy">
                        <div className="">
                            <span className="iata_name">
                                <div className="flight_name">
                                    <img src={this.props.flightData.logo} alt="logo"></img>
                                </div>
                                {this.props.from.IATA}-{this.props.to.IATA}
                            </span>
                            <div className="cancel_info">
                                <div className="cancel_info_left">
                                    <span className="cancel_tag">
                                        Cancellation Penalty :
                                    </span>
                                    <span className="cancel_tag">
                                        Cancel Between (IST) :
                                    </span>
                                </div>
                                <div className="cancel_info_right">
                                    <div className="cancel_price_info">
                                        <span>
                                            ₹ {(this.props.flightData.fare/3)?.toLocaleString("en-IN")}
                                        </span>
                                        <span>
                                            ₹ {this.props.flightData.fare?.toLocaleString("en-IN")}
                                        </span>
                                    </div>
                                    <div className="cancel_grad_line_main">
                                        <p className="cancel_grad_line"></p>
                                        <div className="center_dash"></div>
                                    </div>
                                    <div className="cancel_time_info">
                                        <small className="fw-bold">
                                            Now
                                        </small>
                                        <small className="fw-bold">
                                                {this.props.flightData.depTime}
                                            
                                        </small>
                                        <small className="fw-bold">
                                                {this.props.flightData.arrTime}
                                            
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default RefundSection;
