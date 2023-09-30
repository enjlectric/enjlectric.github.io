import React from 'react';
import IMG_laser_0 from './../../images/p_laserkart_0.png'
import IMG_laser_1 from './../../images/p_laserkart_1.png'
import IMG_laser_2 from './../../images/p_laserkart_2.png'
import IMG_laser_3 from './../../images/p_laserkart_0.gif'
import VID from './../../images/vid_laserkart.mp4'

class Project extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <h1 style={{margin: "40px auto"}}>
                    Laser Kart
                </h1>
                <video controls height="300px" width="400px" alt="Main video of the game">
                    <source src={VID} ></source>
                </video>
                <h2>
                    Overview
                </h2>
                <p>
                    Laser Kart is a top-down bullet hell game, created in 9 days for Bullet Hell Jam 2022. It features 2 stages, each ending in their own grand boss fight. The premise of Laser Kart was <span className="hl">to do everything Laser Cat did the year before, but bigger and better</span>.
                </p>
                <h2>
                    Entities
                </h2>
                <p>
                    Laser Kart's project structure is built from scratch to be more maintainable and expandable than Laser Cat's. In Laser Kart, everything is defined via Scriptable Objects, from the bullets to the tire tracks left behind when moving sideways. Prefabs are kept to a minimum to reduce asset complexity. 
                </p>
                <img src={IMG_laser_0} alt="A screenshot showcasing the game's Scriptable Object structure."/>
                <h6>A lot of enemy patterns were easy to copy, modify and re-use by duplicating one file.</h6>
                <p>
                    Enemies are unique in that they come in all shapes and sizes. To make it possible for the weakest enemies to use the same prefab as the strongest bosses, I created "Config" objects to assist enemy-specific scriptable objects. These prefabs are instantiated on top the "Enemy" prefab and include scene references like additional projectile sources or sub-enemies.
                </p>
                <img src={IMG_laser_1} alt="A screenshot showcasing some of the game's Scriptable Object inspectors."/>
                <h6>By referencing each other, the Scriptable Objects of various game elements know all they need to to function.</h6>
                <p>
                    Bullet Patterns and movement-specific fields in the config make heavy use of animation curves to control acceleration, speed and other factors. It's a system that was quick to set up and work with, but which has its downsides in requiring a lot of mental math to try and make sense of what needs to be input for a specific result. My plan for the next iteration of my bullet hell framework is to build a visual editor that hides these curves and instead generates them from the visual input.
                </p>
                <h2>
                    Levels
                </h2>
                <img src={IMG_laser_2} alt="A screenshot showcasing how levels are set up."/>
                <h6>Levels are a list of encounters against a scrolling texture.</h6>
                <p>
                    Whereas Laser Cat would physically move the player through a space, loading in enemies as you pass their spawn coordinates, Laser Kart opts for the stationary background approach. Each enemy encounter is tied to a time limit (which can be disabled for important encounters), and once all encounters have been bested, the level is over. These "GameSections" are run as a sequence of coroutines, creating an intuitive flow in the backend.
                </p>
                <img src={IMG_laser_3} alt="A short gif demonstration of the opening cutscene."/>
                <h6>A cylinder is used to get the effect of the road disappearing into the distance at the horizon.</h6>
                <h2>
                    Difficulty highlight: Coroutines
                </h2>
                <p>
                    A big take-away from this project is that coroutines require a lot of care to prevent them from breaking your game. In the final stretch of the game, the common issues of parallel coroutine execution and flawed cancellation came up, forcing me to build a Coroutine Manager that pools all coroutines in the game, to bring order to the chaos. It was enough to get the game to work most of the time, but even with it there are still issues with the game loop silently failing due to a misbehaving coroutine.
                </p>
                <p>
                    In the end, while coroutines do make the setup of the game state quick and intuitive, I am planning to switch to a callback-based state machine with exception handling in case of unexpected malfunctions when building my next game that makes me think of building a coroutine structure.
                </p>
                <span className="hl">Laser Kart is available for free on: <a target="_blank" rel='noreferrer' href="https://enjl.itch.io/laser-kart">Itch.io</a></span>
            </div>
        )
    }
}

export default Project;