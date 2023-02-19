import React from 'react';

class TimelineEntry extends React.Component {
    static defaultProps = {
        uneven: false,
        name: "Placeholder",
        image: "thumbnails_none.png",
        timeframe: "Now",
        blurb: "This project is made up",
        playLink: undefined,
        sourceLink: undefined,
        playText: ""
    }

    img;

    constructor(props) {
        super(props);

        this.img = require("../images/" + props.image);
    }

    render() {
        return (
            <div className="timelineEntry" style={{display: "flex", backgroundColor: this.props.uneven ? "#00000060" : "#000000a0"}}> 
                <div style={{flex: 1, textAlign: "left", marginRight: "20px"}}>
                    <img src={this.img.default} alt={this.props.name} width="200px" style={{ height: "auto", maxWidth: "10vw"}}/>
                </div>
                <div style={{maxWidth: "70%", display: "flexbox", flex: 100}}>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.blurb}</p>
                    {this.props.playLink != null && <a className="coolLink" target="_blank" rel="noreferrer" href={this.props.playLink}>{this.props.playText}</a>}
                    {this.props.sourceLink != null && <a className="coolLink" target="_blank" rel="noreferrer" href={this.props.sourceLink}>Source code</a>}
                </div>
                <div style={{flex: 1, textAlign: "right"}}>
                    <h5 style={{color: "#fff7", fontWeight: "300"}}>{this.props.type}</h5><br></br>
                    <p style={{fontStyle: "italic"}}>{this.props.timeframe}</p>
                </div>
            </div>
        )
    }
}

export default TimelineEntry;