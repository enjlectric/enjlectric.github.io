import React from 'react';
import FlexButton from './flexbutton';

class Home extends React.Component {
    static defaultProps = {
        ImageWrapper: <div></div>,
        imgList: [],
        elementPool: [],
        onClick: function() {}
    }

    render() {
        return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {this.props.elementPool.map((v, k) => {
                return <FlexButton key={k} onClick={this.props.onClick} element={v}/>
            })}

            {/* <div className="tightGradientBox">
                <div style={{overflow: "hidden", height: "125px", position: "relative"}}>
                    <this.props.ImageWrapper className="imageWrapper" >
                        {this.props.imgList}
                    </this.props.ImageWrapper>
                </div>
            </div> */}
        </div>
        )
    }
}

export default Home;