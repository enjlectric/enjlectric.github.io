import React from 'react';
import { withRouter } from 'react-router';
import highlightImage from "../images/thumbnails_highlight.png";
import "./tightFancyImageButton.css";

class FancyImageButton extends React.Component {
    static defaultProps = {
        element: null
    }

    static img;

    constructor(props) {
        super(props);

        this.img = require("../images/" + (props.element.imgName ?? "thumbnails_none.png"));
    }

    render() {
        return (
        <div className="imageHoverContainerT">
            <div className="imageHoverT">
                <div className="absoluteWrapper">
                    <img className="imageHoverImageT" src={this.img.default} alt={this.props.element.imgName}/>
                </div>
                <div className="absoluteWrapper">
                    <a href={this.props.element.playLink} target="_blank" rel="noreferrer" style={{margin: "0px", padding: "0px"}}>
                        <img className="imageHoverImageOverlayT" src={highlightImage} alt={this.props.element.imgName} title={this.props.element.imgName}/>
                        <div className="showOnHover" style={{backgroundColor: "#00000088", color: "#ffffff"}}>
                            <p style={{alignSelf: "flex-end", margin: "10px"}}>{this.props.element.playText}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(FancyImageButton);