import React from 'react';
import IMG_Cat_1 from './../../images/gd_lc_1.png'
import IMG_Cat_3 from './../../images/gd_lc_3.png'
import IMG_Cat_6 from './../../images/gd_lc_6.png'
import IMG_Cat_7 from './../../images/gd_lc_7.png'
import IMG_Cat_8 from './../../images/gd_lc_8.png'
import ShowcaseGif from './../../images/laserCatShowcase.gif'
import ShowcaseGif2 from './../../images/p_Cat_Gif_2.gif'
import VID from './../../images/vid_lasercat.mp4'

class Project extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <h1 style={{margin: "40px auto"}}>
                    Laser Cat
                </h1>
                <video controls height="300px" width="400px" alt="Main video of the game">
                    <source src={VID} ></source>
                </video>
                <h2>Overview</h2>
                <p>
                    Laser Cat is a top-down shoot-em-up in which you play as a cat taking down a roomba-based army. The game is a solo project of mine and was created for the GDN Jam 2021.

                    Laser Cat placed <span className="hl">2nd in the overall and art scores</span>, and <span className="hl">1st in gameplay</span>. 
                </p>
                <img src={IMG_Cat_1} alt="A screenshot showing the first screen in the game."/>
                <h6>To start the game: Shoot the button!</h6>
                <p>
                    The jam's theme was "Rebirth", which in this game manifests itself as a mix between a lives-mechanic and a skill tree. Whenever the player dies and expends one of their <span className="hl">feline nine lives</span>, they gain an additional skill point which they may choose to spend to upgrade one type of shot. In addition to the inherent choice of a skill build, this also introduces the option for players to intentionally get hit early on to increase their DPS output in tough stages, in exchange for less lives later on. There is no way to gain extra lives beyond the initial 9.
                </p>
                <img src={IMG_Cat_6} alt="A screenshot showing the game's skill menu."/>
                <h6>Zany mode is a unique kind of side-grade, adding chaos to your shots' firing directions.</h6>
                <h2>Levels</h2>
                <p>
                    Over the course of the game's development, I have created eight levels, two of which are boss fights. The non-boss levels, in order, are dedicated to general gameplay elements, askew angles of camera movement, the "Quadcopter" enemy, the "Train" enemy, the "Balloon" enemy, and backwards camera movement.
                </p>
                <img src={IMG_Cat_3} alt="The first boss: Roomba Prince."/>
                <img src={IMG_Cat_7} alt="The second boss: Laser King."/>
                <h6>The bosses <i>Roomba Prince</i> and <i>Laser King</i> are ready to rumble!</h6>
                <p>
                    Under the hood, the systems I have developed for setting up levels are with <span className="hl">speed and flexibility</span> in mind. Each wave is an additively loaded scene with a single top-level GameObject which moves around the camera according to Camera Triggers that take effect when they scroll on-screen. Music and enemy spawns are handled via on-screen events as well.
                </p>
                <img src={ShowcaseGif} alt="A GIF of the levels behind the scenes."/>
                <h6>The green squares visible in the first half of the GIF represent various triggers.</h6>
                <p>
                    To aid the game's replayability, I have strung the scenes together in a loop, where Wave 9 onwards sees the player revisiting the previous levels. However, <span className="hl">they are not exactly the same</span>. On top of linear score and HP scaling for enemies, the spawners are configured to have lower and upper spawn bounds. This allows me to swap out entire enemy waves with the spawner only having to read the iteration count variable. For a practical example: In iterations 3 and 4, players fight two of each boss. In iteration 5 onward, players fight three of each boss.
                </p>
                <p>
                    The game's structure is defined via Unity's <span className="hl">Scriptable Objects</span>. The data-driven approach made it easy to tweak settings such as scaling factors on the fly and allowed me to effortlessly add new global elements such as projectiles, sound effects and death effects.
                </p>
                <img src={IMG_Cat_8} alt="The game's modular naming system."/>
                <h6>On repeat runs, level names are slightly altered. Wave names only repeat word-for-word after about 200 waves.</h6>
                <h2>Difficulty highlight: Sprite-based font</h2>
                <p>
                    Something that caused a lot of unexpected trouble for me was working with a <span className="hl">sprite-based font</span> in TextMeshPro. This is the first time I've tried using a sprite-based font in Unity, and I find it quite cumbersome, especially after using configuration files where I was able to simply supply a glyph map and optional per-glyph settings.
                </p>
                <p>
                    I spent quite a bit of time trying to find the correct scaling parameters and trying to get the text to show up in the game at all. In the end, I didn't quite manage to get the baseline, ascent and descent settings set up correctly, and opted to hack around the offsets to save time before the deadline. I also had to assign the unicode values to the glyphs twice, because the font asset forgot my settings after I added more glyphs to the sprite sheet.
                </p>
                <p>
                    In a future project, I intend to tackle this problem in a less time-constrained environment to figure out how this is intended to be done. However, for the time being I have had good success with using Unity's built-in text components with pixel perfect pre-existing fonts. 
                </p>
                <img src={ShowcaseGif2} alt="The game's modular naming system."/>
                <h6>Annoyingly, inputting the glyphs' corresponding unicode values doesn't work unless you click into a different box before closing the foldout.</h6>

                <span className="hl">Laser Cat is available for free on: <a target="_blank" rel='noreferrer' href="https://enjl.itch.io/laser-cat">Itch.io</a></span>
            </div>
        )
    }
}

export default Project;