import React from 'react';
import IMG_Bumbling_0 from './../../images/p_bumbling_0.png'
import IMG_Bumbling_1 from './../../images/p_bumbling_1.png'
import IMG_Bumbling_2 from './../../images/p_bumbling_2.png'
import IMG_Bumbling_3 from './../../images/p_bumbling_3.png'
import IMG_Bumbling_4 from './../../images/p_bumbling_4.png'
import VID_Bumbling_0 from './../../images/p_bumbling_0.mp4'
import VID_Bumbling_1 from './../../images/p_bumbling_1.mp4'
import VID_Bumbling_2 from './../../images/p_bumbling_2.mp4'
import VID_Bumbling_3 from './../../images/p_bumbling_3.mp4'
import VID from './../../images/vid_bumbling.mp4'

class Project extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <h1 style={{margin: "40px auto"}}>
                    Bumbling Builders
                </h1>
                <video controls height="300px" width="400px" alt="Main video of the game">
                    <source src={VID} ></source>
                </video>
                <h2>
                    Overview
                </h2>
                <p>
                    Bumbling Builders is a level-based 2D strategy puzzle game in which the player is in charge of keeping small creatures safe by means of placing blocks. It was originally created for Ludum Dare 49, held in Autumn of 2021. I contributed to a post-jam update which doubled the level roster and revised almost all pre-existing levels. In total, I have contributed 16 levels over the course of a weekend.
                </p>
                <img src={IMG_Bumbling_3} alt="A screenshot showing the friendly characters in the game."/>
                <h6>Meet the friends!</h6>
                <p>
                    The aim of the update was never to introduce new mechanics, but instead better utilize existing ones. In the game there are six enemy types; seven, if you count the danger posed by physics objects falling onto the creatures you're trying to protect. These enemies attempt to cause mayhem by means of jumping, running, flying and exploding.
                </p>
                <img src={IMG_Bumbling_2} alt="A screenshot showing all enemies faced in the game."/>
                <h6>Meet the enemies!</h6>
                <h2>
                    Levels
                </h2>
                <p>
                    I derived a lot of my inspiration for level themes from the ways in which these enemies behave. The anvil-shaped enemy which methodically pushed blocks stood out for its ability to not only cause havoc, but also create favourable situations. The "Heavy Attack" level thus contextualizes this enemy's evil side through the swing of a mighty sword, while the level "Alliance" has the player build a bridge for this enemy to allow it to help the bumbling king.
                </p>
                <video controls height="300px" width="400px" alt="The level Heavy Attack">
                    <source src={VID_Bumbling_1} ></source>
                </video>
                <video controls height="300px" width="400px" alt="The level Alliance">
                    <source src={VID_Bumbling_2} ></source>
                </video>
                <h6>Is the anvil guy really an enemy?</h6>
                <p>
                    Another enemy worth highlighting is the one shaped like a bundle of explosives. Its main characteristic is that it explodes when it comes in contact with a wall, resulting in a major blast that deals massive damage to blocks and pushes them away. Through experimenting, I found some quirks in that push force and transformed the enemy into a makeshift cannon. These cannons would later inspire some of the level designs by other designers on the team.
                </p>
                <video controls height="300px" width="400px" alt="The level Cannons">
                    <source src={VID_Bumbling_0} ></source>
                </video>
                <h6>The explosive foe is definitely an enemy worth taking seriously!</h6>
                <p>
                    Most levels I've contributed are focused around a singular mechanic like those highlighted above. However, in many cases I wasn't satisfied with ditching the mechanic after a single use. Akin to other puzzlers like <i>Baba Is You</i>, I instead opted to build remixed levels that recontextualize the original problem. These recontextualizations are often slight alterations to the level's layout or available resources.
                </p>
                <img src={IMG_Bumbling_4} alt="A screenshot showing the remix of Cannons."/>
                <h6>Two cannons are better than one!</h6>
                <img src={IMG_Bumbling_0} alt="A screenshot showing the level Village."/>
                <img src={IMG_Bumbling_1} alt="A screenshot showing the remix of Village."/>
                <h6>The <i>Three Little Pigs</i>-inspired Village level sees one of the friends stealing all materials for himself in the remix!</h6>
                <p>
                    Tangible enemies aside, I earlier mentioned the elusive seventh enemy: Physics. Even a hundred enemies thrown at the player can never be as satisfying to overcome as solving a well-crafted balancing act. 
                </p>
                <video controls height="300px" width="400px" alt="The level Cannons">
                    <source src={VID_Bumbling_3} ></source>
                </video>
                <h6>So close!</h6>

                <span className="hl">Bumbling Builders is available for free on: <a target="_blank" rel='noreferrer' href="https://oroshibu.itch.io/bumbling-builders">Itch.io</a></span>
            </div>
        )
    }
}

export default Project;