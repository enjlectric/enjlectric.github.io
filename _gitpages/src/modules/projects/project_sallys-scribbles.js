import React from 'react';
import IMG_scribbles_0 from './../../images/p_scribbles_0.png'
import IMG_scribbles_1 from './../../images/p_scribbles_1.png'
import IMG_scribbles_2 from './../../images/p_scribbles_0.gif'
import IMG_scribbles_3 from './../../images/p_scribbles_2.png'
import IMG_scribbles_4 from './../../images/p_scribbles_3.png'
import VID from './../../images/vid_scribbles.mp4'

class Project extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <h1 style={{margin: "40px auto"}}>
                    Sally's Scribbles
                </h1>
                <video controls height="300px" width="400px" alt="Main video of the game">
                    <source src={VID} ></source>
                </video>
                <h2>
                    Overview
                </h2>
                <p>
                    Sally's Scribbles is a drawing game in which you have to draw the images your customers have in mind within a ten second time limit. The games was originally built in 3 days for Ludum Dare 51 with the theme of "every ten seconds", where it got 22nd place overall.
                </p>
                <img src={IMG_scribbles_0} alt="A screenshot showcasing the unity scene view of the main game scene."/>
                <h6>Sally's Scribbles is set up entirely within Unity's UGUI framework; a blessing for object alignment, but a curse for effects like particles, which ended up unused.</h6>
                <h2>
                    Balancing
                </h2>
                <p>
                    At release, Sally's Scribbles featured 200 prompts, 20 customers and a fairly steep rise in difficulty as the days progressed, due to a strict deadline. We opted to make the start of the game intentionally easy so players could see all the game has to offer during the judging period, which I think worked out in the game's favour. The drawing recognition algorithm used a mix of position-based matching and calculating the sum of pixels of certain colors to compare against the reference image. It worked reasonably well, but was heavily exploitable through mindless scribbling.
                </p>
                <p>
                    For the Yearlong Update, which was released a few months after the jam concluded, I looked into various methods which are used to compare images in professional applications. Exact matching courtesy of OpenCV turned out to be a dead-end due to the chaos inherent in user-generated input, as well as the matching algorithm's distaste for multicolor input. It was brutally accurate, giving low scores to every image I fed it. Hashing wouldn't give satisfying results for similar reasons.
                </p>
                <p>
                    In the end, I turned back to the jam version's approach and refined it. To make the matching more lenient and improve speed, I changed comparison to happen on a smaller image. The new version of the algorithm also puts more emphasis on correct color choice, disqualifying mindless scribbling in black on an all-green image. It also pays closer attention to the quadrants of the image the player is drawing in, as well as how far the player is over or under the ideal amount of ink necessary per color to represent the reference image. Each check leans toward leniency to give players who simply draw poorly a decent score, but players intentionally causing a mess on the canvas are a lot less likely to obtain good scores from the matching algorithm and will no longer make significantly more money than players playing the game earnestly.
                </p>
                <p>
                    A flat cost per canvas, to discourage "re-rolls", was also introduced in the new update. Alongside number tweaking and temporary living expenses, the day-to-day gameplay feels a lot smoother while still having some surprises in store. Players that do well might find themselves giving up 1% of their earnings in taxes earlier than players just scraping by.
                </p>
                <h2>
                    Customers and prompts
                </h2>
                <img src={IMG_scribbles_1} alt="A screenshot showing the Scriptable Object for the character John."/>
                <h6>Sally's neighbour John is really into birds and long walks on the beach.</h6>
                <p>
                    The biggest appeal of Sally's Scribbles is its lovable cast of characters, a lot of whom reference past material the team has worked on or ideas we considered amusing and thus included. The "Dracula" character who only ever requests paintings of numbers is a nod to the famous Count from Sesame Street, and the duo of Broccoli Steven (who only requests drawings of broccoli) and Evil Steven (who only requests drawings of Broccoli Steven) wear overalls that resemble those of a famous red plumber and his evil counterpart. Every customer has their own preferences in topics, or tags, and each prompt has a set of tags they are associated with.
                </p>
                <img src={IMG_scribbles_2} alt="An animated gif showing how a guessable prompt is added."/>
                <h6>The Scriptable Object for prompts automatically assigns the correct colors. Tags and recolors can be added with ease.<br/>The game has 372 guessable prompts in total, not counting recolors and flips.</h6>
                <p>
                    When it comes to the Yearlong Update, there were now customers who had to show up during specific seasons and events, like Halloween or Thunderstorms, with new interests not covered by the initial set. Our set of tags grew from roughly 20 to over 70, and the number of prompts grew with it. To further increase the variety in customer requests, I added support for prompts to be recolored and flipped, so that when the knight appears for the second time of the day, the new sword he requests might have a blue hilt and be facing the other way.
                </p>
                <h2>
                    Save Data
                </h2>
                <img src={IMG_scribbles_3} alt="An image showing a save game JSON."/>
                <img src={IMG_scribbles_4} alt="An image showing the inspector for a save game variable."/>
                <h6>The game's Save Manager saves a list of keys, and a list of string values. The values are resolved at load time by the type that registered them.<br/>There is no connection between a save game variable and any game object.</h6>
                <p>
                    This being the first game I have made on my own time with the need for save data, I had to build a system to support it. When building the Yearlong Update, I was very interested in <a target="_blank" rel='noreferrer' href = "https://www.youtube.com/@aarthificial">aarthificial's Astortion devlog series</a> and the systems they came up with. Inspired by their "fact" system, where elementary Scriptable Objects are created for variables the game knows to be true in the current moment (Current Day: 5, Money: $9015.60), I have built something similar that allows such fact Scriptable Objects to be pooled into a list and saved to JSON, and later re-instantiated into the correct objects. Variables are indexed by their name, and can be of any type, thanks to <a target="_blank" rel='noreferrer' href="https://github.com/SolidAlloy/GenericUnityObjects">SolidAlloy's generic unity objects</a>.
                </p>
                <p>
                    Other scripts use these Scriptable Objects by referencing them in the inspector and then either accessing their value or registering themselves to an OnChange handler. In addition to this, the Scriptable Objects support both "production" and "debug" values, whose use can be toggled via a button in the editor. I've found myself often hacking in preprocessor instructions in past projects to facilitate testing, so with the use of fact variables I saw an opportunity to cut down on that antipattern. The finished script is visible on the project's <a target="_blank" rel='noreferrer' href="https://github.com/enjlectric/SallysScribbles/blob/main/Assets/Toybox/Scripts/ScriptableObjects/GameValue.cs">github page</a>. Needless to say, this system is one I will be carrying over into new projects, as it is comfortable to work with and decouples objects effectively.
                </p>
                <span>Sally's Scribbles is available for free on: <a target="_blank" rel='noreferrer' href="https://enjl.itch.io/sallys-scribbles">Itch.io</a></span>
            </div>
        )
    }
}

export default Project;