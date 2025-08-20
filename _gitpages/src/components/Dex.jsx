import { Component } from 'preact';
import "./Dex.css"

class CreatureButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parent: props.parent,
            creatureName: props.creatureName,
            onButtonPress: props.onButtonPress,
            imageCount: 0,
            idx: props.idx,
            description: "",
            zinger: ""
        }
    }

    makeButtons = function(self, resp) {
        if (resp !== undefined) {
            resp.json().then((text) => {
                self.setState({
                    description: text.desc,
                    zinger: text.zinger,
                    imageCount: text.imgcount
                })
            })
        }
    }

    componentDidMount() {
        let self = this;
        fetch("/Creatures/" + this.state.creatureName + "/info.json").then((resp) => self.makeButtons(self, resp))
    }

    render() {
        return (
            <button onClick={() => this.props.onButtonPress(this.state)} className="creatureButton">
                <div className="listIndex">{('00' + this.state.idx).slice(-3) + ": "}</div>
                {this.state.creatureName.replace("_", " ")}
            </button>
        )
    }
}

class Dex extends Component {

    constructor(props) {
        super(props)

        this.state = {
            buttons: [],
            currentImage: 0,
            maxImage: 0,
            description: "",
            creatureName: "",
            zinger: "",
        }
    }

    makeButtons(self, resp) {
        if (resp !== undefined) {
            resp.json().then((text) => {
                self.setState({buttons: text.creatures})
            })
        }
    }

    onButtonPress(buttonData) {
        buttonData.parent.setState({
            currentImage: 0,
            maxImage: buttonData.imageCount,
            zinger: buttonData.zinger,
            description: buttonData.description,
            creatureName: buttonData.creatureName
        })
    }

    cycleImage = function(dir) {
        this.setState({
            currentImage: (this.state.currentImage + this.state.maxImage + dir) % this.state.maxImage
        })
    }

    componentDidMount() {
        let self = this;
        fetch("/Creatures/names.json").then((resp) => self.makeButtons(self, resp))
    }

    render() {
        let self = this
        return (
            <div className="creatureContainer">
                <div className="creatureInfo">
                    <div className="creatureImage">
                        <img src={"/Creatures/" + this.state.creatureName + "/img" + (this.state.currentImage + 1) + ".png"}/>
                    </div>
                    <div className="creatureDescription">
                        {this.state.maxImage > 1 && <div className = "imageCycleButtons">
                            <button onClick={() => this.cycleImage(-1)}>&lt;</button>
                            <button onClick={() => this.cycleImage(1)}>&gt;</button>
                        </div>}
                        <br></br>
                        <div className="creatureDescriptionInner">
                            <h3>{this.state.creatureName.replace("_", " ")}</h3>
                            <h4>{this.state.zinger}</h4>
                            <p>{this.state.description}</p>
                        </div>
                    </div>
                </div>
                <div className="creatureList" id="creatureButtons">
                    {
                        this.state.buttons.map((b, idx) => {
                            return <CreatureButton creatureName = {b} idx = {idx+1} parent = {self} onButtonPress = {this.onButtonPress}></CreatureButton>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Dex;