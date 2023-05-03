import React, { Component } from "react";

class ContactDetails extends Component {
    render() {
        return (
            <div>
                <small className="text-dark fw-bold">Booking details will be sent to</small>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label text-dark">
                            Country Code
                        </label>
                        <select id="inputState" className="form-select">
                            <option selected>India(91)</option>
                            <option>Australia(61)</option>
                            <option>Sri Lanka(94)</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="country" className="form-label text-dark">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            id="country"
                            className="form-control"
                            placeholder="Mobile Number"
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="email" className="form-label text-dark">
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            className="form-control"
                            placeholder="Email"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactDetails;
