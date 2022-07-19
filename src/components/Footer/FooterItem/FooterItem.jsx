import React from "react";

class FooterItem extends React.Component {
    constructor(props) {
        super(props);

        this.icon = this.props.icon;
        this.url = this.props.url;
    }

    render() {
        return(
            <a href={this.url} target="_blank">
                <i className={this.icon}></i>
            </a>
        )
    }
}

export default FooterItem;