import { Component } from 'preact';
import "./Dex.css"

class CreatureButton extends Component {
    render() {
        return (
            <button className="creatureButton">
                hi
            </button>
        )
    }
}

class Dex extends Component {
    render() {
        return (
            <div className="creatureContainer">
                <div className="creatureInfo">
                    <div className="creatureImage">

                    </div>
                    <div className="creatureDescription">
                        <div className="creatureDescriptionInner">
                            <h3>Name</h3>
                            <h4>Cool Rascal</h4>
                            <p>Goes dumpster diving for fun. Wouldn't you?</p>
                        </div>
                    </div>
                </div>
                <div className="creatureList">
                    <CreatureButton></CreatureButton>
                    <CreatureButton></CreatureButton>
                    <CreatureButton></CreatureButton>
                </div>
            </div>
        )
    }
}

export default Dex;