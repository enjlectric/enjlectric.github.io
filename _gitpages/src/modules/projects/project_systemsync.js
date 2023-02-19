import React from 'react';
import IMG_sysy_0 from './../../images/img_sysy_0.png'
import IMG_sysy_1 from './../../images/img_sysy_1.png'
import IMG_sysy_2 from './../../images/img_sysy_2.png'
import IMG_sysy_3 from './../../images/img_sysy_3.png'
import IMG_sysy_4 from './../../images/img_sysy_4.png'
import IMG_sysy_5 from './../../images/img_sysy_5.png'
import VID from './../../images/vid_probo.mp4'

class Project extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <h1 style={{margin: "40px auto"}}>
                    System Sync
                </h1>
                <video controls height="300px" width="400px" alt="Main video of the game">
                    <source src={VID} ></source>
                </video>
                <h2>
                    Overview
                </h2>
                <p>
                    System Sync is a 2D side-scrolling 2-player puzzle platformer developed by a team of four during our fourth semester at university. I was responsible for the programming and design of the game's four levels.
                </p>
                <img src={IMG_sysy_0} alt="A screenshot showcasing the player characters."/>
                <h6>Each player controls a small robot that can morph into a ball.</h6>
                <h2>
                    Game Mechanics
                </h2>
                <p>
                    System Sync was pitched as a game in which two players use magnetism to advance through levels by collaborating to solve puzzles. We wanted players to be able to influence each other, which lead to the conceptualization of a magnetic beam players can fire to interact with the world and each other. Since this quickly turned cumbersome, however, we added the constraint that players can only be lifted by magnetic beams while in the ball form, to give them an easy out from the influence of external forces.
                </p>
                <img src={IMG_sysy_1} alt="A screenshot showcasing the magnetic beams."/>
                <h6>Same polarity pushes, opposite polarity pulls.</h6>
                <p>
                    To allow players to both push and pull objects at arbitrary angles, a polarity toggle and a way to rotate the body of the player were added. We realized that in addition to providing a variety of interactions between players, this set of movement and interaction options also provided plenty of opportunities for players to interact with the world, leading to the creation of gameplay elements such as reflective mirrors and magnetically charged moving platforms.
                </p>
                <img src={IMG_sysy_2} alt="A screenshot showcasing moving platforms."/>
                <h6>Player 1 is firing a beam at the switch, which remotely triggers beams in Player 2's area which move the platforms.</h6>
                <p>
                    Lastly, a harsh yellow was coded as a color for dangerous elements, to introduce fail states to puzzles. Harmful elements such as a yellow beam and heavy smashers helped in adding variety to the moment to moment gameplay.
                </p>
                <img src={IMG_sysy_3} alt="A screenshot showcasing an obstacle with a fail state."/>
                <h6>Standing on the switch that stops the rapid smasher presents a nice opportunity for trolling.</h6>
                <h2>
                    Level design
                </h2>
                <p>
                    The game's four levels each put a different mechanic into focus. The first level emphasizes basic movement and recurring elements. The second level revolves around reflective mirrors. The third level features dangerous heavy smashers that must be circumvented in various ways. The final level's emphasis is placed on moving platforms.
                </p>
                <img src={IMG_sysy_4} alt="A screenshot showcasing the first level."/>
                <h6>The first level sees the players starting out separately, in mirrored environments. Once they got a basic handling of their controls down, they are asked to collaborate.</h6>
                <p>
                    System Sync was presented at the uni's semester project showcase event, so to aid replayability we also tracked the level completion time and showed each level's fastest time on the level select screen. The game was massively popular at the event, with plenty of teams competing for fast times on each of the levels.
                </p>
                <img src={IMG_sysy_5} alt="The game being played at the event."/>
                <h6>A daring team of two tackling the fourth level at the event.</h6>
            </div>
        )
    }
}

export default Project;