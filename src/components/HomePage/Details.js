import React, { Component } from "react";

class Details extends Component {
    render() {
        return (
            <div className="details">
                <div className="detail">
                    <img
                        src="https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png"
                        alt="plane"
                    ></img>
                    <div>
                        <div>Planning to book an international flight?</div>
                        <span>Check Travel Guidelines</span>
                    </div>
                </div>

                <div className="detail">
                    <img
                        src="https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png"
                        alt="language"
                    ></img>
                    <div>
                        <div>We are now available in Hindi</div>
                        <span>Change Language</span>
                    </div>
                </div>

                <div className="detail">
                    <img
                        src="https://promos.makemytrip.com/notification/xhdpi/web-check-in-116x116-23062020.png"
                        alt="checkin"
                    ></img>
                    <div>
                        <div>Complete your web check-in on MakeMyTrip in easy steps</div>
                        <span>Know More</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;
