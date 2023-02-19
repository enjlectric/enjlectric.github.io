import React from 'react';
import BandcampLink from './bandcampLink';

class Music extends React.Component {
    render() {
        return (
            <div style={{maxWidth: "1400px", margin: "auto"}}>
                <p>
                    I started getting more into music in 2018, slowly getting a hold on music theory and practicing using <span>LMMS</span>. Since then, I have picked it up as a hobby I regularly practice to get my mind off things. My current aim is to improve at general mixing and song structure.
                </p>
                <p>
                    <span>Melting</span> album (November 2022) 
                </p>
                <div>
                    <BandcampLink
                        name = "Melting"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=917515448/transparent=true/"
                    />

                    <BandcampLink
                        name = "Eruption"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=407378625/transparent=true/"
                    />

                    <BandcampLink
                        name = "Scoria's Theme"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=3802577083/transparent=true/"
                    />
                </div>
                <p>
                    <span>Barry's Bog Jog</span> OST (March 2022) 
                </p>
                <div>
                    <BandcampLink
                        name = "Floral Ruins (Flurret Path)"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=1454664794/transparent=true/"
                    />

                    <BandcampLink
                        name = "Boglurkers (Deep Hollow)"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=475387969/transparent=true/"
                    />
                </div>
                <p>
                    <span>Chroma</span> album (February 2022) 
                </p>
                <div>
                    <BandcampLink
                        name = "Siphon Hex"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=1928764721/transparent=true/"
                    />

                    <BandcampLink
                        name = "Crow"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=3466199167/transparent=true/"
                    />

                    <BandcampLink
                        name = "Ashen Blend"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=2721568912/transparent=true/"
                    />
                </div>
                <p>
                    <span>Laser Cat</span> OST (September 2021) 
                </p>
                <div>
                    <BandcampLink
                        name = "Menu"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=3074357598/transparent=true/"
                    />

                    <BandcampLink
                        name = "Boss Approaching"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=2232925472/transparent=true/"
                    />
                </div>
                <p>
                    <span>MEGAKILLER</span> album (August 2021)
                </p>
                <div>
                    <BandcampLink
                        name = "Absolute Zero Heat Death Cannon"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=3401195636/transparent=true/"
                    />

                    <BandcampLink
                        name = "MEGAKILLER"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=2787899119/transparent=true/"
                    />
                </div>
                <p>
                    <span>We Are</span> album (March 2021)
                </p>
                <div>
                    <BandcampLink
                        name = "!Alone"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=123612252/transparent=true/"
                    />

                    <BandcampLink
                        name = "On An Endless Journey"
                        src = "https://bandcamp.com/EmbeddedPlayer/size=large/bgcol=262a2b/linkcol=006ac3/tracklist=false/artwork=small/track=1191713567/transparent=true/"
                    />
                </div>
        </div>
        )
    }
}

export default Music;