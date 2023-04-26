import React, { Component } from "react";
import Header from "../Header";

class MainHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showHeader: false,
        };
    }

    handleScroll = () => {
        if (window.scrollY >= 100) {
            this.setState({
                showHeader: true,
            });
        } else {
            this.setState({
                showHeader: false,
            });
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    render() {
        return (
            <div className={this.state.showHeader ? "show_header" : "dis_none"}>
                <Header />
            </div>
        );
    }
}

export default MainHeader;
