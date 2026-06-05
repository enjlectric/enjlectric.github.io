import { DropElement } from '../../components/DropElement';
import { Stardiv } from '../../components/Stardiv';
import { Sticker } from '../../components/Sticker';
import Sticker_Stars from '../../assets/starsticker_1.png';
import Sticker_Gradient from '../../assets/gradientsticker_1.png';
import './blogs.css';
import '../Home/style.css';
import { Component } from 'preact';

export default class Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dlc: false
        }
    }

    onCommentWrite(self) {
        self.setState({dlc: true})

    }

    render() {
        let self = this;
        return (
            <div>
                <div className="center"><h2>Thoughts on completion</h2></div>
                <div className="blogdiv">
                    Hey gamer's what's up. It's me, the big rat that lives under my table.<br/><br/>Something I've been thinking about a lot lately is the topic of completion, largely in the context of a game (though certainly applicable to other topics). It is something that I think about from time to time, but playing AP Thomson's recently released <a href="https://store.steampowered.com/app/2364580/Titanium_Court/">Titanium Court</a> (great game, go play it) reframed my perspective, and recent conversations with friends getting bored as they reach the shores of the new Tomodachi Life's lake of content accelerated my thoughts further. So it's time to dump my thoughts.
                </div>
                <div className="blogdiv">
                    <h3>On games growing stale</h3>
                    Tomodachi Life and similar simulation games exist in a genre where the content that the developers produce is in direct competition with the final boss of the game: the player's pattern-seeking ape brain. As the player encounters repeat scenarios, they are exceptionally capable of reverse-engineering the <a href="https://en.wikipedia.org/wiki/Game_Gear">game's gears</a>.<br/><br/>The goal then becomes to create so much content and variance that the threshold at which the patterns become tiresome is delayed far enough for players to feel satisfied with what they got out of the game.<br/><br/>This is also true for many other genres of game, but the lack of an exit point at the credits' roll in the simulation-type game tends to cause a player's adventure to end in a neutral mood rather than a positive/satisfied one. The past few hours of your playtime have been watching the same content you used to be surprised by, rather than a climactic sequence to put closure on a greater narrative, or a final puzzle to capstone everything you've learned.<br/>Of course this is by design, but I think it's also kind of a shame.<br/><br/>
                    Now, someone with a lesser moral compass might read this and think <span style="color: orange;">"hey"</span> (read orange text in your best GenAI bro voice) <span style="color: orange;">"if you used AI you could create an infinite wealth of content which totally avoids this issue"</span> ok cool thanks randy but that's not how it works, and even if it was, you wouldn't want it.<br/><br/>It seems like a no-brainer that the impossibly complex theft machine that devoured the entirety of human knowledge could output a similarly complex never-ending web of procedural content that avoids the pitfalls of ape brain noticing the threads that govern the rules of the story.<br/><br/>But in reality, people catch on really quickly to the generation patterns of a GenAI model of the current level of complexity. Due to absorbing knowledge and being incapable of creativity, a GenAI algorithm can at best produce a blurry replica of the (very creative and expansive) game the Tomodachi devs created.<br/><br/>Let's then consider a fictional OmniDev "Billiam" who has the creative brain to create infinite of the best content at infinite granularity in an instant, to create Ultimate Tomodachi DX which never grows stale.<br/><br/>Is that good?<br/><br/>Let's say you play it for 100 hours. 200 hours. 400 hours. Even if the content presents new scenarios, it seems to me like playing a game with infinite content will start suffering from its infinity. Players will start to wonder why their experience is so much more shit than what their friends experienced, and the promise of further undiscovered content might bind players who are ready to move on to continue playing for a few more hours on the off-chance something incredible happens.<br/><br/>So it's worse because it's the same as the real Tomodachi Life that actually released, but now it's also a cognitive trap.<br/><br/>The other end of the infinite spectrum in which Billiam created the ideal game of all time is similarly dystopian, as it eliminates the need for all art at large. Time to wrap it up boys, we're working as accountants now.<br/><br/><br/>So it seems to me that the way to avoid staleness cannot be found in content quantity, but instead in giving the player a proper exit point.<br/><br/>I'm not proposing that what I am about to write would make Tomodachi specifically a better game, so let's think of a fictional game that's kind of similar for this thought experiment.<br/><br/>In this game, you arrive at an island to manage the townsfolk, but from the beginning, it is known that there will come a point in the future where it is time for you to leave. When this happens is entirely up to the player's discretion. After ~20h of playtime, they unlock the ability to host a "goodbye festival" where everyone comes together to say their goodbyes to the player. It's a heartwarming sendoff and lets the player make some fun last memories with the gang at their own discretion.<br/><br/>(if you reload your save it's framed as some time having passed and you are visiting again and everyone is happy to see you)<br/><br/>The idea is just to get the player into a mental state to be ready for closure instead of just letting the toy they grew bored of gather dust.<br/><br/><br/>And yes I do realize all of this is a very "adults problem" because kids will happily play these games for a million years and don't even think about any of this.
                </div>
                <div className="blogdiv">
                    <h3>On cheevos</h3>
                    I've always been anti-completionism. I think it's one of the most toxic aspects of gamer culture, and it persuades people into playing a game past the point where they stopped having fun with it. This is exasperated by achievements being required for all games on some gaming platforms, which deserves to be made fun of.<br/><br/>So I don't 100% games a lot, and when I make a game that has achievements I usually use the achievement system to be actively hostile towards completionists, because sometimes you have to scare a completionist to protect them from making the game unfun for themselves.<br/><br/>I think someone should make a game where the achievement system is entirely write-in, and players have to type out things they want to achieve on their keyboard, and there is no validation checking for anything.<br/><br/>Achieve what you set out to do. EA Sports it's in the game.
                </div>
                <div className="blogdiv">
                    <h3>On game scope</h3>
                    Open world and roguelike games tend to also be extremely vulnerable to the player's ape brain mapping out the game far before the dev intended exit point or an arbitrary achievement or completion percentage is reached.<br/><br/>The open world struggles with its scope in that its boundaries become all the more highlighted by their mere presence, while the content is thinned out to cover a distance beyond the horizon of the render distance.<br/><br/>Roguelikes (excluding Pokemon Mystery Dungeon) instead suffer from being trapped in a loop that becomes instantly repetitive.<br/><br/>In both genres, generally speaking, the world feels small because it never dares step beyond the box that is neatly outlined for the player.<br/><br/>For me though, I think peeking beyond the perceived scope and perhaps even breaching into a new layer beyond the perceived boundaries is where a lot of the magic in a game comes from.<br/><br/>I had this feeling 20 years ago with Twilight Princess, when shooting the cannon into Gerudo Valley, which in truth is so very normal, but felt like escaping the world and to this day the desert feels like a peek into what lies beyond the ordinary.<br/><br/>I had this feeling with any game that suddenly shifts to a different timeline or a secondary world revealed halfway through the game.<br/><br/>Setting up a specific scope in the player's mind and then crushing it, blowing their mind with how far the designers actually thought out the world is an easy hack into what I like about games. That's my post.
                </div>
                <div className="blogdiv">
                    <h3>On the mystery</h3>
                    So then I am persuaded to be more aware of the knowledge I hold over a game's world while playing. If I don't reach the end, I don't know if there is a part where the world opens up, and isn't that exciting?<br/><br/>There could be an entire world out there, and by not engaging with it and prodding against its boundaries, I won't destroy the illusion for myself.<br/><br/>Don't get me wrong, playing games is a wonderful peek into the mind of the people who make it happen.<br/><br/>But what's also wonderful is closing the book perhaps a little early and playing the rest in your mind.<br/><br/>Not for like, every game. But maybe I'll start making things like progression markers an opt-in settings option, rather than a default feature of the save file select screen. And maybe exploration games shouldn't require 90% of their sidequests be done for a true ending of sorts to be attained. But I digress.
                </div>
                <div className="blogdiv">
                    <h3>On the blog post</h3>
                    There is a lot of information on this page.
                </div>
                <div className="blogdiv">
                    <h3>Comment</h3>
                        Tell me a game I should play in this box ok?
                        <br/><br/>
                        <textarea style="width: 100%" onInput={() => self.onCommentWrite(self)} />
                </div>
                {self.state.dlc &&
                <div>
                    <div className="blogdiv">
                        <h3>Part 2.</h3>
                        Welcome to part 2 of my blog post. I'm Enjl. This is my post. Wow! You were so entranced by my mad ramblings that you wanted to tell me what game to play in a comment box that doesn't even work! Got your ass.<br/><br/>You're in my world now.<br/><br/>This part of the post is about 
                    </div>
                    <div className="blogdiv">
                        <h3>On creator's completion</h3>
                        We've talked a lot about completion in the context of when you as the player choose to step away from a game, but as is so often the case on my blog, the things I eject onto the page look at a very narrow case and then say that the thought is applicable to somewhat related fields.<br/><br/>In this case, I want to talk about the scenario where you as a creator are completing a project and there is nothing more to do but to show it to the world.<br/><br/>It's a hollow feeling to complete your creative outlet. It's stressful and there is a lot of uncertainty tied to it due to not knowing how people will reach.<br/><br/>You can think of this as the final boss of the project. But where a game has the entire story head towards an engineered satisfying conclusion, the release of a project is not engineered, and is moreso a chapter transition into the post-release/post-game phase.<br/><br/>You might've hit arbitrary achievements along the way cause your development cycle was designed like shit, and at this point I don't know where this metaphor is going anymore.<br/><br/>Point is, from the creator's side, it's best to avoid silly things like "playing the rest of development in your mind because it's more fun than actually doing it and hitting against the boundaries of your own capability".<br/><br/>Because creating begets creation, and no matter the scope that had to be cut, the act of completion is something to be proud of.
                    </div>
                </div>
                }
            </div>
        )
    }
    
}