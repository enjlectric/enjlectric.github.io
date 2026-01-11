import { Component } from 'preact';
import BandcampLink from './BandcampLink';

class Music extends Component {
    render() {
        return (
            <div style={{maxWidth: "1400px", margin: "auto"}}>
                <div>
                    <BandcampLink
                        name = "Starshine"
                        src = "https://bandcamp.com/EmbeddedPlayer/album=765589866/size=large/bgcol=161a2b/linkcol=e99708/track=3994095081/minimal=true/transparent=true/"
                    />
                    <BandcampLink
                        name = "Starshine"
                        src = "https://bandcamp.com/EmbeddedPlayer/album=1485155851/size=large/bgcol=161a2b/linkcol=e99708/track=972762412/minimal=true/transparent=true/"
                    />
                    <BandcampLink
                        name = "Eruption"
                        src = "https://bandcamp.com/EmbeddedPlayer/album=4025795265/size=large/bgcol=161a2b/linkcol=e99708/track=407378625/minimal=true/transparent=true/"
                    />
                    <BandcampLink
                        name = "On The Road! Let's Go! (Forest)"
                        src = "https://bandcamp.com/EmbeddedPlayer/album=4280544880/size=large/bgcol=161a2b/linkcol=e99708/track=3549127775/minimal=true/transparent=true/"
                    />
                    <BandcampLink
                        name = "Ashen Blend"
                        src = "https://bandcamp.com/EmbeddedPlayer/album=965995376/size=large/bgcol=161a2b/linkcol=e99708/track=2721568912/minimal=true/transparent=true/"
                    />
                    <BandcampLink
                        name = "Jetpack"
                        src = "https://bandcamp.com/EmbeddedPlayer/album=1271440372/size=large/bgcol=161a2b/linkcol=e99708/track=114482687/minimal=true/transparent=true/"
                    />
                    <BandcampLink
                        name = "Eruption"
                        src = "https://bandcamp.com/EmbeddedPlayer/album=2729200948/size=large/bgcol=161a2b/linkcol=e99708/track=1191713567/minimal=true/transparent=true/"
                    />
                </div>
        </div>
        )
    }
}

export default Music;