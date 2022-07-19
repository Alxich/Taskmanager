import React from "react";
import InteractiveLink from "./InteractiveLink/InteractiveLink";

class InteractiveBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.state;
    }

    render() {

        const barItem = this.state.links
            .map( (item, i) => <InteractiveLink href={item.link} target={item.target} title={item.title} key={i} /> )

        return(
            <div id="interactive-bar">
                {barItem}
            </div>
        )
    }
}

export default InteractiveBar;