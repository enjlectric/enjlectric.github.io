import React from 'react';
import { withRouter } from 'react-router';
import highlightImage from "../images/thumbnails_highlight.png";

class FancyImageButton extends React.Component {
    static defaultProps = {
        imgName: "thumbnails_none.png",
        buttonHoverName: "No name",
        linkName: "",
        onClick: function() {}
    }

    static img;

    constructor(props) {
        super(props);

        this.img = require("../images/" + props.imgName);
    }

    referLink(event) {
        event.preventDefault();

        let params = window.location.search.split('?')[1];
        if (params != null) {
            params = "?" + params;
        } else {
            params = ""
        }
        this.props.history.push('/site/' + this.props.linkName + params)

        this.props.onClick();
    }

    render() {
        return (
        <div className="imageHoverContainer">
            <div className="imageHover">
                <div className="absoluteWrapper">
                    <img className="imageHoverImage" src={this.img.default} alt={this.props.imgName}/>
                </div>
                <div className="absoluteWrapper">
                    <a href={this.props.linkname} onClick={this.referLink.bind(this)} style={{margin: "0px", padding: "0px"}}>
                        <img className="imageHoverImageOverlay" src={highlightImage} alt={this.props.imgName} title={this.props.imgName}/>
                    </a>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(FancyImageButton);