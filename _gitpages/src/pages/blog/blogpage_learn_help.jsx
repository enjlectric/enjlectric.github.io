import { DropElement } from '../../components/DropElement';
import { Stardiv } from '../../components/Stardiv';
import { Sticker } from '../../components/Sticker';
import Sticker_Stars from '../../assets/starsticker_1.png';
import Catpic from '../../assets/catpicture.png';
import '../Home/style.css';
import './blogs.css';

export default function page() {
    return (
        <div className="App">
            <div>
                <div className="center"><h2>How to learn anything - Mentor's Story</h2></div>
                <div className="blogdiv">
                    <div className="center"><h3>Chapter 1: Welcome to my world</h3></div>
                    Chosen one, welcome to this sacred realm. I am the voice of the imperfect circle, and I come with a prophetic message for you.
                    <br/>
                    <br/>
                    Soon you will come before a hero, young or old, setting out on their adventure to slay a dragon. You may avert your gaze, or engage with their ambition. If you choose to engage, it is of utmost importance that you treat them with patience and respect.
                    <br/>
                    <br/>
                    A failed mentor can be more lethal to the hero's quest than the dragon herself. These mentors' intentions may be pure, but their manner of communication may lead the hero astray. Heed these words, chosen one, for they shall help you avoid the traps of good intentions.
                    <br/>
                    <br/>
                    It is worth noting that most advice on this page comes with an invisible "unless explicitly asked to" attached.
                </div>
                <div className="blogdiv">
                    <div className="center"><h3>Chapter 2: Avoiding the Traps of Good Intentions</h3></div>
                    <h4>Trap A: Impolite approach</h4>
                    Criticism is a good thing, and constructive criticism can be very helpful. But it's easy to overwhelm the hero or come off as holier-than-them.
                    <br/>
                    Before saying anything that may make the hero feel worse about their ambition, it's good to ask for consent. "<span style={{color: "orange"}}>Would you like feedback?</span>" prepares the hero for what may come, and if they deny your suggestion, it is your duty to honour it. <span style={{color: "lime"}}>Suggest ideas within the bounds set by the hero's intentions, do not enforce your own vision on their work.</span> 
                    <br/>
                    Additionally, even if you see flaws in the hero's technique, by engaging with the hero you ought to lift their spirits to encourage self-improvement, heightening their chance of slaying the dragon. A simple "woah, awesome" or "I love the colors" will do wonders.
                    <br/>
                    You may be reading this, interpreting my words as a recommendation to lie, but quite the contrary is the case. By training yourself to see the positives in things you may find mundane, the world becomes brighter in every facet. <span style={{color: "lime"}}>The mentor has the power to start the avalanche of a feedback loop of positivity and strength in an otherwise uncaring world.</span> Wield this power wisely.
                    <br/>
                    <br/>
                    <h4>Trap B: Shortcutting</h4>
                    Many mentors fail to put themselves into the role of the hero. They see the flaws in their own skills and give advice that aims to steer the hero away from the pitfalls the mentor themself has fallen into and overcome. The reasoning is often something along the lines of, "<span style={{color: "orange"}}>I wish someone told me about this spike pit before I got stabbed by it!</span>"
                    <br/>
                    <br/>
                    While altruistic on the surface, this reasoning can become a trap when you don't know enough about the hero's current skill level and what skills they are working on honing. This well-intentioned caution of a pitfall may end up a distraction that inflicts confusion status on the hero, making their quest harder to understand.
                    <br/>
                    <br/>
                    Furthermore, the mentor may be oblivious to the impact overcoming the pitfall has had on their own ability. While you may wish that you had skipped a certain part of your learning, the skills you honed during that period may have made you stronger than you realize. <span style={{color: "lime"}}>When trying to steer a hero onto a path, it is fine to nudge, but urging is rarely a good idea.</span>
                    <br/>
                    <br/>
                    <h4>Trap C: Jargon</h4>
                    In the same vein as trap B, a mentor may be unfamiliar with the hero's exposure to certain concepts or jargon, and it is not their perogative tell the hero to do something specific unless the hero asked. The role of the mentor is the role of the servant to the hero.
                    <br/>
                    <br/>
                    Unless the power level of the hero is well-known to you, <span style={{color: "lime"}}>try to explain your suggestions in layman's terms</span>. Not only will the hero be guaranteed to understand, but you are also hiding your own power level, giving the hero security in feeling like they're talking to someone on even footing. Even a hero stronger than you will see value in your advice despite not using difficult language.<br/>
                    Furthermore, any third parties reading along will also have an easier time following the conversation.
                    <br/>
                    <br/>
                    <h4>Trap D: Flurry attack</h4>
                    Humans can process only so much information at once. As the mentor, you have a lot of information you could be imparting, but if you overdo it, none of it will stick. Focus on the advice that best matches the hero's current struggles. You don't have to play a guessing game, either. Communicate with the hero. Ask them if there is something specific they would like feedback on, and then keep your response concise and give the hero time to respond between major statements.
                </div>
                <div className="blogdiv">
                    <div className="center"><h3>Chapter 3: Summary</h3></div>
                    Overall, your guidance of the hero's quest shall be led by kindness, support, wisdom, selflessness and patience. Everyone learns at their own pace, and some heroes may never beat the dragon. The ultimate goal, however, is for all parties involved to enjoy life and be friendly to one another. Peace out ✌️
                </div>
                <div className="blogdiv">
                    <h3>Comment</h3>
                        If you want to practice your feedback skills, use this comment box. It doesn't track anything, so it's perfectly private and safe. Unless you have a keylogger installed. Maybe run a virus check, just to be safe. Happy 2026. I'm Enjl.
                        <br/><br/>
                        <textarea style="width: 100%" />

                        <br/>
                        also tell me your favorite color please
                        <br/>
                        <input style={"margin: auto auto"} type="color" min="1" max="100" value="50" class="slider" id="myRange"/>
                </div>
            </div>
        </div>
    )
}