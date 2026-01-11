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
                <div className="center"><h2>How to learn anything - Hero's Story</h2></div>
                <div className="blogdiv">
                    <div className="center"><h3>Chapter 1: How to do a thing</h3></div>
                    Let's say I want to do a thing. I might think of it like this:<br/>
                    1. Figure out what I want to do<br/>
                    2. Work towards that goal<br/>
                    3. Done! Snack time...<br/><br/>

                    More concretely, if I want to draw a picture of a cat, I decide to do that, draw the thing, and then I'm done. Easy, see?<br/>

                    <img src={Catpic} style={{margin: "auto", width: "10%"}}></img>
                    <br/>
                    But there's an issue. Like, that's. I'm not five years old [sic]. I should be doing better. I KNOW what cats look like in real life <span style={{fontSize: "small"}}>citation needed</span>. Why can't I rotate one in my head?<br/><br/>
                    The secret is that "Step 2" is not as simple as it appears.<br/>
                    2. Work towards that goal<br/>
                    Ok, but how? As a beginner, I have no idea where to even... begin doing so. I can look up "drawing cat tutorials" but they go way too fast and they keep drawing geometric shapes and I don't understand anything. Before I learn how to draw a cat it seems necessary to <span style={{color: "yellow"}}>learn how to learn</span> how to draw a cat.
                    <br/>
                    <br/>
                    Okay. Slow down. What is a cat?
                    <br/>
                    <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A314877507&color=%2394ae28&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-947803394" title="FREEGRIMM" target="_blank" style="color: #cccccc; text-decoration: none;">FREEGRIMM</a> · <a href="https://soundcloud.com/user-947803394/jake-chudnow-moon-men-instrumental-vsauce" title="Jake Chudnow - Moon Men (Instrumental) (vsauce)" target="_blank" style="color: #cccccc; text-decoration: none;">Jake Chudnow - Moon Men (Instrumental) (vsauce)</a></div>
                    <br/>
                    <br/>
                    A cat is ears. A cat is legs. A cat is face, a cat is torso. A cat is fur. A cat is a lot of things, and you might not know how to draw any of them. A cat is a puzzle of many anatomically related things. Like a jigsaw puzzle of many pieces. And like with a jigsaw puzzle, it makes sense to start small and with the easiest pieces.
                    <br/>
                    So for us, step 2 for the picture of the cat is more like this:
                    <br/>
                    Draw a cat's head, face, torso, two ears, 4 legs, tail.
                    <br/>
                    <br/>
                    It's the same set of instructions, but by breaking down we're turning it from an abstract idea into a checklist that we can work through.
                </div>
                <div className="blogdiv">
                    <div className="center"><h3>Chapter 2: Let's do the thing</h3></div>
                    Breaking abstracts into elements like we just did with the cat (don't worry, he's safe) is the foundation of learning. You can break anything into elements, and the smaller they are the less scary they become.
                    <br/>
                    If you find yourself thinking "Oh, I wish I knew about [a thing] but I have no idea where to even begin!", take a step back and look up what this "[thing]" is made of, and take note of it!
                    <br/>
                    <br/>
                    Here are some examples for you to try, based on things I learned in 2025:
                    <ul>
                        <li>
                            Cooking salmon. <details className = "details">
                                <summary className = "mydetails">Answer sheet</summary>
                                I googled "how to cook salmon" and found many different recipes. <a href="https://www.onceuponachef.com/recipes/restaurant-style-pan-seared-salmon.html" target="_blank">This one</a> says it's very simple, by seasoning one side with salt and pepper, letting it simmer for 3-4 minutes, then flipping it and seasoning the other side and waiting another 3-4 minutes. I made this salmon before and it's tasty. I learned how to do it thanks to this recipe. I might try other recipes in the future.
                            </details>
                        </li>
                        <li>
                            Making a 3D model. <details className = "details">
                                <summary className = "mydetails">Answer sheet</summary>
                                I vaguely knew from prior conversation with friends that one way to model a character in 3D is by using a turnaround reference sheet. I looked up many guides for how to accomplish this in blender. As it turns out, it is a very complicated process! I distilled it into these steps:<br/>
                                1. Learn how to use background images in blender, so I can have the turnaround reference sheet in there.<br/>
                                2. Learn the hotkeys for translating, rotating and scaling vertices, so that I can turn my cube into a body.<br/>
                                3. Turn my cube into a body using techniques I saw in videos like <a href="https://www.youtube.com/watch?v=in9rNze4FD4">this one</a>, which I'll watch individual parts of over and over again to understand what is going on.<br/>
                                I'm still on Step 3, so I haven't thought past it yet, but I'm much deeper in the sauce than a year ago, so I consider it a success!
                            </details>
                        </li>
                    </ul>

                    I swear I learned more than 2 things last year. Most of them are just too personal to be useful in this story.
                    <br/>
                    <br/>
                    Sidenote: When consulting the internet for advice, trust experts but be skeptical of what you see. Compare different sources and see what common throughlines there are between individual statements.
                    <br/>
                    Also: Append "before: 2023" to your google search to filter out all the AI generated garbage. Refrain from using ChatGPT for learning, because the action of seeking out knowledge is infinitely more valuable for learning than being fed half-thruths synthesized from who-knows-where.
                </div>
                <div className="blogdiv">
                    <div className="center"><h3>Chapter 3: You've done a thing. What's next?</h3></div>
                    Chances are, you finished or abandoned the thing you were doing and are pretty disapponted with it. It looks nothing like what you had in mind and you're still feeling no more powerful than you did at the beginning. <b>That's normal and also your brain is lying</b>. You have just done the hardest step: Getting started. Next is the longest step: Practice.<br/>
                    When you see a cool piece of art on social media, understand that years of work carry that art on its shoulders. On socials, you only ever see people at their best, and the posts that are pushed by the algorithm are those that amaze other people as well. It can feel very discouraging seeing other people so successful when you're barely getting started.<br/><br/>
                    <b>That's why it's extremely important to not compare yourself to people online.</b> Instead, compare yourself to yourself from a month ago. A year ago. If you did a thing for a first time, that's HELLA something to be proud of no matter how shitty it turned out. For one, something is infinitely better than nothing. And for two, if it's shit then the next one you're gonna make is gonna be a new personal best guaranteed! Keep kicking your yesterday's ass every day and you'll be a pro in no time.<br/><br/>
                </div>
                <div className="blogdiv">
                    <div className="center"><h3>Anecdote</h3></div>
                    I've been making music since 2017 (it's on my homepage). I'm not good at it, I never learned theory. I just picked up a DAW and started doodling, and over time it evolved naturally. I don't know how to make things in any specific genre, and am mostly just stubbornly churning out stuff. The important part is that I like making it and I like listening to it, and sometimes that's all you need from a creative outlet. Whatever it is you're struggling with, I hope that, if not global success, you can find harmony with yourself.
                </div>
                <div className="blogdiv">
                    <h3>Comment</h3>
                        Draw ascii art in my comment box please. I'm Enjl and welcome to my year. 2026 baybee. Year of the green.
                        <br/><br/>
                        <textarea style="width: 100%" />

                        <br/>
                        also tell me your least favorite color so i know your least favorite color thanks
                        <br/>
                        <input style={"margin: auto auto"} type="color" min="1" max="100" value="50" class="slider" id="myRange"/>
                </div>
            </div>
        </div>
    )
}