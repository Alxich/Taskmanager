import React from "react";
import {NavLink} from "react-router-dom";

class InteractiveLink extends React.Component {
    constructor(props) {
        super(props);

        this.href = this.props.href;
        this.target = this.props.target;
        this.title = this.props.title;
    }

    render() {
        return(
            <NavLink to={this.href} target={this.target} className="bar-item">{this.title}</NavLink>
        )
    }
}

export default InteractiveLink;