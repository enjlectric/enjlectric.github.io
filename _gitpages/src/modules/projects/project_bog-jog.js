import React from 'react';
import IMG_bog_0 from './../../images/p_bogjog_0.png'
import IMG_bog_1 from './../../images/p_bogjog_1.png'
import IMG_bog_2 from './../../images/p_bogjog_2.png'
import IMG_bog_3 from './../../images/p_bogjog_3.png'
import VID from './../../images/vid_bogjog.mp4'

class Project extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <h1 style={{margin: "40px auto"}}>
                    Barry's Bog Jog
                </h1>
                <video controls height="300px" width="400px" alt="Main video of the game">
                    <source src={VID} ></source>
                </video>
                <h2>
                    Overview
                </h2>
                <p>
                    Barry's Bog Jog is a <span className="hl">top-down dungeon crawling game</span>, inspired by SPIKE CHUNSOFT's Mystery Dungeon games. It was created in 7 days for the 2022 7DRL (7 Day Roguelike) Jam and features 3 areas with 29 floors total.
                </p>
                <h2>
                    Game Mechanics
                </h2>
                <p>
                    As a study into how Mystery Dungeon games are constructed, many of Barry's Bog Jog's game mechanics are lifted from those games, mostly differing in complexity to make meeting the 1-week deadline possible. Players are able to interact with items, battle enemies and cast special abilities. Their belly gradually empties, encouraging the use of consumables to stay healthy. 
                </p>
                <p>
                    The game's action queue is the first action queue I have written for a turn-based game, and has a few rough spots (occasionally, enemies might attempt to attack the player if the player just teleported in the same turn). It is split into three parts: Player input, enemy thinking, execution.
                </p>
                <p>
                    <span className="hl">Player input</span> is simply the player's turn. It waits for the player to select an action, then registers it as the player's action for this turn. If the action is movement, a special flag is set that keeps the doors open for all movement to happen in parallel (assuming no enemy attacks the player at their new position).
                </p>
                <p>
                    <span className="hl">Enemy thinking</span> uses the player's scheduled new coordinate in the thought processing, to ensure that enemies don't lag behind a turn. Extra care is put into avoiding two enemies claiming the same coordinate to move to.
                </p>
                <p>
                    During <span className="hl">execution</span>, first, the player's turn is executed. Then, enemy turns are executed. If all enemy turns/all turns including the player turn are movement turns, all turns happen in parallel. It is also possible for enemy and player positions to change unexpectedly during the turn execution, in which case the aforementioned rough spots take effect. I have since conceptualized an upgrade to this system for future mystery dungeon titles, where an enemy's thought can be dirtied based on whether its target cell state changes between thinking of and executing a command.
                </p>
                <h2>
                    Behind the scenes
                </h2>
                <img src={IMG_bog_1} alt="A screenshot showcasing the ability Slime Juice's ScriptableObject definition."/>
                <h6>Odin Inspector's bool array visualization helps with the display of certain area of effect abilities.</h6>
                <p>
                    Every game element is a <span className="hl">Scriptable Object</span>, with singular prefabs per type (item on ground, item in the inventory, enemy, ability cast) representing the entity's in-world appearance. This structure made it easy to keep track of enemy properties and abilities, assign spawn rates, and even define the area of effect of individual abilities (item active effects are also implemented as abilities). The dungeon's random generation is accomplished using the <a target="_blank" rel='noreferrer' href="https://github.com/odedw/karcero">Karcero dungeon generator</a>, with its parameters and rule tile settings defined for each dungeon's scriptable object.
                </p>
                <img src={IMG_bog_0} alt="A screenshot showcasing the enemy Biky's ScriptableObject definition."/>
                <h6>Enemy spritesheet animations are auto-generated from the passed image.</h6>
                <p>
                    To save on time, I also settled on a standardized spritesheet format, where each column corresponds to one of the 8 facing directions an entity can face. From there, the frames are automatically sorted into lists based on their intended direction. The animation sequence can then be defined via a sequence of integer values from 0 to 4, corresponding to the row of sprite to display. This method of animating characters saved a lot of time over using Unity's built-in animation tools.
                </p>
                <h2>
                    Balancing
                </h2>
                <p>
                    When it comes to procedurally generated content, balancing is always tricky. It is very easy to overtune or undertune a game, and testing lategame scenarios can be cumbersome due to how varied a player's early game can go. Will they find all the best items and grind enemies, or will they skip enemies and end up underleveled? For Barry's Bog Jog, I wanted players to engage with the game's systems, searching for items that help them stay healthy against enemies. I also wanted players to fail their first few runs, however, so the level curve is designed to be a bit steeper than I would do it in a bigger game with more content.
                </p>
                <img src={IMG_bog_2} alt="A screenshot showcasing the Bog dungeon's ScriptableObject definition."/>
                <img src={IMG_bog_3} alt="A screenshot showcasing the Bog dungeon's intermediate and hard sub-floor ScriptableObject definitions."/>
                <h6>Floor ranges and sub-dungeon ScriptableObject help fine-tune a dungeon's difficulty curve.</h6>
                <p>
                    To fine-tune a dungeon's difficulty, I gave each dungeon a section for ScriptableObject overrides where certain parameters could be replaced for individual floors or floor ranges. On the main ScriptableObject for a dungeon, the specific enemy spawns and item drops could also be restricted to specific floors of the dungeon. Players would thus see a difficulty progression even within the game's three dungeons and notice when they're out of their depth and need to become stronger to survive.
                </p>

                <span className="hl">Barry's Bog Jog is available for free on: <a target="_blank" rel='noreferrer' href="https://enjl.itch.io/barrys-bog-jog">Itch.io</a></span>
            </div>
        )
    }
}

export default Project;