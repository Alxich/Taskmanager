import React from "react";
import HeaderItem from "./HeaderItem/HeaderItem";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.state;
        this.logo = this.state.logo;
        this.links = this.state.links;
    }

    render() {

        const headerItem = this.links
            .map( (item, i) => <HeaderItem title={item.title} link={item.link} target={item.target} key={i} /> )

        return(
            <header id="masthead">
                <div className="container">
                    <div className="logo">
                        <img src={this.logo.src} alt={this.logo.alt} />
                    </div>
                    <div className="navigation">
                        {headerItem}
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;