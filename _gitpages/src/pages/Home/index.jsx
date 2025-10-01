import { DropElement } from '../../components/DropElement';
import { Stardiv } from '../../components/Stardiv';
import { Sticker } from '../../components/Sticker';
import Sticker_Stars from '../../assets/starsticker_1.png';
import Sticker_Gradient from '../../assets/gradientsticker_1.png';
import Kwee from '../../assets/kwee.gif';
import Kwee2 from '../../assets/kwee2.gif';
import herylimg from '../../assets/heryl.png';
import icon_itch from '../../assets/itch.png';
import icon_yout from '../../assets/youtube.png';
import icon_band from '../../assets/bandcamp.png';
import icon_bsky from '../../assets/bsky.png';
import f_waddle from '../../images/f_waddle.png';
import f_squp from '../../images/f_squp.png';
import f_pyro from '../../images/f_pyro.png';
import f_rixi from '../../images/f_rixi.png';
import f_sarn from '../../images/f_sarn.png';
import f_chao from '../../images/f_chao.png';
import f_tassy from '../../images/f_tassy.png';
import f_shinji from '../../images/f_shinji.png';
import './style.css';
import { useRef, useEffect, useCallback, useState } from 'preact/hooks'
import { Explainable } from '../../components/Explainable';
import Timeline from '../../components/Timeline';
import Music from '../../components/Music';
import Dex from '../../components/Dex';
import Games from '../../components/Games';
import Bloglist from '../../components/bloglist'

export function Home() {
	function get_newspaper() {
		return <div className="newspaper" style={{top: "22%"}}>
			<h3>About me</h3>
			<Sticker side = "tr" padh = "-35px" padv ="-60px"><DropElement><img src={herylimg}/></DropElement></Sticker>
			<span style={{textAlign: "left"}}>
				<li style={{listStyle: "none"}}>
					<ul style={{color: "#2242f2"}}>
						<span><i>I am</i></span>
					</ul>
					<ul>
						<span>♪ Professional hobby enjoyer<br/>♪ he • they</span>
					</ul>
					<ul style={{color: "#2242f2"}}>
						<span><i>I do</i></span>
					</ul>
					<ul>
						<span>♪ Programbling<br/>♪ Game Desaign<br/>♪ Electromic Music<br/>♪ Digitel Art</span>
					</ul>
					<ul style={{color: "#2242f2"}}>
						<span><i>I like</i></span>
					</ul>
					<ul>
						<span>♪ Nintendo/Indie gamse<br/>♪ Electroric Music<br/>♪ The animals, mountains, outer space<br/>♪ Cute things, mischief, chaos, hubris, lying</span>
					</ul>
				</li>
			</span>
		</div>
	}

	const [tab, setTab] = useState(0)

	return (
		<div className="App">
			<Stardiv stardivnoclip={get_newspaper()}>
				<Sticker side = "tl"><img src={Sticker_Gradient}></img></Sticker>
				<Sticker side = "br"><img src={Sticker_Stars}></img></Sticker>
				<DropElement>
					<span>
						You are now entering the <i>Enjl Zone</i>.
					</span>
					<br/>
					<br/>
					<div className="tilt-l" style={{marginLeft: "182px", marginTop: "-20px"}}>
						(Your one-stop shop for all things Enjl)
					</div>
					<br/>
					<div className="leftside">
						<h3>
							The Webotron
						</h3>

						Use the webotron! It's good for you!
						<br/>
						<br/>

						<a className={"bouncy"} target="_blank" rel="noopener noreferrer" href="https://enjl.itch.io/"><img src={icon_itch}></img><br/>games</a>
						<a className={"bouncy"} target="_blank" rel="noopener noreferrer" href="https://enjl.bandcamp.com/"><img src={icon_band}></img><br/>music</a>
						<a className={"bouncy"} target="_blank" rel="noopener noreferrer" href="https://bsky.app/profile/enjl.awakens.today"><img src={icon_bsky}></img><br/>words</a>
						<a className={"bouncy"} target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@enjlectric"><img src={icon_yout}></img><br/>videos</a>
						{/* <h3>
							Game Projects
						</h3>
						<span>Games</span>
						<h3>
							Hobbies
						</h3>
						<span>Links to art and music pages</span>
						<h3>
							Siteblog
						</h3>
						<span>I might write some things in the future. They will show up here.</span> */}
					</div>
				</DropElement>
			</Stardiv>

			<div className={"friends"}>
				<div className={"friendList"}>
					<a href="https://bsky.app/profile/thewaddle.bsky.social" target="_blank">
						<img src={f_waddle}/>
						<div class="toshow">
							waddle
						</div>
					</a>
					<a href="https://squp.neocities.org/" target="_blank">
						<img src={f_squp}/>
						<div class="toshow">
							squp
						</div>
					</a>
					<a href="https://www.youtube.com/channel/UCj1-W-0evwF0R0873IRSJKw" target="_blank">
						<img src={f_pyro}/>
						<div class="toshow">
							snoruntpyro
						</div>
					</a>
					<a href="https://sarn.gay/" target="_blank">
						<img src={f_sarn}/>
						<div class="toshow">
							sarn
						</div>
					</a>
					<a href="https://rixitic.carrd.co/" target="_blank">
						<img src={f_rixi}/>
						<div class="toshow">
							rixitic
						</div>
					</a>
					<a href="https://taxiderby.itch.io/" target="_blank">
						<img src={f_tassy}/>
						<div class="toshow">
							tassy
						</div>
					</a>
					<a href="https://www.youtube.com/@Chaofanatic" target="_blank">
						<img src={f_chao}/>
						<div class="toshow">
							chaofanatic
						</div>
					</a>
					<a href="https://www.shinji.zone/" target="_blank">
						<img src={f_shinji}/>
						<div class="toshow">
							shinji
						</div>
					</a>
				</div>
				<div className="coolText">
					Click on my awesome freinds!!!
				</div>
			</div>

			<div>
				<img className="kwee" id="kwee1" src={Kwee2}></img>
				<img className="kwee" id="kwee2" src={Kwee2}></img>
				<img className="kwee" id="kwee3" src={Kwee2}></img>
				<img className="kwee" id="kwee4" src={Kwee2}></img>
				<img className="kwee" id="kwee5" src={Kwee}></img>
			</div>

			<div className="center"><h2>Check a look of this<br/>And by "this" I mean, heh, well..</h2></div>

			<div style={{display: "flex", maxWidth: "960px", margin: "auto", width: "80%"}}>
				<button onClick={() => setTab(0)} className={tab == 0 ? "CoolRadioA" : "CoolRadio"}>Arcade</button>
				<button onClick={() => setTab(1)} className={tab == 1 ? "CoolRadioA" : "CoolRadio"}>Jukebox</button>
				<button onClick={() => setTab(2)} className={tab == 2 ? "CoolRadioA" : "CoolRadio"}>Creecherpedia</button>
				<button onClick={() => setTab(3)} className={tab == 3 ? "CoolRadioA" : "CoolRadio"}>𝓑𝓵𝓸𝓰</button>
			</div>


			{(tab == 0) ? <Stardiv>
				<Sticker side = "tl"><img src={Sticker_Gradient}></img></Sticker>
				<Sticker side = "br"><img src={Sticker_Stars}></img></Sticker>
				<DropElement>
					<div style={{textAlign: "center"}} className={"center"}>
						<Games></Games>
					</div>
				</DropElement>
			</Stardiv> : null}
			{(tab == 1) ? <Stardiv>
				<Sticker side = "tl"><img src={Sticker_Gradient}></img></Sticker>
				<Sticker side = "br"><img src={Sticker_Stars}></img></Sticker>
				<DropElement>
					<div style={{textAlign: "center"}} className={"center"}>
						<Music></Music>
					</div>
				</DropElement>
			</Stardiv> : null}
			{(tab == 2) ? <Stardiv>
				<Sticker side = "tl"><img src={Sticker_Gradient}></img></Sticker>
				<Sticker side = "br"><img src={Sticker_Stars}></img></Sticker>
				<DropElement>
					<div style={{textAlign: "center"}} className={"center"}>
						{/* <Dex></Dex> */}
						Coming soon... tease-tease, tee-hee
					</div>
				</DropElement>
			</Stardiv> : null}
			{(tab == 3) ? <Stardiv>
				<Sticker side = "tl"><img src={Sticker_Gradient}></img></Sticker>
				<Sticker side = "br"><img src={Sticker_Stars}></img></Sticker>
				<DropElement>
					<div style={{textAlign: "center"}} className={"center"}>
						<Bloglist></Bloglist>
					</div>
				</DropElement>
			</Stardiv> : null}
		</div>
	)
}