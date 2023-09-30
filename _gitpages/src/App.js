import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TightFancyImageButton from './modules/tightFancyImageButton';
import React from 'react';
import styled, {keyframes} from "styled-components";
import About from './modules/about';
import TranslucentButton from './modules/translucentButton';
import TimelineEntry from './modules/timelineEntry';
import Music from './modules/music';
import logo from './images/logo.png'
import logo2 from './images/logo2.png'
import Art from './modules/art'
import Home from './modules/home'
import Programming from './modules/programming'
import Gamedesign from './modules/gamedesign';
import ProjectSystemSync from './modules/projects/project_systemsync'
import ProjectScribbles from './modules/projects/project_sallys-scribbles'
import ProjectBogJog from './modules/projects/project_bog-jog'
import ProjectJellingfish from './modules/projects/project_jellingfish'
import ProjectLaserKart from './modules/projects/project_laser-kart'
import ProjectHotelMarcel from './modules/projects/project_hotel-marcel'
import ProjectInkjet from './modules/projects/project_inkjet'
import ProjectFlurret from './modules/projects/project_flurret'
import ProjectBumbling from './modules/projects/project_bumbling'
import ProjectLasercat from './modules/projects/project_lasercat'
import ProjectJohn from './modules/projects/project_john'
import ProjectChristmas from './modules/projects/project_achristmasthing'
import CPP from './modules/cplusplus'
import { createBrowserHistory } from 'history'
import { elementPool} from './modules/projectData'
import 'highlight.js/styles/github-dark.css';
import cplusplus from 'highlight.js/lib/languages/cpp.js'
import hljs from 'highlight.js'
export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

const frontPageElements = [
    elementPool.sallysscribbles,
    // elementPool.jellingfish,
    elementPool.inkjet,
    elementPool.hotelmarcel,
    elementPool.laserkart,
    elementPool.bogjog,
    elementPool.laserCat,
    elementPool.bumbling,
    elementPool.xmas,
    elementPool.john,
    elementPool.sysy,
]

const gameOnlyTimelineElements = [
    elementPool.eventhorizon,
    elementPool.fadingsignal,
    elementPool.sallysscribbles,
    elementPool.dicemask,
    elementPool.inkjet,
    elementPool.hotelmarcel,
    elementPool.laserkart,
    elementPool.finalboss,
    elementPool.bogjog,
    elementPool.john,
    elementPool.bumbling,
    elementPool.laserCat,
    elementPool.stargrove,
    elementPool.snipsnip,
    elementPool.hah,
    elementPool.monster,
    elementPool.pirate,
    elementPool.sysy,
    elementPool.xmas,
    elementPool.jungle,
    elementPool.h2o,
]

const timelineElements = [
    elementPool.eventhorizon,
    elementPool.fadingsignal,
    elementPool.sallysscribbles,
    elementPool.melting,
    elementPool.dicemask,
    elementPool.inkjet,
    elementPool.hotelmarcel,
    elementPool.laserkart,
    elementPool.finalboss,
    elementPool.bogjog,
    elementPool.bogjogost,
    elementPool.chroma,
    elementPool.john,
    elementPool.bumbling,
    elementPool.laserCatOst,
    elementPool.laserCat,
    elementPool.megakiller,
    elementPool.stargrove,
    elementPool.snipsnip,
    elementPool.weare,
    elementPool.hah,
    elementPool.monster,
    elementPool.pirate,
    elementPool.sysy,
    elementPool.xmas,
    elementPool.jungle,
    elementPool.h2o,
]

const employmentTimelineElements = [
    elementPool.gamigo,
    elementPool.pcs,
    elementPool.pcsi,
]


class App extends React.Component {

    scrollKeyframes = null;
    ImageWrapper = null;

    constructor(props) {
        super(props);

        hljs.registerLanguage('cpp', cplusplus);
        hljs.highlightAll()

        const urlParams = new URLSearchParams(window.location.search);


        this.state = {
            imgList: [],
            state: urlParams.get("view"),
            onepage: urlParams.has("cpct"),
            elaborate: urlParams.has("elaborate"),
            cascade: urlParams.has("cascade"),
        }

        if (this.state.state == null){
            this.state.state = 0
        }

        let elementsCount = frontPageElements.length * 2;
        while (elementsCount * 225 < window.screen.width * 2) {
            elementsCount += frontPageElements.length;
        }

        let j = 0;
        for (let i = 0; i < elementsCount; i++) {
            this.state.imgList.push(
                <TightFancyImageButton
                    key= {i}
                    element={frontPageElements[j]}
                ></TightFancyImageButton>
            )

            j++;
            j %= frontPageElements.length;
        }

        this.scrollKeyframes = keyframes`100% { 
            transform: translateX(${Math.floor(-225*elementsCount*0.5)}px);
          }`
        this.ImageWrapper = styled.div`
          animation: ${this.scrollKeyframes} ${Math.floor((elementsCount*225)/window.screen.width*12)}s linear infinite
        `
    }

    main() {
        const self = this;
        return <Home onClick={self.switchView.bind(self)} ImageWrapper={this.ImageWrapper} elementPool={frontPageElements} imgList={this.state.imgList}></Home>
    }

    timeline() {
        return <div>
            <h1 style={{textAlign: "center"}}>
                Timeline
            </h1>

            {this.state.cascade && gameOnlyTimelineElements.map((v,k) => {
                return <TimelineEntry name={v.name} key={k} blurb={v.blurb} image={v.imgName} timeframe={v.timeframe} uneven={k%2===1} sourceLink = {v.sourceLink} playLink={v.playLink} playText={v.playText} type={v.typeName}/>
            
            })}
            {!this.state.cascade && timelineElements.map((v,k) => {
                return <TimelineEntry name={v.name} key={k} blurb={v.blurb} image={v.imgName} timeframe={v.timeframe} uneven={k%2===1} sourceLink = {v.sourceLink} playLink={v.playLink} playText={v.playText} type={v.typeName}/>
            })}

            {this.state.elaborate && <div>
                <h2>
                    Employment
                </h2>

                {employmentTimelineElements.map((v,k) => {
                    return <TimelineEntry name={v.name} key={k} blurb={v.blurb} image={v.imgName} timeframe={v.timeframe} uneven={k%2===1} playLink={v.playLink} playText={v.playText} type={v.typeName}/>
                })}
            </div>}
        </div>
    }

    programmingSection() {
        return <Programming></Programming>
    }

    gdSection() {
        return <Gamedesign></Gamedesign>
    }

    artSection() {
        return <Art></Art>
    }

    musicSection() {
        return <Music></Music>
    }

    projectWrapper(pageFunc) {
        const self = this;
        return <div>
            {pageFunc()}
            <div className="divider"></div>
            <h2>Projects</h2>
            <Home onClick={self.switchView.bind(self)} ImageWrapper={this.ImageWrapper} elementPool={frontPageElements} imgList={this.state.imgList}></Home>
        </div>
    }

    stateMap = {
        "a-christmas-thing": () => this.projectWrapper.bind(this)(() => <ProjectChristmas></ProjectChristmas>),
        "sally's-scribbles": () => this.projectWrapper.bind(this)(() => <ProjectScribbles></ProjectScribbles>),
        "inkjet": () => this.projectWrapper.bind(this)(() => <ProjectInkjet></ProjectInkjet>),
        "hotel-marcel": () => this.projectWrapper.bind(this)(() => <ProjectHotelMarcel></ProjectHotelMarcel>),
        "games-with-jellingfish": () => this.projectWrapper.bind(this)(() => <ProjectJellingfish></ProjectJellingfish>),
        "laser-kart": () => this.projectWrapper.bind(this)(() => <ProjectLaserKart></ProjectLaserKart>),
        "barry's-bog-jog": () => this.projectWrapper.bind(this)(() => <ProjectBogJog></ProjectBogJog>),
        "project-flurret": () => this.projectWrapper.bind(this)(() => <ProjectFlurret></ProjectFlurret>),
        "system-sync": () => this.projectWrapper.bind(this)(() => <ProjectSystemSync></ProjectSystemSync>),
        "bumbling-builders": () => this.projectWrapper.bind(this)(() => <ProjectBumbling></ProjectBumbling>),
        "laser-cat": () => this.projectWrapper.bind(this)(() => <ProjectLasercat></ProjectLasercat>),
        "my-neighbour-john": () => this.projectWrapper.bind(this)(() => <ProjectJohn></ProjectJohn>),
        0: this.main.bind(this),
        1: this.timeline.bind(this),
        2: this.programmingSection.bind(this),
        3: this.gdSection.bind(this),
        4: this.artSection.bind(this),
        5: this.musicSection.bind(this),
    }

    mainPage() {
        return <div>
            {this.stateMap[this.state.state] && this.stateMap[this.state.state]()}
            {(this.state.state == 6 && (this.state.elaborate || this.state.cascade)) && <About></About>}
        </div>
    }

    switchView(idx) {
        this.setState({state: idx});
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    render() {
        return (
            <div className="App">
                <Router>
                    {(!this.state.elaborate && !this.state.cascade) && <div className="top">
                        <img className="logo" src={(this.state.elaborate || this.state.cascade) ? logo : logo2} alt={"Game Design & more by <br>" + ((this.state.elaborate || this.state.cascade) ? "Henri 'Enjl' Beeres" : "Enjl")}></img>

                        {!this.state.onepage && <div className="navbar">
                        <div>
                            <TranslucentButton index={0} active = {this.state.state === 0} onClick={this.switchView.bind(this)}>
                                Games
                            </TranslucentButton>
                            <TranslucentButton index={1} active = {this.state.state === 1} onClick={this.switchView.bind(this)}>
                                Timeline
                            </TranslucentButton>
                            <TranslucentButton index={4} active = {this.state.state === 4} onClick={this.switchView.bind(this)}>
                                Art
                            </TranslucentButton>
                            <TranslucentButton index={5} active = {this.state.state === 5} onClick={this.switchView.bind(this)}>
                                Music
                            </TranslucentButton>
                            {this.state.elaborate && <TranslucentButton index={6} active = {this.state.state === 6} onClick={this.switchView.bind(this)}>
                                About
                            </TranslucentButton>}
                        </div>
                    </div>}
                    </div>}


                    <div className="outerBorder">
                        {(this.state.elaborate || this.state.cascade) &&
                        <div>
                            <img className="logo" src={(this.state.elaborate || this.state.cascade) ? logo : logo2} alt={"Game Design & more by <br>" + ((this.state.elaborate || this.state.cascade) ? "Henri 'Enjl' Beeres" : "Enjl")}></img>
                            {this.state.state != 0 && <TranslucentButton index={0} active = {this.state.state === 0} onClick={this.switchView.bind(this)}>
                                Home
                            </TranslucentButton>}
                        </div>
                        }
                        {((this.state.elaborate || this.state.cascade) && this.state.state == 0) && <div>
                            <About/>
                            <div className="divider"></div>
                        </div>
                        }

                        {this.state.cascade && <CPP></CPP>}

                        {(this.state.elaborate && this.state.state == 0) && <h1>
                            Projects
                        </h1>}
                        {!this.state.cascade && this.mainPage()}
                        {this.state.cascade && <div className="divider"></div>}
                        {this.state.cascade && this.timeline()}

                        {(this.state.elaborate || this.state.cascade) && 
                            <div style={{textAlign: "center"}}>
                                <div className="divider"></div>
                                <h1>
                                    Contact
                                </h1>
                                                
                                <p>
                                    If you would like to get in touch, please contact me at <a className="coolLink" style={{padding: "2px 6px"}} href="mailto:henri.beeres@unitybox.de">henri.beeres@unitybox.de</a> or shoot me a DM on Discord at @enjl.
                                </p>

                                <h2>
                                    Other sites
                                </h2>

                                <div>
                                    <a style={{margin: "10px"}} target="_blank" rel="noreferrer" className="coolLink" href="https://audiomack.com/enjl">Audiomack</a>
                                    <a style={{margin: "10px"}} target="_blank" rel="noreferrer" className="coolLink" href="https://enjl.bandcamp.com/">Bandcamp</a>
                                    <a style={{margin: "10px"}} target="_blank" rel="noreferrer" className="coolLink" href="https://enjlectric.blogspot.com/">Blog</a>
                                    <a style={{margin: "10px"}} target="_blank" rel="noreferrer" className="coolLink" href="https://enjl.itch.io/">itch.io</a>
                                    <a style={{margin: "10px"}} target="_blank" rel="noreferrer" className="coolLink" href="https://mastodon.gamedev.place/@enjl">Mastodon</a>
                                    <a style={{margin: "10px"}} target="_blank" rel="noreferrer" className="coolLink" href="https://www.youtube.com/@enjlectric">YouTube</a>
                                </div>
                        </div>}
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
