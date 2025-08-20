import { DropElement } from '../../components/DropElement';
import { Stardiv } from '../../components/Stardiv';
import { Sticker } from '../../components/Sticker';
import Sticker_Stars from '../../assets/starsticker_1.png';
import Sticker_Gradient from '../../assets/gradientsticker_1.png';
import '../Home/style.css';

export default function page() {
    return (
        <div className="App">
            <Stardiv>
                <Sticker side = "tl"><img src={Sticker_Gradient}></img></Sticker>
                <Sticker side = "br"><img src={Sticker_Stars}></img></Sticker>
                <DropElement>
                    <h1>My Blogpostes</h1>
                </DropElement>
            </Stardiv>
        </div>
    )
}