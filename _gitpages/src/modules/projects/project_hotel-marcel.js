import React from 'react';
import IMG_marcel_0 from './../../images/p_marcel_0.png'
import VID from './../../images/vid_marcel.mp4'

class Project extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <h1 style={{margin: "40px auto"}}>
                    Hotel Marcel
                </h1>
                <video controls height="300px" width="400px" alt="Main video of the game">
                    <source src={VID} ></source>
                </video>
                <h2>
                    Overview
                </h2>
                <p>
                    Hotel Marcel is a Game & Watch-inspired arcade high-score hunting game. It came about as part of a small game jam among friends, where each team was given 8 hours to finish their respective games. The idea developed as a result of the tight deadline.
                </p>
                <img src={IMG_marcel_0} alt="A picture showing the planning sketches."/>
                <h6>The game was conceptualized against this canvas during a discord call.</h6>
                <h2>
                    Development
                </h2>
                <p>
                    During brainstorming, my friend (who did the art) and I landed on the idea of doing something Game & Watch-style, due to them being small scope in both visuals and programming. We considered how we could best capture the feeling of escalating difficulty in a single LCD screen, while also trying to think about how to fit shooter elements into it, because my friend wanted to make a first person shooter. The idea of a circular arena came up, where you only ever see a part of it and need to turn around to view the other half.
                </p>
                <p>
                    We developed this idea further, including arrows on the sides to mark enemies off-screen, and differently sized pillars (in the final: one pillar has a flower pot, while the other does not) to help the player put their current perspective into context. Enemies initially walked 5 steps toward the player, which was later cut down to 3 to prevent cluttering the screen too much.
                </p>
                <p>
                    Reloading adds an extra layer of strategy to the game. You can only reload when you are out of bullets, so you might want to waste your last bullet during moments of downtime, to better prepare yourself for the next set of enemies. On the other hand, the closer an enemy gets to the player, the more points are awarded for a kill. So it might be more profitable to wait just a little longer for some extra points. These two mechanics in particular contribute to a lot of the fun in the game, I think, as they create a push and pull that force the player to react.
                </p>
                <span>Hotel Marcel is available for free on: <a target="_blank" rel='noreferrer' href="https://enjl.itch.io/hotel-marcel">Itch.io</a></span>
            </div>
        )
    }
}

export default Project;