import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item d-flex align-items-center flex-column me-4">
                        <i className="fa-solid fa-plane-up"></i>
                        <span className="mt-1">Flights</span>
                    </li>
                    <li className="nav-item d-flex align-items-center flex-column me-4">
                        <i className="fa-solid fa-hotel"></i>
                        <span className="mt-1">Hotels</span>
                    </li>

                    <li className="nav-item d-flex align-items-center flex-column me-4">
                        <i className="fa-solid fa-house"></i>
                        <span className="mt-1">Home Stays</span>
                    </li>

                    <li className="nav-item d-flex align-items-center flex-column me-4">
                        <i className="fa-solid fa-cloud"></i>
                        <span className="mt-1">Holiday Packages</span>
                    </li>

                    <li className="nav-item d-flex align-items-center flex-column me-4">
                        <i className="fa-solid fa-train"></i>
                        <span className="mt-1">Trains</span>
                    </li>

                    <li className="nav-item d-flex align-items-center flex-column me-4">
                        <i className="fa-solid fa-bus-simple"></i>
                        <span className="mt-1">Buses</span>
                    </li>

                    <li className="nav-item d-flex align-items-center flex-column me-4">
                        <i className="fa-solid fa-car"></i>
                        <span className="mt-1">Cabs</span>
                    </li>

                    <li className="nav-item d-flex align-items-center flex-column me-4">
                        <i className="fa-solid fa-plane"></i>
                        <span className="mt-1">Charter Flights</span>
                    </li>
                    <li className="nav-item d-flex align-items-center flex-column me-4">
                        <i className="fa-solid fa-person-skiing-nordic"></i>
                        <span className="mt-1">Activities</span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
