import './nyxel.css';
import i_backGrass from '../assets/grass_back.png';
import i_foreGrass from '../assets/grass_front.png';
import i_nyxel from '../assets/nyxel_look.png';
import { Component } from 'preact';

var nyxelSingleton = undefined

export function SetMessage(messageContents) {
    nyxelSingleton.setState({text: messageContents})
}

export class Nyxel extends Component {
    constructor(props) {
        super(props)
        if (props.style == undefined) {
            props.style = {}
        }

        this.state = {
            text: ""
        }
        nyxelSingleton = this
    }
	imgWidth = "600px";
	nyxelWidth = "240px";

    render() {
        return (
            <div>
                <div className="nyxelCorner">
                    <img width={this.imgWidth} height="auto" 	className="overlapImg" src={i_backGrass}/>
                    <img width={this.nyxelWidth} height="auto" 	className="nyxel" src={i_nyxel}/>
                    <img width={this.imgWidth} height="auto" 
                        className="overlapImg" src={i_foreGrass}/>
                </div>
                
                {(this.state.text != "") ? <div className="speechBubble">{this.state.text}</div> : <div></div>}
            </div>
        );
    }
}
