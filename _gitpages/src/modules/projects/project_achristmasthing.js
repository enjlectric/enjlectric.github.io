import React from 'react';
import IMG_xmas_0 from './../../images/img_xmas_0.png'
import IMG_xmas_1 from './../../images/img_xmas_1.png'
import VID from './../../images/vid_xmas.mp4'

class Project extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <h1 style={{margin: "40px auto"}}>
                    A Christmas Thing
                </h1>
                <video controls height="300px" width="400px" alt="Main video of the game">
                    <source src={VID} ></source>
                </video>
                <h2>Overview</h2>
                <p>
                    A Christmas Thing is a 3D platformer developed by a team of four over the course of three months. My main responsibility was the creation of the game's levels, but I also helped with the code to ensure we meet the December 24 deadline. The game additionally serves as a proof of concept for taking YouTuber raocow's Demo-Universe into 3D.
                </p>
                <img src={IMG_xmas_0} alt="A screenshot showing the first screen in the game."/>
                <h6>You begin the game viewing an ominous door which asks you to collect three leeks.</h6>
                <h2>Moving platforms</h2>
                <p>
                    The moving platform code was one of my main responsibilities in this project. Since it was everyone's first foray into 3D level design, I tested out the common methods before finally settling on parenting the player to the platforms. To avoid janky edge cases, I've coupled the system to my friend's collision notification events, which fired accurate callbacks for when to unparent the player.
                </p>
                <p>
                    The moving platform code, moreso functioning as code to move any transform, proved useful in not only creating obstacles involving moving platforms, but also rotating and moving hazards such as firebars and cannons. These elements would become core components of my levels.
                </p>
                <h2>Levels</h2>
                <p>
                    Both platforming levels I created follow the tried and true <span className="hl">4-Step Design</span> formula, where a gameplay mechanics is introduced, expanded upon, reimagined and finally utilized in an ultimate obstacle before the end of the level. Additionally, each of the two levels contains a bonus challenge for a secret collectible. Candy Cove features five green teeth collectibles which are slightly out of the player's way. Sorbet Sky has platforms with colours that change when touched. If all teeth are found or platforms were touched in one playthrough, the reward is granted. 
                </p>
                <img src={IMG_xmas_1} style={{maxWidth: "800px"}} alt="A screenshot showing the first screen in the game."/>
                <h6>Aerial views of Candy Cove on the left and Sorbet Sky on the right, highlighting the four steps of gimmick escalation.</h6>
                <p>
                    As for main mechanics, Candy Cove focuses on moving platforms as a platforming element, seeing the player move on the cylindrical candy platforms' flat tops and curved sides alike. Firebars are introduced in the latter half as a secondary spinning obstacle to require the player to pay attention to two rotations at once. 
                </p>
                <p>
                    Sorbet Sky instead revolves around cannon boxes that periodically shoot fireballs in a straight line. While initially these are static and used as intercepts for jumps and to periodically heighten the danger of staying on a platform, the latter half of the level puts them into orbits, creating a moving element to mesh with the largely circular nature of the level's platforms in the second half.
                </p>

                <span className="hl">A Christmas Thing can be downloaded for free from <a target="_blank" rel='noreferrer' href="https://drive.google.com/file/d/1xTVs5oSYvGDRAwIO9aF0tpZ6NKnWOXii/view">Google Drive</a></span>
            </div>
        )
    }
}

export default Project;