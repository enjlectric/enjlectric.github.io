import { DropElement } from '../../components/DropElement';
import { Stardiv } from '../../components/Stardiv';
import { Sticker } from '../../components/Sticker';
import Sticker_Stars from '../../assets/starsticker_1.png';
import Catpic from '../../assets/catpicture.png';
import '../Home/style.css';
import './blogs.css';

export default function page(args) {
    var sp = args.setPost;
    return (
        <div className="App">
            <div>
                <div className="center"><h2>How to learn anything</h2></div>
                <div className="blogdiv">
                    <div className="center"><h3>Prologue</h3></div>
                    Back in my fifth year of school, our curriculum saw the introduction of one new class that, at the time, my underdeveloped monkey brain thought was quite a stupidly titled course. It was called "Learning learning" and discussed the concepts behind how to effectively learn to take in information and apply it in unfamiliar situations.<br/>The difference between learning a song on the piano, and learning music theory, effectively. The latter is what enables you to branch out and create your own works.
                    <br/>
                    <br/>
                    Being ten years old at the time, I of course retained absolutely nothing of that course. I was already in that whole "school" thing for 5 years. The novelty has worn off, "dude"! I'm just here to draw on my eraser and wobble my pencil to make it look like it's curved.
                    <br/>
                    <br/>
                    But I am lucky that through self-learning I somehow stumbled into exactly what this course was trying to teach. And I would like to share some of it here, because I see people coming into creative fields with certain expectations that leave them frustrated and disappointed after things don't work out how they expect.
                    <br/>
                    <br/>
                    This is a choose your own adventure blog post.
                    <br/>
                    If you would like to learn how to learn, <button className={"inlineButton"} onClick={() => sp("learn-guide")}>click here</button>.
                    <br/>
                    If you already know how to learn but want to support other people in their ambition, <button className={"inlineButton"} onClick={() => sp("learn-help")}>click here</button>.
                </div>
            </div>
        </div>
    )
}