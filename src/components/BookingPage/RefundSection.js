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
                            <div>
                                <div>
                                    <p className="">
                                        Cancellation Penalty :
                                    </p>
                                    <p>Cancel Between (IST) :</p>
                                </div>
                                <div>
                                    <div>
                                        <span>
                                            ₹ 3,800
                                        </span>
                                        <span>
                                            ₹ 19,007
                                        </span>
                                    </div>
                                    <p ></p>
                                    <div>
                                        <div>
                                            <p>Now</p>
                                        </div>
                                        <div>
                                            <p>2 May</p>{" "}
                                            <p>
                                                17:00
                                            </p>
                                        </div>
                                        <div>
                                            <p>2 May</p>{" "}
                                            <p>
                                                19:00
                                            </p>
                                        </div>
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
