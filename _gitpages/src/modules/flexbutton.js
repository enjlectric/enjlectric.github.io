import React from 'react';
import { withRouter } from 'react-router';
import "./flexbutton.css";

import classNames from 'classnames';

class FlexButton extends React.Component {
    static defaultProps = {
        element: {},
        onClick: function() {}
    }

    static img;

    videoRef;

    constructor(props) {
        super(props);

        this.img = require("../images/" + (props.element.screenshotName ?? "thumbnails_none.png"));
        this.videoRef = React.createRef()
        this.state = {
            hovered: false,
            videoVisible: false
        }
    }

    clickVideo() {
        this.setState({videoVisible: true})

        this.videoRef.current.play()
    }

    clickLink() {
        let idx = this.props.element.name.toLowerCase().replaceAll(' ', '-').replaceAll(',','')
        let site = window.location.search.split('?');
        if (site[1] != null) {
            let oldSite1 = site[1];
            site[1] = "?view=" + idx;

            if (oldSite1.match("cpct")) {
                site[1] += "&cpct"
            }

            if (oldSite1.match("elaborate")) {
                site[1] += "&elaborate"
            }
        } else {
            site[1] = "?view=" + idx
        }
        this.props.history.push(site[0].split('/')[0] + '/site/' + site[1])

        this.props.onClick(idx)
    }

    render() {
        return (
        <div className={"flexButtonContainer"}
        >
            <div 
                className="flexButtonHover"
                >
                <div className="absoluteFlexWrapper" 
                onMouseOver={() => this.setState({hovered: this.props.element.video != null})}
                onMouseOut={() => this.setState({hovered: false})}>
                    <img className={classNames("flexImage", this.state.hovered ? "hovered" : "")} src={this.img.default} alt={this.props.element.imgName}/>
                    {this.props.element.video && <div className="absoluteFlexChild"
                    >
                        <h1
                            onClick={this.clickVideo.bind(this)}
                         style={{
                            position: "absolute",
                            top: "0px",
                            display: 'flex',
                            flexDirection: "row",
                            margin: "auto",
                            minWidth: "100%",
                            minHeight: "100%",
                            cursor: "pointer",
                            alignItems: "center",
                            textAlign: "center",
                            justifyContent: "center",
                            verticalAlign: "middle"
                        }}>▶</h1>
                    </div>}
                </div>
                {<div className="absoluteFlexWrapper" style={{display: (this.props.element.video != null && this.state.videoVisible)  ? "block" : "none"}}>
                    <div style={{margin: "0px", padding: "0px", backgroundColor: "black", width: "100%", height: "100%"}}>
                        <video ref={this.videoRef} controls style={{width: "100%", height: "100%"}} height="100%" width="100%" alt="Video of the project">
                            <source src={this.props.element.video} ></source>
                        </video>
                    </div>
                </div> }
                {/* <div className="absoluteFlexWrapper" >
                    <div style={{margin: "0px", padding: "0px"}}>
                        <div style={{backgroundColor: this.props.element.color}} className="typeElement">
                            <h5 style={{color: "#fff", fontWeight: "1000"}}>{this.props.element.typeName}</h5>
                        </div>
                        {/* <div className="showOnHover" style={{backgroundColor: "#000000dd", color: "#ffffff"}}>
                            <div style={{margin: "10px"}}>
                                <h1>{this.props.element.name}</h1>
                                {this.props.element.mainpageblurb}
                                <p>[{this.props.element.playText}]</p>
                            </div>
                        </div> 
                    </div>
                </div> */}
            </div>
            
            <div style={{textAlign: "left", padding: "0px 15px", width: "100%"}}>
                <u>{this.props.element.name}</u>
                <span style={{
                    float: "right",
                    paddingRight: "30px",
                    fontSize: "12pt"
                }}>{this.props.element.typeName}</span>
            </div>
            
            <div style={{textAlign: "left", padding: "0px 30px"}}>
                {this.props.element.mainpageblurb}
            </div>

            <div style={{alignSelf: "flex-end", margin: "auto 40px 10px auto"}}>
                {this.props.element.sourceLink != null && <button className="coolLink" onClick={() => window.open(this.props.element.sourceLink, "_blank")}>Source code</button>}
                <button className="coolLink" onClick={this.clickLink.bind(this)}>
                    Read more
                </button>
            </div>
        </div>
        
        )
    }
}

export default withRouter(FlexButton);