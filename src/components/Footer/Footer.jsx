import React from "react";
import FooterItem from "./FooterItem/FooterItem";

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.state;
        this.dev = this.state.developer;
    }

    render() {

        let socials = this.state.socials
            .map( (item, i) => <FooterItem url={item.url} icon={item.icon} key={i} /> );

        return(
            <footer id="colophon">
                <div className="container">
                    <div className="phrase">
                        <p>{this.state.phrase}</p>
                    </div>
                    <div className="developer">
                        <div className="design">
                            <p>{this.dev.title}<span className="verified"><img src={this.dev.image.src} alt={this.dev.image.alt} /></span></p>
                        </div>
                        <div className="socials">
                           {socials}
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;