import React from 'react';
import VID from './../../images/vid_inkjet.mp4'

class Project extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <h1 style={{margin: "40px auto"}}>
                    Inkjet
                </h1>
                <video controls height="300px" width="400px" alt="Main video of the game">
                    <source src={VID} ></source>
                </video>
                <h2>
                    Overview
                </h2>
                <p>
                    Inkjet is a small shoot-em-up game in which you fight a boss. It was created within a weekend for a small game jam among friends.
                </p>
                <h2>
                    Game Mechanics
                </h2>
                <p>
                    Inkjet's main mechanic is that of color strengths and weaknesses. Being tinted a a certain colour makes you weak to complimentary colours and immune to your own colour. This mechanic can be used offensively to deal extra damage to the boss, or defensively to reduce the damage received. Beyond this, Inkjet uses the same systems as Laser Kart and was thus quickly developed.
                </p>
                <p>
                    The color mechanic in its implementation, despite being very leniently implemented, struggles from the breakneck pace of the game. It is difficult to color-pick a new color in the middle of the action, and not in the satisfying manner. Similar mechanics that may be more simple to control include Ikaruga's color change or Crosscode's elemental shift, which are intuitive thanks to not relying on a constant in an ever-changing environment. I will put extra care into the intuitiveness of such elemental change mechanics in future titles.
                </p>
                <span className="hl">Inkjet is available for free on: <a target="_blank" rel='noreferrer' href="https://enjl.itch.io/inkjet">Itch.io</a></span>
            </div>
        )
    }
}

export default Project;