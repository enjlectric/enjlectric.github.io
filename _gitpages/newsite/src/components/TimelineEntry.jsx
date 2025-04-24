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
            <div className="timelineEntry" style={{display: "flex", flex:"100%", backgroundColor: this.props.uneven ? "#00000060" : "#000000a0"}}> 
                <div style={{flex: 1, textAlign: "center", margin: "auto"}}>
                    <img src={this.img} alt={this.props.name} width="128px" style={{ height: "auto"}}/>
                </div>
                <div style={{flex: 5, textAlign: "left", margin: "auto"}}>
                    <div style={{display: "flex", flex: 100, margin: "-10px 20px"}}>
                        <h3 style={{textAlign:"left"}}>{this.props.name}</h3>
                        <p style={{margin:"auto 10px auto auto"}}>
                            {this.props.type}
                        </p>
                        <p style={{color: "cyan", margin:"auto 10px"}}>
                            {this.props.timeframe}
                        </p>
                        {this.props.playLink != null && <a className="coolLink" target="_blank" rel="noreferrer" href={this.props.playLink}>{this.props.playText}</a>}
                        {this.props.sourceLink != null && <a className="coolLink" target="_blank" rel="noreferrer" href={this.props.sourceLink}>Source code</a>}
                    </div>
                    <p style={{margin: "10px 20px"}}>{this.props.blurb}</p>
                </div>
            </div>
        )
    }
}

export default TimelineEntry;