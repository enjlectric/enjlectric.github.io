import { DropElement } from '../../components/DropElement';
import { Stardiv } from '../../components/Stardiv';
import { Sticker } from '../../components/Sticker';
import Sticker_Stars from '../../assets/starsticker_1.png';
import Sticker_Gradient from '../../assets/gradientsticker_1.png';
import './blogs.css';
import '../Home/style.css';
import { Component } from 'preact';
import IMG_DUCK from '../../assets/duck.png'

export default class Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: -1,
            num: 0,
            ywCount: []
        }
    }

    selectCol(self, colidx) {
        self.setState({color: colidx})
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

    getcolor() {
        if (this.state.color == -1) {return "unchanged"}
        if (this.state.color == 0) {return "#331111"}
        if (this.state.color == 1) {return "#113311"}
        if (this.state.color == 2) {return "#111133"}
    }

    tedtalk() {
        if (this.state.color == -1) {return "TED Talk"}
        if (this.state.color == 0) {return "RED Talk"}
        if (this.state.color == 1) {return "GRED Talk"}
        if (this.state.color == 2) {return "BLED Talk"}
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

    render() {
        let self = this;
        return (
            <div>
                <div className="center"><h2>Designing to make players gamify themselves</h2></div>
                <div className="blogdiv">
                    When you are playing a game, it's likely the game is playing its scenario straight and trying to immerse the player in a carefully crafted world. This has a lot of strong and powerful and very commonly accepted pros, and very few, niche cons. And when a game breaks this rule, it often tries to rope the player into the story into a meaningful way, or make a powerful statement that makes you sit on a park bench watching the sunset while the letters <i>MAN</i> slowly fade in at the bottom of the player's vision.<br/><br/>
                    And that's awesome. There's so much to love there. But it's also so commonly talked about that I have nothing funny to say about it, so I want to talk about the oft-forgotten combination of: Breaking the fourth wall, but in a really casual way.
                    <br/><br/>This is a {this.blueprint()} for mechanics that best exist in a game world primarily focused on being entertaining. It's about gameplay that does not contribute to the game's story or objective, but serves to give the player agency and to coerce them to do things they wouldn't usually think to do in a game.
                </div>
                <div className="center">
                    <div className="center"><h2><small>Color you like? :)</small></h2></div>
                    <input onClick={() => self.selectCol(self, 0)} type="radio" id="0" name="color" value="Red"/>
                    <label for="0" id="red">Red</label><br/>
                    <input onClick={() => self.selectCol(self, 1)} type="radio" id="1" name="color" value="Green"/>
                    <label for="1" id="green">Green</label><br/>
                    <input onClick={() => self.selectCol(self, 2)} type="radio" id="2" name="color" value="Blue"/>
                    <label for="2" id="blue">Blue</label> 
                </div>
                <div className="blogdiv">
                    <h3>The real shit</h3>
                    You don't have to care if a player engages with optional mechanics, so you can ask them to do anything. Players who do will opt into an extra layer of fun.<br/><br/>You know you (person famously designing an action game) can just ask players to do real life exercises as a warmup, right?<br/><br/>You might be wondering what the point is, but that's the point. You might be wondering who will engage with that, but there will be at least one person. You might be concerned that you're wasting precious development time, but if you talk like that it sounds like you have a different definition of fun than me and landed on the wrong {this.blog()}<br/><br/>If no-one else, <a href="https://youtu.be/2WDnv0MEkuU?t=15455" target="_blank">streamers will jump at the opportunity</a> to engage with this kind of bullshit and have fun with their viewers for a few minutes. It becomes an event that transcends the game and is just fun to watch when it happens.<br/><br/>And even if nobody engages with it publicly, the mere thought of someone doing makes me laugh.
                </div>
                <div className="blogdiv" style="width: 40%">
                    <img src={IMG_DUCK}/>
                    Cool duck picktcher<br/>
                    <button onClick={() => self.selectDuck(self)}>thank you enjl this is nice</button>
                    {this.state.ywCount.map((V, k) => {
                        return <p>your welcome!!</p>
                    })}
                </div>
                <div className="blogdiv" style={{backgroundColor: this.getcolor()}}>
                    <h3>Some more examples {this.color()}</h3>
                    <ul>
                        <li>
                            Make an npc say "ok but you should close your eyes for 30 seconds", put up a 10 second black screen, then fade back in and animate them silently doing some sneaky thing for 20 seconds before a sound effect tells the player to open their eyes again. It's funny if they close their eyes and it's also funny if they disobey.
                        </li>
                        <li>
                            All audio suddenly comes out of the right speaker and you get a system message that something weird must've happened and the response options are "it's not okay" and "it's all right" (this was a bad pun, sorry).
                        </li>
                        <li>
                            Straight up ask the player to sing karaoke. Pretend to care by showing a volume measure meter but at the end the NPC says they weren't paying attention but bet you did a good job.
                        </li>
                        <li>
                            Let players scribble on the game's encyclopedia equivalent and at one point in the game if you scribbled on an NPC's page they rip the book out of the character's hands and comment on your scribble (they don't actually track its quality they just say something funny).
                        </li>
                        <li>
                            Put a recipe in the game and ask the player to concoct it for fun. This one is surprisingly viable in any game that has food in it. Just include recipes for your fantasy recipes with real life parallel items.
                        </li>
                    </ul>
                </div>
                <div className="blogdiv">
                    <h3>Ultimately</h3>
                        I wanted to write about this because it's a lot of fun to come up with these, and actually implenting them and thinking about how players might react makes me laugh. But even beyond the meme, I think there's some value in getting a little personal with the player.
                        <br/><br/>I think by adding nonsense avenues of player expression like this, it creates personal and memorable moments. It rewards player curiousity and involves the player's real life actions in a way that's more immersive than whatever they're trying to sell you at game design school.<br/><br/> It might make you go <i>MAN</i> months later when you're sad that the new Mario game succumbed to the fishing meme but didn't ask you to mark down today's mood in a mood calendar and then compliment you on your recent upswing in mental health.<br/><br/>Of course it can be jarring if your game wants to play it straight. Which is chill. There are countless ways to imbue your game with the creator's soul, and this one is a small niche that I am partial to.<br/><br/>Hi. I am Enjl and welcome to coming to my {this.tedtalk()}.
                </div>
                <div className="blogdiv">
                    <h3>Comment</h3>
                        You can write in this comment box but I don't have a comment system so just do it to feel the click-clack of your keyboard keys. To feel the haptics at your real fingers. It's a DIY ASMR experience. Welcome to my post.
                        <br/><br/>
                        <textarea style="width: 100%" />
                        <button onClick={() => self.add(self)}>Here's a button for you if you wanna click things as well</button><div class="slidecontainer">{this.state.num}<br/>
                            slider
                            <input style={"margin: auto 20px"} type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                        </div>
                </div>
            </div>
        )
    }
    
}