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
                    Games with Jellingfish Games
                </h1>
                <video controls height="300px" width="400px" alt="Main video of the game">
                    <source src={VID} ></source>
                </video>
                <h2>
                    Overview
                </h2>
                <p>
                    I have aided in the development of Jellingfish Games' games "Mr. Final Boss" (Ludum Dare 50) and "Dicemask" (GMTK Game Jam 2022), each completed within a weekend. For both projects, my role was systems programmer and front-end programmer in charge of UI and linking the game together. When the 10+ persons team turned out to be leaderless halfway through each jam, I also took up management duties to try and hold the projects together until the deadline.
                </p>
                <img src={IMG_sysy_0} alt="A screenshot showcasing the player characters."/>
                <h6>Each player controls a small robot that can morph into a ball.</h6>
                <h2>
                    Learning experience
                </h2>
                <p>
                    Both projects were subject to extreme overscoping in the face of being handled by a large team of skilled individuals. This environment made it easy for people to overestimate the amount of work that can get done and subsequently led to a very stressful development cycle. When each deadline came close, I realized that the game would not be done at the current rate and put in extra effort to remind team members of the priorities and time frames with respect to milestones we have to reach. The biggest detriment was a lack of consistent documentation, which caused some of the less active team members to be out of the loop of the rapidly progressing development. Going forward, I am primed to pay close attention to pre-production in teams of this scale. Trello, mindmap documents and spreadsheets need to be set up before the jam begins and every team member needs to know where they can find game-relevant information at all times.
                </p>
                <p>
                    Another challenge during the development of Dicemask specifically was that of one of the original and more active team members feeling vocally unhappy about the game and making sure the rest of the team was aware of the opinion throughout the latter half of development; at a point where starting anew would have been a futile effort regardless. When asked to stop, they used their disproportionally large positive contributions to the game as a shield, downplaying the roles of other team members who were unable to contribute as much. I've been thinking about how to handle in-team toxicity like this ever since it happened, and I think failing to remove this person from the team as soon as signs of toxicity showed was a mistake. While it's true that the game may not have been finished in time without their help, game development should never be miserable, and sources of toxicity should be cut.
                </p>
                <p>
                    As games, I am impressed with what we managed to accomplish for both games. The fact that both are enjoyable to play in spite of the troubled development is remarkable. When it comes to the games' character, however, I wonder if we ran head-first into a "too many cooks" situation, however, where too many people with creative control prevented the game from being truly stand-out. Should I find myself in a leadership position for a larger team again, I will attempt to verify this theory by introducing a more rigid team structure and keeping up documentation and communication as outlined in the first paragraph.
                </p>
                <span>Mr. Final Boss is available for free on: <a target="_blank" rel='noreferrer' href="https://jellingfish-games.itch.io/mr-final-boss">Itch.io</a></span>
                <span>Dicemask is available for free on: <a target="_blank" rel='noreferrer' href="https://www.newgrounds.com/portal/view/project/1912516">Newgrounds.com</a></span>
            </div>
        )
    }
}

export default Project;