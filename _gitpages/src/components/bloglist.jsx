import { DropElement } from './DropElement';
import { Stardiv } from './Stardiv';
import { Sticker } from './Sticker';
import Sticker_Stars from '../assets/gradientsticker_1.png'
import Sticker_Gradient from '../assets/gradientsticker_1.png';
import '../pages/Home/style.css';
import './bloglist.css';

export default function page() {
    
    function makepage(title, description, url, date) {
        return {
            title: title,
            desc: description,
            url: url,
            date: date,
            onClick: () => window.location.href = "/blog?poast=" + url
        }
    }
    const pages = [
        makepage("Designing to make players gamify themselves", "A non-visual non-novel-type non-game you can play with your eyes.", "interact", "August 20 2025")
    ]
    return (
        <div>
            <h1>The Poaster's prairie</h1>
            <p>This is where I occasionally write blog posts about things that are on my mind.<br/><small>(turns to camera)</small> Hi. I'm Enjl.</p>
            {
                pages.map((b, idx) => {
                    return (<button onClick={b.onClick} className = "blogElement">
                        <p style="float: right">{b.date}</p>
                        <h3>{b.title}</h3>
                        <p>{b.desc}</p>
                    </button>)
                })
            }
        </div>
    )
}