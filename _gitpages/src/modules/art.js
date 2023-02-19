import React from 'react';
import collage from '../images/collage.png'
import pic1 from '../images/picture_1.png'
import pic2 from '../images/picture_2.png'
import pic3 from '../images/picture_3.png'
import pic4 from '../images/picture_4.png'
import Parallax from './parallax'
import ParallaxImages from './parallaxImages'

class Art extends React.Component {
    static defaultProps = {
        imgName: "thumbnails_none.png",
        buttonHoverName: "No name",
        linkName: "",
        onClick: function() {}
    }

    static img;

    constructor(props) {
        super(props);

        this.img = require("../images/" + props.imgName);
    }

    referLink(event) {
        event.preventDefault();

        this.props.history.push('/site/' + this.props.linkName)

        this.props.onClick();
    }

    render() {
        return (
            <div>
        <div style={{backgroundColor: "#000a", margin: "10px", padding: "10px", borderRadius: "28px"}}>

            <h2>
                Character Collage
            </h2>
            
            <p>
                A collage of characters and creatures I have created and which I cherish.
            </p>

            <img src={collage} style={{borderRadius: "20px"}} alt="Character Collage" width="100%"></img>

        </div>
            <div style={{backgroundColor: "#000a", margin: "10px", padding: "10px", borderRadius: "28px"}}>
            <h2>
                Environments
            </h2>

            <div style={{
                width: "100%",
                columnCount: "3",
                columnWidth: "auto",
                columnGap: "24px",
                maxWidth: "100%"
            }}>

            <Parallax
                width = {500}
                height = {350}
                images = {[
                    {
                        img: ParallaxImages.b0, repeat: "repeat",
                        speedX: 0, speedY: 0, width: 1024, height: 480,
                        anchorX: 0, anchorY: 1
                    },
                    {
                        img: ParallaxImages.b5, repeat: "no-repeat",
                        speedX: 0, speedY: 0, width: 130, height: 130,
                        anchorX: 0.2, anchorY: 0.1
                    },
                    {
                        img: ParallaxImages.b6, repeat: "repeat-x",
                        speedX: -1, speedY: 0, width: 392, height: 170,
                        anchorX: 0, anchorY: 0.1
                    },
                    {
                        img: ParallaxImages.b1, repeat: "repeat-x",
                        speedX: -1, speedY: 0, width: 800, height: 480,
                        anchorX: 0, anchorY: 1
                    },
                    {
                        img: ParallaxImages.b2, repeat: "repeat-x",
                        speedX: -2, speedY: 0, width: 800, height: 480,
                        anchorX: 0, anchorY: 1
                    },
                    {
                        img: ParallaxImages.b3, repeat: "repeat-x",
                        speedX: -3, speedY: 0, width: 800, height: 480,
                        anchorX: 0, anchorY: 1
                    },
                ]}>
            </Parallax>

            <Parallax
                width = {500}
                height = {350}
                images = {[
                    {
                        img: ParallaxImages.c0, repeat: "repeat-x",
                        speedX: -0.5, speedY: 0, width: 640, height: 416,
                        anchorX: 0, anchorY: 1
                    },
                    {
                        img: ParallaxImages.c1, repeat: "repeat-x",
                        speedX: 0, speedY: 0, width: 640, height: 40,
                        anchorX: 0.2, anchorY: 0
                    },
                    {
                        img: ParallaxImages.c2, repeat: "repeat-x",
                        speedX: -1, speedY: 0, width: 640, height: 416,
                        anchorX: 0, anchorY: 1
                    },
                    {
                        img: ParallaxImages.c3, repeat: "repeat-x",
                        speedX: -2, speedY: 0, width: 640, height: 416,
                        anchorX: 0, anchorY: 1
                    },
                    {
                        img: ParallaxImages.c4, repeat: "repeat-x",
                        speedX: -3, speedY: 0, width: 640, height: 416,
                        anchorX: 0, anchorY: 1
                    },
                ]}>
            </Parallax>

                <Parallax
                    width = {500}
                    height = {700}
                    images = {[
                        {
                            img: ParallaxImages.a0, repeat: "repeat",
                            speedX: 0, speedY: 0, width: 180, height: 272,
                            anchorX: 0, anchorY: 1
                        },
                        {
                            img: ParallaxImages.a1, repeat: "repeat-x",
                            speedX: -1, speedY: 0, width: 112, height: 400,
                            anchorX: 0, anchorY: 0.55
                        },
                        {
                            img: ParallaxImages.a2, repeat: "repeat-x",
                            speedX: -2, speedY: 0, width: 204, height: 426,
                            anchorX: 0, anchorY: 0.67
                        },
                        {
                            img: ParallaxImages.a3, repeat: "repeat-x",
                            speedX: -3, speedY: 0, width: 344, height: 546,
                            anchorX: 0, anchorY: 1
                        },
                        {
                            img: ParallaxImages.a4, repeat: "repeat-x",
                            speedX: -3, speedY: 0, width: 384, height: 284,
                            anchorX: 0, anchorY: -0.31
                        },
                    ]}>
                </Parallax>

                <Parallax
                    width = {500}
                    height = {350}
                    images = {[
                        {
                            img: ParallaxImages.d0, repeat: "repeat-x",
                            speedX: -0.5, speedY: 0, width: 640, height: 356,
                            anchorX: 0, anchorY: 0
                        },
                        {
                            img: ParallaxImages.d1, repeat: "repeat-x",
                            speedX: -1, speedY: 0, width: 320, height: 86,
                            anchorX: 0.2, anchorY: 0.4
                        },
                        {
                            img: ParallaxImages.d2, repeat: "repeat-x",
                            speedX: -2, speedY: 0, width: 320, height: 86,
                            anchorX: 0, anchorY: 0.45
                        },
                        {
                            img: ParallaxImages.d4, repeat: "repeat-x",
                            speedX: -3, speedY: 0, width: 344, height: 144,
                            anchorX: 0, anchorY: 0.9
                        },
                        {
                            img: ParallaxImages.d3, repeat: "repeat-x",
                            speedX: -3, speedY: 0, width: 344, height: 112,
                            anchorX: 0, anchorY: 0.7
                        },
                        {
                            img: ParallaxImages.d5, repeat: "repeat-x",
                            speedX: -4, speedY: 0, width: 302, height: 178,
                            anchorX: 0, anchorY: 1.4
                        },
                    ]}>
                </Parallax>

                <Parallax
                    width = {500}
                    height = {448}
                    images = {[
                        {
                            img: ParallaxImages.e0, repeat: "repeat-x",
                            speedX: 0, speedY: 0, width: 512, height: 448,
                            anchorX: 0, anchorY: 0
                        },
                        {
                            img: ParallaxImages.e1, repeat: "repeat-x",
                            speedX: -1, speedY: 0, width: 512, height: 448,
                            anchorX: 0.2, anchorY: 0
                        },
                        {
                            img: ParallaxImages.e2, repeat: "repeat-x",
                            speedX: -2, speedY: 0, width: 512, height: 448,
                            anchorX: 0, anchorY: 0
                        },
                        {
                            img: ParallaxImages.e3, repeat: "repeat-x",
                            speedX: -3, speedY: 0, width: 512, height: 448,
                            anchorX: 0, anchorY: 0
                        },
                        {
                            img: ParallaxImages.e4, repeat: "repeat-x",
                            speedX: -4, speedY: 0, width: 512, height: 448,
                            anchorX: 0, anchorY: 0
                        }
                    ]}>
                </Parallax>
            </div>

            <img src={pic1} className="staticImage" alt="Tower" width="800px"></img>
            <img src={pic2} className="staticImage" alt="Computer" width="800px" ></img>
            <img src={pic3} className="staticImage" alt="Planet" width="800px" ></img>
            <img src={pic4} className="staticImage" alt="Machine" width="800px" ></img>
        </div>
        </div>
        )
    }
}

export default Art;