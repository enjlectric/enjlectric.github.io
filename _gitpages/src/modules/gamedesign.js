import React from 'react';
import './gamedesign.css';
import classNames from 'classnames';
import img_lc_1 from '../images/gd_lc_1.png'
import img_lc_2 from '../images/gd_lc_2.png'
import img_lc_3 from '../images/gd_lc_3.png'
import img_lc_4 from '../images/gd_lc_4.png'
import img_lc_5 from '../images/gd_lc_5.png'
import img_lc_6 from '../images/gd_lc_6.png'
import img_lc_7 from '../images/gd_lc_7.png'
import img_lc_8 from '../images/gd_lc_8.png'
import img_monster_1 from '../images/gd_monster_1.png'
import img_monster_2 from '../images/gd_monster_2.png'
import img_monster_3 from '../images/gd_monster_3.png'
import img_sysy_1 from '../images/gd_sysy_1.png'
import img_sysy_2 from '../images/gd_sysy_2.png'
import img_sysy_3 from '../images/gd_sysy_3.png'
import img_h2o_1 from '../images/gd_h2o_1.png'
import img_h2o_2 from '../images/gd_h2o_2.png'
import img_h2o_3 from '../images/gd_h2o_3.png'
import img_xmas_1 from '../images/gd_xmas_1.png'
import img_xmas_2 from '../images/gd_xmas_2.png'
import img_xmas_3 from '../images/gd_xmas_3.png'

const laserCatContent = {
    varName: "laserCatIndex",
    team: "made by myself in 9 days, August 2021",
    roles: "PROGRAMMING - ART - DESIGN - MUSIC",
    elements: [
        {
            img: img_lc_1,
            text: "Upon starting the game, a destructible button enemy shouting 'GO!' appears, giving you plenty of time to figure out the controls."
        },
        {
            img: img_lc_2,
            text: "Gameplay is split into waves, where each wave consists of a sequence of enemy spawners. These spawners are configured to spawn patterns of enemies."
        },
        {
            img: img_lc_3,
            text: "Enemy types are introduced gradually across waves, with slight themes for each. The first wave is easy and about roomba enemies. The second wave introduces alternative camera scroll speeds. The fourth wave introduces the concept of bosses, etc."
        },
        {
            img: img_lc_4,
            text: "The wave transitions serve as moments of downtime from the increasingly challenging waves of enemies."
        },
        {
            img: img_lc_5,
            text: "Every 20th kill causes the killed enemy to drop a bonus item which can be collected for extra points."
        },
        {
            img: img_lc_6,
            text: "Upon getting hit, the player loses a life. Every lost life grants a skill point that can be used to improve the character's abilities."
        },
        {
            img: img_lc_7,
            text: "When low on lives, the player turns into a powerful killing machine, but also needs to be wary of their surroundings to avoid taking fatal damage."
        },
        {
            img: img_lc_8,
            text: "After beating the final wave, the waves loop with slightly altered names. Additionally, repeat waves have slightly higher enemy count and HP, and a higher score multiplier."
        },
    ]
}

const monsterContent = {
    varName: "monsterIndex",
    team: "made by 9 people in 5 months, April - August 2018",
    roles: "PROGRAMMING - DESIGN - MUSIC",
    elements: [
        {
            img: img_monster_1,
            text: "You play as a monster in a human child's bedroom. Your objective is to make as big of a mess and as much noise as possible before time runs out. My responsibilities were writing the game's systems and designing an exploration-based 3D platformer level."
        },
        {
            img: img_monster_2,
            text: "Knocking objects over rewards the player with points and increments their score multiplier. Chain reactions are rewarded extra and balloons help the player keep their combo going while serving as pathing guides."
        },
        {
            img: img_monster_3,
            text: "When the time is up, the player's rank is calculated based on the number of star milestones they reached on the score counter."
        }
    ]
}

const sysyContent = {
    varName: "sysyIndex",
    team: "made by 2 people, October 2017 - February 2018",
    roles: "PROJECT LEAD - PROGRAMMING - DESIGN",
    elements: [
        {
            img: img_sysy_1,
            text: "System Sync is a cooperative puzzle platformer for which I have created the levels and underlying code. The goal of each level is to activate all modules connected to the central device simultaneously. The title screen teaches this with coloured buttons, which players have to aim at."
        },
        {
            img: img_sysy_2,
            text: "Puzzles are built around magnetic push & pull, where each player can be either positively or negatively charged. Here, both players are positively charged, allowing one to lift the other over the deadly pit."
        },
        {
            img: img_sysy_3,
            text: "I built levels by using a tilemap for the terrain. Once the terrain was mostly final we added and linked objects such as doors and switches to the levels. This allowed us to prototype and adjust levels and individual challenges in a matter of minutes."
        }
    ]
}

const h2oContent = {
    varName: "h2oIndex",
    team: "made by 5 people, October 2016 - February 2017",
    roles: "PROGRAMMING - DESIGN",
    elements: [
        {
            img: img_h2o_1,
            text: "The title screen serves as an interactive tutorial. In order to play the game, the player has to perform a dash move through the glass to shatter it. They also have the opportunity to take out a defenseless enemy."
        },
        {
            img: img_h2o_2,
            text: "While moving upwards through the game's level, the player will encounter different types of enemies with unique behaviours. They will also need to keep an eye on their boost gauge, since boosts are required to break glass barriers."
        },
        {
            img: img_h2o_3,
            text: "The player's progression is threatened by a soft timer in the form of water. It's a high score challenge of who can survive the longest."
        }
    ]
}

const xmasContent = {
    varName: "xmasIndex",
    team: "made by 3 people in 2 months, October - December 2017",
    roles: "PROGRAMMING - DESIGN",
    elements: [
        {
            img: img_xmas_1,
            text: "Demo in the game's hub, 'Popsicle Garden'; a free-roaming sandbox for testing controls where some secrets can be found. The hub and two more stages were my main contribution to this game, aside from scripts like moving platforms."
        },
        {
            img: img_xmas_2,
            text: "Showcase of one of the levels I designed. The player start point is on the platform to the right. The level is designed with 4-step level design in mind and is built around the red and white platforms which spin in various ways."
        },
        {
            img: img_xmas_3,
            text: "Showcase of the other level. In this level, the player has to jump between platforms and avoid the fireballs generated by the red boxes. When the player steps on a blue platform, it turns green, providing an extra challenge in turning all platforms green for a reward."
        }
    ]
}

class Gamedesign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            laserCatIndex: 0,
            monsterIndex: 0,
            sysyIndex: 0,
            h2oIndex: 0,
            xmasIndex: 0,
        }
    }

    incrementVarFor(content) {
        let value = this.state[content.varName] + 1
        if (value >= content.elements.length) {
            value = 0
        }
        this.setState({[content.varName]: value});
    }

    decrementVarFor(content) {
        let value = this.state[content.varName] - 1
        if (value < 0 ) {
            value = content.elements.length - 1
        }
        this.setState({[content.varName]: value});
    }

    render() {

        const fadeGradient = "linear-gradient(270deg, rgba(22,2,47,0) 0%, rgba(47,27,55,1) 35%, rgba(55,39,69,1) 62%, rgba(69,40,78,0) 86%)"

        return (
            <div>
            <h1 style={{margin: "40px auto"}}>I design levels, systems, and games as a whole.</h1>
            <div className = "gradientBox">
                <h2>
                    Some design breakdowns of my games.
                </h2>

                <div
                    className={classNames("gradientBox", "redGradientBox")}
                    style={{
                        textAlign: "center",
                        background: fadeGradient
                    }}>
                        <h3>Laser Cat</h3>
                        <h4 style={{fontWeight: 10, color: "#fff6"}}>{laserCatContent.team}</h4>
                        <h5 style={{fontWeight: 10, color: "#fff6"}}>{laserCatContent.roles}</h5>
                        <img className="staticImage" style={{height: "100%", width: "auto", maxHeight: "350px"}} src = {laserCatContent.elements[this.state.laserCatIndex].img} alt = "Laser Cat Showcase"/>
                        <div className="countContainer">
                            {laserCatContent.elements.map((_, k) => {
                                return <div className="counter" style={{
                                    backgroundColor: k === this.state.laserCatIndex ? "white" : "#fff6"
                                }}></div>
                            })}
                        </div>
                        <div style={{display: "flex"}}>
                            <button className={classNames("coolLink", "coolButtonLink")} onClick={() => this.decrementVarFor(laserCatContent)}>
                                &lt;
                            </button>
                            <div style={{maxWidth: "70%", display: "flexbox", flex: "100"}}>
                                <p style={{margin: "40px"}}>
                                    {laserCatContent.elements[this.state.laserCatIndex].text}
                                </p>
                            </div>
                            <button className={classNames("coolLink", "coolButtonLink")} onClick={() => this.incrementVarFor(laserCatContent)}>
                                &gt;
                            </button>
                        </div>
                </div>

                <div
                    className={classNames("gradientBox", "redGradientBox")}
                    style={{
                        textAlign: "center",
                        background: fadeGradient
                    }}>
                        <h3>The Little Monster In Your Closet</h3>
                        <h4 style={{fontWeight: 10, color: "#fff6"}}>{monsterContent.team}</h4>
                        <h5 style={{fontWeight: 10, color: "#fff6"}}>{monsterContent.roles}</h5>
                        <img className="staticImage" style={{height: "100%", width: "auto", maxHeight: "350px"}} src = {monsterContent.elements[this.state.monsterIndex].img} alt = "Monster Showcase"/>
                        <div className="countContainer">
                            {monsterContent.elements.map((_, k) => {
                                return <div className="counter" style={{
                                    backgroundColor: k === this.state.monsterIndex ? "white" : "#fff6"
                                }}></div>
                            })}
                        </div>
                        <div style={{display: "flex"}}>
                            <button className={classNames("coolLink", "coolButtonLink")} onClick={() => this.decrementVarFor(monsterContent)}>
                                &lt;
                            </button>
                            <div style={{maxWidth: "70%", display: "flexbox", flex: "100"}}>
                                <p style={{margin: "40px"}}>
                                    {monsterContent.elements[this.state.monsterIndex].text}
                                </p>
                            </div>
                            <button className={classNames("coolLink", "coolButtonLink")} onClick={() => this.incrementVarFor(monsterContent)}>
                                &gt;
                            </button>
                        </div>
                </div>
                <div
                    className={classNames("gradientBox", "redGradientBox")}
                    style={{
                        textAlign: "center",
                        background: fadeGradient
                    }}>
                        <h3>System Sync</h3>
                        <h4 style={{fontWeight: 10, color: "#fff6"}}>{sysyContent.team}</h4>
                        <h5 style={{fontWeight: 10, color: "#fff6"}}>{sysyContent.roles}</h5>
                        <img className="staticImage" style={{height: "100%", width: "auto", maxHeight: "350px"}} src = {sysyContent.elements[this.state.sysyIndex].img} alt = "System Sync Showcase"/>
                        <div className="countContainer">
                            {sysyContent.elements.map((_, k) => {
                                return <div className="counter" style={{
                                    backgroundColor: k === this.state.sysyIndex ? "white" : "#fff6"
                                }}></div>
                            })}
                        </div>
                        <div style={{display: "flex"}}>
                            <button className={classNames("coolLink", "coolButtonLink")} onClick={() => this.decrementVarFor(sysyContent)}>
                                &lt;
                            </button>
                            <div style={{maxWidth: "70%", display: "flexbox", flex: "100"}}>
                                <p style={{margin: "40px"}}>
                                    {sysyContent.elements[this.state.sysyIndex].text}
                                </p>
                            </div>
                            <button className={classNames("coolLink", "coolButtonLink")} onClick={() => this.incrementVarFor(sysyContent)}>
                                &gt;
                            </button>
                        </div>
                </div>
                <div
                    className={classNames("gradientBox", "redGradientBox")}
                    style={{
                        textAlign: "center",
                        background: fadeGradient
                    }}>
                        <h3>H2Ω - Ohm's Lab</h3>
                        <h4 style={{fontWeight: 10, color: "#fff6"}}>{h2oContent.team}</h4>
                        <h5 style={{fontWeight: 10, color: "#fff6"}}>{h2oContent.roles}</h5>
                        <img className="staticImage" style={{height: "100%", width: "auto", maxHeight: "350px"}} src = {h2oContent.elements[this.state.h2oIndex].img} alt = "H2Ohm Showcase"/>
                        <div className="countContainer">
                            {h2oContent.elements.map((_, k) => {
                                return <div className="counter" style={{
                                    backgroundColor: k === this.state.h2oIndex ? "white" : "#fff6"
                                }}></div>
                            })}
                        </div>
                        <div style={{display: "flex"}}>
                            <button className={classNames("coolLink", "coolButtonLink")} onClick={() => this.decrementVarFor(h2oContent)}>
                                &lt;
                            </button>
                            <div style={{maxWidth: "70%", display: "flexbox", flex: "100"}}>
                                <p style={{margin: "40px"}}>
                                    {h2oContent.elements[this.state.h2oIndex].text}
                                </p>
                            </div>
                            <button className={classNames("coolLink", "coolButtonLink")} onClick={() => this.incrementVarFor(h2oContent)}>
                                &gt;
                            </button>
                        </div>
                </div>
                <div
                    className={classNames("gradientBox", "redGradientBox")}
                    style={{
                        textAlign: "center",
                        background: fadeGradient
                    }}>
                        <h3>A Christmas Thing</h3>
                        <h4 style={{fontWeight: 10, color: "#fff6"}}>{xmasContent.team}</h4>
                        <h5 style={{fontWeight: 10, color: "#fff6"}}>{xmasContent.roles}</h5>
                        <img className="staticImage" style={{height: "100%", width: "auto", maxHeight: "350px"}} src = {xmasContent.elements[this.state.xmasIndex].img} alt = "Christmas Thing Showcase"/>
                        <div className="countContainer">
                            {xmasContent.elements.map((_, k) => {
                                return <div className="counter" style={{
                                    backgroundColor: k === this.state.xmasIndex ? "white" : "#fff6"
                                }}></div>
                            })}
                        </div>
                        <div style={{display: "flex"}}>
                            <button className={classNames("coolLink", "coolButtonLink")} onClick={() => this.decrementVarFor(xmasContent)}>
                                &lt;
                            </button>
                            <div style={{maxWidth: "70%", display: "flexbox", flex: "100"}}>
                                <p style={{margin: "40px"}}>
                                    {xmasContent.elements[this.state.xmasIndex].text}
                                </p>
                            </div>
                            <button className={classNames("coolLink", "coolButtonLink")} onClick={() => this.incrementVarFor(xmasContent)}>
                                &gt;
                            </button>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Gamedesign;