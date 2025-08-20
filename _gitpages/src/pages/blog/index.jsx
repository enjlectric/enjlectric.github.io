import { DropElement } from '../../components/DropElement';
import { Stardiv } from '../../components/Stardiv';
import { Sticker } from '../../components/Sticker';
import Sticker_Stars from '../../assets/starsticker_1.png';
import Sticker_Gradient from '../../assets/gradientsticker_1.png';
import '../Home/style.css';
import { Component } from 'preact';
import P_TEMP from './blogpage_template'
import P_INTER from './blogpage_interact'
import Bloglist from "../../components/bloglist"

class Blog extends Component {
    
	constructor(props) {
		super(props)
		let params = new URLSearchParams(new URL(window.location.href).searchParams.toString());

		this.state = {
			post: window.location.href.split("poast=")[1]
		}
	}

	returnHome() {
		window.location.href = "../"
		window.scrollTo(0,0); 
	}

	render() {
		let self = this;
		return (
			<div className="App">
				<button style="margin: auto 100px" onClick={() => self.returnHome()} className={"CoolRadioA"}>I'm afraid of words actually</button>
				
				{
					(this.state.post == "interact") && <P_INTER></P_INTER>
				}

					{this.state.post == null && <Stardiv>
						<Sticker side = "tl"><img src={Sticker_Gradient}></img></Sticker>
						<Sticker side = "br"><img src={Sticker_Stars}></img></Sticker>
						<DropElement>
							<Bloglist></Bloglist>
						</DropElement>
					</Stardiv>
				}
				<button style="margin: auto 100px" onClick={() => self.returnHome()} className={"CoolRadioA"}>I'm done reading I wanna go home</button>
			</div>
		)
	}
}

export default Blog;