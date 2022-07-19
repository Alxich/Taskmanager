import React from "react";

class HeaderItem extends React.Component {
    constructor(props) {
        super(props);

        this.link = this.props.link;
        this.target = this.props.target;
        this.title = this.props.title;
    }

    render() {
        return(
            <a className="nav-item" href={this.link} target={this.target}>
                {this.title}
            </a>
        )
    }
}

export default HeaderItem;