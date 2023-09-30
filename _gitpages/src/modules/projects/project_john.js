import React from 'react';
import IMG_John_0 from './../../images/p_john_0.png'
import IMG_John_1 from './../../images/p_john_1.png'
import IMG_John_2 from './../../images/p_john_2.png'
import IMG_John_3 from './../../images/p_john_3.png'
import IMG_John_4 from './../../images/p_john_4.png'
import IMG_John_5 from './../../images/p_john_5.png'
import VID_John_0 from './../../images/p_john_0.mp4'
import VID from './../../images/vid_john.mp4'

class Project extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <h1 style={{margin: "40px auto"}}>
                    My Neighbour, John
                </h1>
                <video controls height="300px" width="400px" alt="Main video of the game">
                    <source src={VID} ></source>
                </video>
                <h2>Overview</h2>
                <p>
                    My Neighbour, John is a first person exploration game which I developed by myself for a private weekend-long game jam with the theme "Wave". The game has two primary verbs: Picking up items and waving hello. Over the course of the game's development during the jam weekend and beyond, the project fell victim to several distractions. These resulted in a lot of valuable experience gained at the cost of an overscoped product side-tracked due to lack of experience and confidence with the tools used.
                </p>
                <video controls height="300px" width="400px" alt="Smashing John's window">
                    <source src={VID_John_0} ></source>
                </video>
                <h6>The normally ungreetable neighbour, John, becomes greetable if you smash his window.</h6>
                <h2>The World</h2>
                <p>
                    The game's world evolved was built with the premise of surprising results when greeting various things in mind. Initial ideas included gameplay centered around a bus stop, with a time limit to greet as many people as possible before the bus arrived. Due to the world's iterative design, the game gradually steered away from that goal and became more of a sandbox, in which the player inhabits an ever-so-slightly off seeming town, with its inconspicuous sky diamond and sky-piercing tower.
                </p>
                <img src={IMG_John_1} alt="A panorama of the world."/>
                <img src={IMG_John_3} alt="A panorama of the world."/>
                <img src={IMG_John_4} alt="A panorama of the world."/>
                <img src={IMG_John_5} alt="A panorama of the world."/>
                <h6>The low-res aesthetic of the game was accomplished by projecting a low-res camera onto a UI render texture, to maintain the intended resolution at any scale.</h6>
                <p>
                    As the world grew, these new landmarks became a more interesting avenue for exploration than scripting specific interactions with various incarnations of John, and the world's broad strokes received a corresponding larger level of detail than every individual component. The game's focus shifted from simply greeting many Johns, to an easter egg hunt of finding as many unexpectedly greetable entities as possible. The game's quiet and rough ambience supports the somewhat unsettling undertones brought forth by the off-feeling environment, which makes it a world I hope to revisit with more experience in the future.
                </p>
                <img src={IMG_John_2} alt="Greeting the noble golem by the seaside."/>
                <h6>Greeting the noble golem by the seaside.</h6>
                <h2>Modeling</h2>
                <p>
                    As is evident, I don't have a lot of experience in 3D modeling. For this game, I have tried using <span className="hl">UModeler</span> for the first time. I ran into all the expected issues of UV unwrapping, hotkeys, and meshes falling apart due to a geometry-breaking operation, as well as some unexpected issues like trying to properly pivot meshes made with the tool. Strapped for time, I often overcame these issues via brute force, taking notes on operations to return to and figure out properly. Operations such as texture tiling were a complete mystery to me during the jam, but are now second nature, so I consider this experience a success in that regard.
                </p>
                <img src={IMG_John_0} style={{maxWidth:"800px"}} alt="A room made in UModeler after the game's completion."/>
                <h6>A room I made with UModeler after the game's completion.</h6>

                <span className="hl">My Neighbour, John is available for free on: <a target="_blank" rel='noreferrer' href="https://enjl.itch.io/my-neighbour-john">Itch.io</a></span>
            </div>
        )
    }
}

export default Project;