import { DropElement } from '../../components/DropElement';
import { Stardiv } from '../../components/Stardiv';
import { Sticker } from '../../components/Sticker';
import Sticker_Stars from '../../assets/starsticker_1.png';
import Sticker_Gradient from '../../assets/gradientsticker_1.png';
import './blogs.css';
import '../Home/style.css';
import { Component } from 'preact';
import IMG_DUCK from '../../assets/nintendo-e3.gif'
import IMG_FRIEND from '../../assets/cs_idle.gif'

export default class Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
            smartass: false,
            message: "",
            friend: false,
        }
    }

    msg(letter) {
        this.setState({message: this.state.message + letter})
    }

    add(self){
        self.setState({num: self.state.num + 1})
    }

    selectDuck(self) {
        let arr = self.state.ywCount;
        arr.push("your welcome!!")
        self.setState({ywCount: arr})
        console.log(self.state.ywCount)
    }

    color() {
        if (this.state.color >= 0) {return "(i changed the color of this block of text for you)"}
    }

    checkInput(e) {
        let isSmartass = false;
        if (e.target.value.length > 10) {
            isSmartass = "because if you hit the block at the start you think you die to the mushroom but then it HEALS YOU!!".includes(e.target.value)
        }
        this.setState({smartass: isSmartass});
        console.log(isSmartass);
    }

    toggleFriend() {
        this.setState({friend: !this.state.friend})
    }

    blueprint() {
        if (this.state.color == -1) {return "blueprint"}
        if (this.state.color == 0) {return "redprint"}
        if (this.state.color == 1) {return "greenprint"}
        if (this.state.color == 2) {return "blueprint"}
    }

    blog() {
        if (this.state.color == -1) {return "blog. You didn't even select a color!"}
        if (this.state.color == 0) {return "reg."}
        if (this.state.color == 1) {return "greeg."}
        if (this.state.color == 2) {return "blug."}
    }

    letters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "X",
        "Y",
        "Z",
        "_",
        "!",
        "?",
    ]

    render() {
        let self = this;
        return (
            <div>
                <div className="center"><h2>You are what makes your game yours</h2></div>
                <div className="blogdiv">
                    The name's Enjl. Welcome back to my blenjl. Hi, I'm Mark Brown and welcome to my deconstruction of how every level in Super Mario follows rigid theory to introduce ideas to the player and then elaborate on them. Gamers of the post-Brownian era now come pre-packaged with a surface-level understanding of setup and payoff and see themselves as capable of criticizing games on the basis of that understanding.<br/><br/>There's a form of mass delusion where people will think themselves experts by rationalizing their dislike towards a game mechanic in broad theory, but at the same time theory is rarely the reason a game enters someone's top 10 of all time. Nobody says shit like  "Super Mario Bros. is my favourite game of all time because if you hit the block at the start you think you die to the mushroom but then it HEALS YOU!!"<br/><br/>
                    Zooming out a bit, what do people like in their games? Tons of things, but rarely something you can map to theory. Here's some that I could come up with off the top of my head. Participate if you like! Select all that apply.
                    <div>
                        <input type="checkbox" style={{marginLeft: "20px"}} id="like1" name="like1" value="Like1"/>
                        <label for="like1"> Music that makes me emotional</label><br/>
                        <input type="checkbox" style={{marginLeft: "20px"}} id="like2" name="like2" value="Like2"/>
                        <label for="like2"> Boss battles that make my heart race</label><br/>
                        <input type="checkbox" style={{marginLeft: "20px"}} id="like3" name="like3" value="Like3"/>
                        <label for="like3"> Fantastic worlds that are a joy to explore</label><br/>
                        <input type="checkbox" onClick={() => self.toggleFriend()} style={{marginLeft: "20px"}} id="like4" name="like4" value="Like4"/>
                        <label for="like4"> Characters that feel like real friends/enemies</label><br/>
                        <input type="checkbox" style={{marginLeft: "20px"}} id="like9" name="like9" value="Like9"/>
                        <label for="like9"> <input onInput={(e) => self.checkInput(e)} style={{marginLeft: "0px", textAlign: "left", width: "500px"}} type="text"></input></label><br/>
                        {(this.state.smartass == true) && "Okay smartass"}
                    </div>
                    <br/><br/>Of course, often positive qualities in a game can be traced back to good application of design principles, but I think the strongest connections players will have with games are emotional, and if you just follow theory you get something sterile and devoid of <span className="sauce">the sauce</span>.
                </div>
                <div className="blogdiv">
                    <h3>The sauce</h3>
                    Like cooking pasta without sauce, like drawing a neutral pose in an action scene, like music you'll find in an ad for medicine. You may digest a sauceless game and find it acceptable but you're not gonna recommend it to others. The sauce is when the developer's soul shines in the game. If you look at something and can tell they made this cliff that way because they wanted to be in that world themselves. It's when developers design for themselves, look at their work critically and lean harder into what it can be, even if it might upset some players.<br/><br/>When working on a game for months, even years, it can be easy to become entrenched in your ways. You're already so far along; sunk cost fallacy sets in. You might autopilot using your learned theory and principles, successfully drive the game to completion and end up unhappy with the result, because theory doesn't inject the human element into your work.
                </div>
                <div className="center">
                    <div className="center"><h2><small>Always remember this:<br/>It is your world. You can do whatever you want.</small></h2></div>
                </div>
                <div className="blogdiv">
                    <h3>Examples</h3>
                    Here are a few games from my pantheon of favourites of all time.
                    <ul>
                        <li>
                            <a href="https://mausgames.itch.io/eigengrau" target="_blank">Eigengrau</a> is a very unique shmup that feels like the dev took a Mario game and forgot what genre they were developing for. Its use of theory is easy to spot in its level design, but the individual mechanics are absurd, creative, referential and funny.
                        </li>
                        <li>
                            <a href="https://store.steampowered.com/app/3392510/Zexion/" target="_blank">Zexion</a>'s open world and boss battles constantly feel like the developer wanted to push just a little further with what they can get away with, which feeds back into the world's and creature's authenticity. It's a kind of scope you can't get from modern games with the development cost of individual assets and areas.
                        </li>
                        <li>
                            <a href="https://store.steampowered.com/app/3450750/A_Whole_Wolfrush/" target="_blank">A Whole Wolfrush</a> is a shmup but more importantly it plays like the developer wants to spend time with the characters they created. It feels very personal, and is a good blueprint for meaningful party members in games.
                        </li>
                    </ul>
                    In each case, the personal element elevates crucial aspects of the game above its peers. To me, at least. There is a lot of solid theory in all of them, and I have been the guy who gleefully described Eigengrau's clever level structure to friends in the past, as it applies theory commonly associated with platformers to a shmup in a creative way. In many ways, I am my worst enemy.
                </div>
                <div className="blogdiv" style="width: 40%">
                    <img src={IMG_DUCK}/>
                    don't love your tone<br/>
                </div>
                <div className="blogdiv">
                    <h3>What about the big players?</h3>
                    It's tough. The sauciest big games I've found are those who have visionaries at the top who corporate have enough faith in to give them a budget to fund their unusual ideas. The capitalist hell is risk-averse, which also makes it sauce-averse.<br/><br/>My topical example is the gameplay Sakurai-san showed in his <a href="https://youtu.be/Gn5c4RkoYAc?t=2826" target="_blank">45 minute video essay on why Kirby is not Mario Kart</a>. The gameplay looks snappier than any Nintendo game released since the Wii era. Big N trusts this cryptid, and the cryptid knows what he's doing.<br/><br/>Generally speaking, though, because of the risk-averse design patterns present in the heavily constrained big-budget environments I think smaller games with real people behind them are winning the console wars.
                </div>
                {this.state.friend == true && <div className="center">
                    <img className="center" src={IMG_FRIEND}></img>
                    <br/>
                    <div className="center"><h2><small>Here's real friend for you...</small></h2></div>
                </div>}
                <div className="blogdiv">
                    <h3>Ultimately</h3>
                    Join my game design course for free. Step by step guide:
                    <ol>
                        <li>
                            Be yourself.
                        </li>
                        <li>
                            Make something you find fun.
                        </li>
                        <li>
                            Don't be afraid to make something bad.
                        </li>
                        <li>
                            Take a step back and play what you have and replace parts you don't like.
                        </li>
                        <li>
                            Make the rest of the fucking game.
                        </li>
                    </ol>
                    If your game resonates with you, it will resonate with others. The shared experience in the artform we call games is human expression, after all, and the designer is an important driver in that. Release it, and release it proudly.<br/><br/>
                    Hi. Thanks for sticking around to the end of the blideo. On the left, there is a card that leads to my last video. And on the right, a video youtube thinks you might like.
                </div>
                <div className="blogdiv">
                    <h3>Comment</h3>
                    In my ideal fucked up world you have to type out your comment letter by letter. Sorry, I make the rules. Hi, I'm Enjl and welcome to my blochk.
                    <div>
                    {this.letters.map((v, k) => {
                        return <button onClick={() => self.msg(v)}>{v}</button>
                    })}
                    </div>
                    <span id="green">{this.state.message}</span>
                    <br/>
                    i liked the slider from last time so i'm adding more of them. I sure hope that doesn't diminish the value of the first encounter with the slider in the context of the blog's overall meta-progression.
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                    <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                </div>
            </div>
        )
    }
    
}