import { Component } from 'preact';
import "./Games.css"

import cartridgeImage from "../images/cartridge.png"
import img_eh from "../images/thumbnails_eventhorizon.png"
import img_mar from "../images/thumbnails_hotelmarcel.png"
import img_fad from "../images/thumbnails_fadingsignal.png"
import img_sal from "../images/thumbnails_sallysscribbles.png"
import img_bog from "../images/thumbnails_bogjog.png"
import img_car from "../images/thumbnails_laserkart.png"

class Games extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gameidx: -1,
            gconClass: "games_container",
            gameActive: false,
            fullscreen: false,
        }
    }

    games = [{
        name: "EVENT HORIZON",
        aspect: "16/9",
        src: "https://itch.io/embed-upload/8247043?color=000000",
        width: "1280px",
        widthNum: 1280,
        height: "740px",
        url: "https://enjl.itch.io/event-horizon",
        bg: "https://img.itch.zone/aW1hZ2UvMjA1OTk1Mi8xMjI3MjU2MC5naWY=/original/z0GcRQ.gif",
        children: <a href="https://enjl.itch.io/event-horizon">Play EVENT HORIZON on itch.io</a>,
        cart: cartridgeImage,
        thumb: img_eh,
        description: <div>
            LASER WING! Your help is needed. An alien invasion has befallen our world. Please, save us!<br/><br/>Use your built-in weapon to take down the onslaught of enemies, as well as 7 hand-crafted bosses.<br/><br/>When in a pinch, activate your black hole power to absorb enemy bullets. Use the stored up energy to deliver a powerful beam that can take down foes in a single shot! But be careful, as too much pressure can leave your ship with lasting damage.<br/><br/>EVENT HORIZON is a 3-stage shoot-em-up, created in 10 days for Bullet Hell Jam 2023.
        </div>
    },
    {
        aspect: "4/3",
        src: "https://itch.io/embed-upload/5716456?color=000000",
        width: "800px",
        widthNum: 800,
        name: "Hotel Marcel",
        height: "620px",
        url: "https://enjl.itch.io/hotel-marcel",
        bg: "https://img.itch.zone/aW1hZ2UvMTUxMTIxMC84ODEwMDcyLnBuZw==/original/dCztgB.png",
        children: <a href="https://enjl.itch.io/hotel-marcel">Play Hotel Marcel on itch.io</a>,
        cart: cartridgeImage,
        thumb: img_mar,
        description: <div>
            <img width={"100%"} className="whiteImg" src="https://img.itch.zone/aW1nLzg4MTAyMTUucG5n/original/0uGAjV.png"></img>
            Created in 8 hours for a private game jam with friends.<br/><br/>Controls:<br/><br/><br/>WASD/Arrows/Left stick (Left, right) - Move, adjust difficulty in the main menu<br/>Space/Gamepad buttons - Shoot, Reload, Start Game<br/>1, 2/Shoulder buttons - Adjust opacity of inactive elements
        </div>
    },
    {
        aspect: "16/9",
        src: "https://itch.io/embed-upload/7562320?color=000000",
        width: "1280px",
        widthNum: 1280,
        name: "Fading Signal",
        height: "740px",
        url: "https://enjl.itch.io/hotel-marcel",
        bg: "https://img.itch.zone/aW1hZ2UvMTk2MzA0NC8xMTU0NzU2Ni5naWY=/250x600/epfRfo.gif",
        children: <a href="https://enjl.itch.io/fading-signal">Play FADING SIGNAL on itch.io</a>,
        cart: cartridgeImage,
        thumb: img_fad,
        description: <div>
            Explore the depths of a faraway world. Your mission is to restore the signal of the northern radio tower. Explore 5 distinct areas, enemies lurking behind every corner.<br/>Controls<br/>WASD/Arrows - Move<br/>Shift + WASD/Arrows - Shotgun<br/>Space - Rest<br/>Backspace - Dequeue action<br/>Enter - Fill queue with Rests<br/><br/>Supports mouse as well as gamepad.<br/><br/>Created in 7 days for 7DRL Jam 2023.
        </div>
    },
    {
        aspect: "16/9",
        src: "https://itch.io/embed-upload/8302751?color=000000",
        width: "1280px",
        widthNum: 1280,
        name: "Sally's Scribbles",
        height: "740px",
        url: "https://enjl.itch.io/sallys-scribbles",
        bg: "https://img.itch.zone/aW1hZ2UvMTczMDY4MC8xMDE5MDE1MC5naWY=/250x600/JpOP22.gif",
        children: <a href="https://enjl.itch.io/sallys-scribbles">Play Sally's Scribbles on itch.io</a>,
        cart: cartridgeImage,
        thumb: img_sal,
        description: <div>
            Originally created in 72h for Ludum Dare 51. Theme: "Every 10 Seconds"<br/><br/>You take the role of Sally, who is about to start her own art business. Draw pictures at rapid speeds to cover your day-to-day living expenses while growing in popularity.<br/><br/>Draw with the left mouse button, or with a pen tablet. Touch should work, too!
        </div>
    },
    {
        aspect: "16/9",
        src: "https://itch.io/embed-upload/5402843?color=000000",
        width: "768px",
        widthNum: 768,
        name: "Barry's Bog Jog",
        height: "452px",
        url: "https://enjl.itch.io/barrys-bog-jog",
        bg: "https://img.itch.zone/aW1hZ2UvMTQzNjM0NC84Mzc3NzY5LmdpZg==/250x600/PAy%2BWn.gif",
        children: <a href="https://enjl.itch.io/barrys-bog-jog">Play Barry's Bog Jog on itch.io</a>,
        cart: cartridgeImage,
        thumb: img_bog,
        description: <div>
            Take control of Barry, a loveable little guy on his daily trip deep into the nearby bog.<br/>This is my submission to 7DRL 2022.<br/><br/>CONTROLS!<br/>Arrow Keys: Move<br/>Q: Move diagonally<br/>A: Aim<br/>E: Inventory<br/>S: Cancel (menus)<br/>D: Dash<br/>Space: Attack, Select (Menus)
        </div>
    },
    {
        aspect: "16/9",
        src: "https://itch.io/embed-upload/5666942?color=000000",
        width: "640px",
        widthNum: 640,
        name: "Laser Kart",
        height: "380px",
        url: "https://enjl.itch.io/laser-kart",
        bg: "https://img.itch.zone/aW1hZ2UvMTUwMDU1MS84NzQ3NDEwLmdpZg==/250x600/%2B9CSjs.gif",
        children: <a href="https://enjl.itch.io/laser-kart">Play Laser Kart on itch.io</a>,
        cart: cartridgeImage,
        thumb: img_car,
        description: <div>
            Drift and swerve through 2 stages packed to the brim with hostile vehicles and their bullets.<br/>Made in 9 days for Bullet Hell Jam 2022.
        </div>
    }]

    fixGameZoom = function(self) {
        if (self.state.gConClass == "games_container_full") return;
        
        let gamecon = document.getElementById("gameCon")
        let g = self.games[Math.max(self.state.gameidx, 0)]
        let scale = gamecon.offsetWidth/g.widthNum
    
        let game = document.getElementById("game")
        if (game !== null) {
            game.style.transform = 'scale(' + scale + ')'
        }
        let pb = document.getElementById("playButton")
        if (pb !== null) {
            pb.style.backgroundImage = "url(" + g.bg + ")"
        }
    }

    updateGame = function(idx) {
        let gamecon = document.getElementById("gameCon")
        let pb = document.getElementById("playButton")
        let g = this.games[Math.max(idx, 0)]
        if (pb !== null) {
            pb.style.backgroundImage = "url(" + g.bg + ")"
        }
        gamecon.style.aspectRatio = this.games[idx].aspect
        this.setState({
            gameidx: idx,
            gameActive: false,
        })
        this.fixGameZoom(this)
    }

    updateDimensions(self) {
        self.fixGameZoom(self)
    }

    componentDidUpdate() {
        this.fixGameZoom(this)
    }

    onFullscreen(self) {
        let fullscr = !self.state.fullscreen
        console.log(fullscr)
        if (fullscr) {
            self.setState({gConClass: "games_container_full", fullscreen: fullscr})
    
            let game = document.getElementById("game")
            game.style.transform = 'scale(1)'
        } else {
            self.setState({gConClass: "games_container", fullscreen: fullscr})
    
            let game = document.getElementById("game")
            let gamecon = document.getElementById("gameCon")
            let g = self.games[Math.max(self.state.gameidx, 0)]
            let scale = gamecon.offsetWidth/g.widthNum
            game.style.transform = 'scale(' + scale + ')'
        }
    }

    componentDidMount() {
        this.updateGame(0)
        let self = this;
        window.addEventListener('resize', () => self.updateDimensions(self))
        document.addEventListener('fullscreenchange', () => self.onFullscreen(self))
        document.addEventListener('mozfullscreenchange', () => self.onFullscreen(self))
        document.addEventListener('webkitfullscreenchange', () => self.onFullscreen(self))
        document.addEventListener('msfullscreenchange', () => self.onFullscreen(self))
    }
    componentWillUnmount() {
        let self = this;
        window.removeEventListener('resize', () => self.updateDimensions(self))
        document.removeEventListener('fullscreenchange', () => self.onFullscreen(self))
        document.removeEventListener('mozfullscreenchange', () => self.onFullscreen(self))
        document.removeEventListener('webkitfullscreenchange', () => self.onFullscreen(self))
        document.removeEventListener('msfullscreenchange', () => self.onFullscreen(self))
    }

    render() {
        let self = this;
        let g = this.games[Math.max(this.state.gameidx, 0)]
        return (
        <div style={{maxWidth: "1400px", margin: "auto"}}>
            <div className={this.state.gconClass} id="gameCon">
                {(this.state.gameActive === true) ? <iframe id="game" frameborder="0" src={g.src} 
                width={g.width} height={g.height}>{g.children}</iframe>
                : <div className={"playButton"} id={"playButton"}>
                    <button onClick={() => this.setState({gameActive: true})} className={"playButtonInner"}>
                    </button>
                </div>}
            </div>
            <h2 className="gametitle">
                <br/>
                {g.name}
            </h2>
            <div className={"darkenedDesc"}>
                <div className={"darkenedDescText"}>
                    {g.description}
                </div>
            </div>

            <div className={"cartSection"}>
                {this.games.map((v,k) => {
                    return <button onClick={() => this.updateGame(k)} className={k == self.state.gameidx ? "gamesButtonb" : "gamesButton"} >
                        <img src={v.thumb} className={"gamesThumb"}/>
                    </button>
                    })}
            </div>
        </div>
        )
    }
}

export default Games;