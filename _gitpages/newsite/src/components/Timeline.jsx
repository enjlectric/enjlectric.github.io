
import React from 'react';
import TimelineEntry from './TimelineEntry';
import { elementPool } from './projectData';

class Timeline extends React.Component {
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

    timelineElements = [
        elementPool.eventhorizon,
        elementPool.fadingsignal,
        elementPool.sallysscribbles,
        elementPool.melting,
        elementPool.dicemask,
        elementPool.inkjet,
        elementPool.hotelmarcel,
        elementPool.laserkart,
        elementPool.finalboss,
        elementPool.bogjog,
        elementPool.bogjogost,
        elementPool.chroma,
        elementPool.john,
        elementPool.bumbling,
        elementPool.laserCatOst,
        elementPool.laserCat,
        elementPool.megakiller,
        elementPool.stargrove,
        elementPool.snipsnip,
        elementPool.weare,
        elementPool.hah,
        elementPool.monster,
        elementPool.pirate,
        elementPool.sysy,
        elementPool.xmas,
        elementPool.jungle,
        elementPool.h2o,
    ]

    constructor(props) {
        super(props);

        this.img = require("../images/" + props.image);
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>
                Timeline
                </h1>
                {this.timelineElements.map((v,k) => {
                return <TimelineEntry name={v.name} key={k} blurb={v.blurb} image={v.imgName} timeframe={v.timeframe} uneven={k%2===1} sourceLink = {v.sourceLink} playLink={v.playLink} playText={v.playText} type={v.typeName}/>
                })}
            </div>

        )
    }
}

export default Timeline;