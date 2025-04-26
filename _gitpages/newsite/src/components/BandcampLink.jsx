import { Component } from 'preact';

class BandcampLink extends Component {
    static defaultProps = {
        src: "",
        name: "Song",
    }

    render() {
        return (
            <iframe
                title={this.props.name}
                src={this.props.src}
                seamless
                style={{margin: "6px 10px", border: 0, height: "240px", borderRadius: "4px", width: "240px", maxWidth: "80%"}}
                allow="encrypted-media;">
            </iframe>
        )
    }
}

export default BandcampLink;