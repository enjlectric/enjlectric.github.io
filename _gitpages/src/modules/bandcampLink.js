import React from 'react';

class BandcampLink extends React.Component {
    static defaultProps = {
        src: "",
        name: "Song",
    }

    render() {
        return (
            <iframe
                title={this.props.name}
                src={this.props.src}
                style={{margin: "6px 10px", border: 0, height: "120px", borderRadius: "4px", width: "400px", maxWidth: "80%"}}
                allow="encrypted-media;">
            </iframe>
        )
    }
}

export default BandcampLink;