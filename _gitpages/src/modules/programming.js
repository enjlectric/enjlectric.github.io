import React from 'react';
import LaserCatShowcase from '../images/laserCatShowcase.gif'
import worldMapShowcase from '../images/worldMapShowcase.gif'
import FinalBossShowcase from '../images/finalBossShowcase.gif'
import classNames from 'classnames';

class Programming extends React.Component {
    render() {
        return (
            <div>
            <h1 className="typewriter">I like to program games.</h1>
            <div className = "gradientBox">
                <h2>
                    Here are some cool things I've programmed!
                </h2>

                <div className={classNames("gradientBox", "redGradientBox")}>
                        <h3 style={{textAlign: "left", marginLeft: "10%"}}>Wave-based endless shmup</h3>
                        <img className="staticImage" style={{height: "100%", width: "auto", maxHeight: "350px", float: "left", marginRight:"30px"}} src = {LaserCatShowcase} alt = "Wave code in Laser Cat"/>
                        <p>
                            Laser Cat dynamically loads its wave configuration from a list of scenes, with their names, paths and background colours defined via a scriptable object. The scene's "wave"-object contains all stage elements: A set of invisible squares with colliders - trigger zones. These zones signal information about desired wave scroll speeds, background music and, most importantly, enemy patterns.
                        </p>
                        <p>
                            Once the last spawner of the wave is done, the wave manager is notified that it's time to discard the current wave and initialize the next. There are eight waves, so repetition is quickly noticable.
                        </p>
                        <p>
                            To migitate that, the ScriptableObject for the wave configuration contains a bit more information:
                        </p>
                        <ul style={{margin: "auto"}}>
                            <li>How much HP to add to enemies when a wave is beaten</li>
                            <li>By how much to increase the score multiplier when a wave is beaten</li>
                            <li>How many enemies should be added to all enemy patterns when a wave is beaten</li>
                        </ul>
                        <p>
                            The latter in particular allowed me to design waves which unfold as you replay them in future loops: Spawners can modulate the number of enemies spawned per loop, capped at a maximum. Once the uncapped value exceeds an optional limit, the spawner can also be terminated, allowing it to be replaced by a different one entirely.
                        </p>
                        <p>
                            Through these tricks, I was able to create a highly addictive and replayable gameplay loop, which is simultaneously easily expandable with new waves and enemy patterns, in just a couple of hours.
                        </p>
                        <div style={{clear: "both"}}></div>
                </div>
            </div>
        </div>
        )
    }
}

export default Programming;