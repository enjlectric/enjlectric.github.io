import React from 'react';
import styled, {keyframes} from "styled-components";

class Parallax extends React.Component {
    static defaultProps = {
        images: [],
    }

    constructor(props) {
        super(props);

        this.state = {
            imageConfigs: []
        }

        for (let i=0; i < this.props.images.length; i++) {
            const template = this.props.images[i];

            let xanchor = (template.anchorX ?? 0) * props.width - (template.anchorX ?? 0) * template.width;
            let yanchor = (template.anchorY ?? 0) * props.height - (template.anchorY ?? 0) * template.height;

            const scrollKeyframes = keyframes`100% { 
                background-position: ${(template.speedX ?? 0) * template.width + xanchor}px ${(template.speedY ?? 0) * template.height + yanchor}px;
            }`

            let newEntry = {
                anchorX: xanchor,
                anchorY: yanchor,
                repeat: template.repeat ?? "no-repeat",
                anchor: template.anchor ?? "middle",
                component: styled.div`
                background-image: url(${template.img});
                animation: ${scrollKeyframes} 25s linear infinite;
                animation-fill-mode: forwards;
              `
            }
            this.state.imageConfigs.push(newEntry)
        }
    }

    render() {
        return (
        <div style={{
            overflow: "hidden",
            borderRadius: "12px",
            display: "inline-block",
            maxWidth: "100%",
            margin: "20px 0px",
            width: this.props.width,
            height: this.props.height}}>
            {this.state.imageConfigs.map((v,k) => {
                return <v.component
                    style={{
                        overflow: "hidden", 
                        position: "relative",
                        width: "inherit",
                        height: "inherit",
                        marginTop: -Math.min(k, 1) * this.props.height,
                        backgroundRepeat: v.repeat,
                        backgroundPosition: `${v.anchorX}px ${v.anchorY}px`,
                        zIndex: k+1
                    }}
                    key={k}>
                </v.component>
            })}
        </div>
        )
    }
}

export default Parallax;