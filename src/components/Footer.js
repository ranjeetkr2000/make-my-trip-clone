import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="social_media">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="copyright">
                    <div>
                        © 2023 MAKEMYTRIP PVT. LTD.
                    </div>
                    <div>
                        Country India USA UAE
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
