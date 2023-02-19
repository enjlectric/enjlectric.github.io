import React from 'react';
import IMG_Flurret_0 from './../../images/p_flurret_0.gif'
import IMG_Flurret_1 from './../../images/p_flurret_1.gif'
import IMG_Flurret_2 from './../../images/p_flurret_2.gif'
import IMG_Flurret_3 from './../../images/p_flurret_3.png'

class Project extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <h1 style={{margin: "40px auto"}}>
                    Project Flurret (WIP)
                </h1>
                <h2>
                    Overview
                </h2>
                <p>
                    <span>Project Flurret</span> is an ongoing side project of mine. It's a 2D side-scrolling metroidvania with a focus on exploration and friendship. It's very early into development and as such the focus of this post will be mostly revolving systems I have built for it.
                </p>
                <img src={IMG_Flurret_3} alt="A screenshot showing various sprites."/>
                <h6>Meet the friends!</h6>
                <h2>
                    Areas
                </h2>
                <p>
                    When it comes to creating metroidvanias in Unity, there are several approaches one can go with. One grants every room its own scene, linking them together via a world map management system. Benefits of this approach include its modularity, which is especially helpful when working in teams. Another approach is to put each larger area into a dedicated scene, resulting in a world that is on one hand more rigid, but on the other hand more fluent.
                </p>
                <p>
                    Since I am working on this project alone and like to have a visual overview over an area while working on it, I have chosen the latter approach for this project's world. This decision came with a trade-off of having to implement my own systems for camera zones, enemy spawns and parallaxing, which I have done.
                </p>
                <img src={IMG_Flurret_0} alt="A gif showing a red cliff area."/>
                <h6>Mysterious landmarks will be an integral part to Project Flurret.</h6>
                <h2>
                    Parallaxing backgrounds
                </h2>
                <p>
                    With rooms physically bordering one another, there was a risk of viewing background elements of adjacent rooms when they move in the background. It would be quite sub-optimal if the cut-off image of a right-aligned cave entrance was visible inside the cave. To eliminate this issue, I have written a script which takes parallaxing background definitions from Scriptable Objects and generates a set of sprites parented to a Sprite Mask.
                </p>
                <p>
                    The generated layers are controlled by the top-level parent and feature options for alignment, scroll speed, number of repetitions and offsets. An associated GameObject can be optionally used to add things like Particle Effects to a layer. In terms of runtime changes, the system is so far weak. I am intending to augment it with per-layer accessors to allow for easy runtime manipulation.
                </p>
                <img src={IMG_Flurret_1} style={{maxWidth: "800px"}} alt="A gif showing the inner workings of the parallax system."/>
                <h6>Moving the parallax zone reveals how it works.</h6>
                <h2>
                    Interactive platforms
                </h2>
                <p>
                    Something I consider quite integral to platformers is whether the world feels alive. This isn't solely restricted to the placement of friends, enemies, critters and flora, but also the way in which the geometry itself behaves and reacts to the player's actions. Oscillating, swinging, falling, breaking, disappearing and rotating platforms are important components in breathing life into the world. Additionally, these elements have to be easy to generate and place, to minimize the amount of time spent on fiddling with individual stage elements.
                </p>
                <p>
                    Together with some friends I have devised a scene which streamlines the creation process of such platforms. The <span>platform editor</span> scene consists of a set of tilemaps parented to a script that, upon hitting the save button, reads out the tilemap information and assembles a sprite tree from it, using a compound collider for each collision layer. This "Block Set" can then simply be dragged into the scene and adorned with movement scripts and triggers.
                </p>
                <img src={IMG_Flurret_2} style={{maxWidth: "800px"}} alt="A gif showing the block set creator in action."/>
                <h6>Todo: Make the blockset editor accessible from anywhere for extra convenience!</h6>
                <h2>
                    Character Controller
                </h2>
                <p>
                    For the initial prototyping, the player character used a rigidbody-based system with hard-set velocity values. Upon the introduction of moving platforms, this temporary system swiftly showed its weaknesses and I began work on a proper character controller. The current controller uses <span>orthogonal boxcasts</span> to determine its touch points and invokes onCollision-Events on touching elements that implement the ICollidable interface. As per a friend's recommendation, moving platforms are responsible for handling the motion of attached entities themselves, invoking a TryMove-Function on the entity which returns whether or not the entity was able to move the intended distance (for crush checks).
                </p>
                <p>
                    Ironing out the character controller's edge cases is my current objective in this project, but my todo list is long and I'm looking forward to sharing more about the development process.
                </p>
            </div>
        )
    }
}

export default Project;