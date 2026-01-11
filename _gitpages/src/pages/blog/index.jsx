import { DropElement } from '../../components/DropElement';
import { Stardiv } from '../../components/Stardiv';
import { Sticker } from '../../components/Sticker';
import Sticker_Stars from '../../assets/starsticker_1.png';
import Sticker_Gradient from '../../assets/gradientsticker_1.png';
import '../Home/style.css';
import { Component } from 'preact';
import P_TEMP from './blogpage_template'
import P_INTER from './blogpage_interact'
import P_YOU from './blogpage_you'
import P_LEARN from './blogpage_learn'
import P_LEARNG from './blogpage_learn_guide'
import P_LEARNH from './blogpage_learn_help'
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

	setPost(self, newPost) {
		window.scrollTo(0,0)
		self.setState({post: newPost})
	}

	render() {
		let self = this;
		return (
			<div className="App">
				<button style="margin: auto 100px" onClick={() => self.returnHome()} className={"CoolRadioA"}>I'm afraid of words actually</button>
				
				{
					(this.state.post == "learn") && <P_LEARN setPost = {a => self.setPost(self, a)}></P_LEARN>
				}
				{
					(this.state.post == "learn-help") && <P_LEARNH></P_LEARNH>
				}
				{
					(this.state.post == "learn-guide") && <P_LEARNG></P_LEARNG>
				}
				{
					(this.state.post == "byyouforyou") && <P_YOU></P_YOU>
				}
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