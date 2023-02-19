import React from 'react';
import portrait from '../images/portrait.jpg'

class About extends React.Component {
    render() {
        return (
            <div style={{textAlign: "left"}}>
                <h1 style={{margin: "40px auto"}}>
                    Hey!
                </h1>
                <img src={portrait} alt="Portrait" className="reflectiveImage" style={{width: "250px", float: "right", borderRadius: "20px", margin: "20px 10%"}}/>
                <p>
                    My name is Henri Beeres. I'm a German game dev who specializes in <span>programming and design</span>.
                </p>
                <p>
                    I've been working on game-related projects in my free time since 2010. In 2016, I began studying at the Mediadesign Hochschule Düsseldorf where in 2019 I obtained my B.Sc. in Game Design. Over the years I have worked on many aspects of games, including Level Design, Back- and Front-End Programming, UI/UX Design, creating Pixel Art, as well as creating Music and Sound Effects. If you would like to get in touch, please email me at <a className="coolLink" style={{padding: "2px 6px"}} href="mailto:henri.beeres@unitybox.de">henri.beeres@unitybox.de</a> or shoot me a DM on Discord at @Enjl#6208.
                </p>
                <div style={{clear: "both"}}></div>
                <h2>
                    Programming and scripting
                </h2>
                <p>
                    C#, JavaScript (ReactJS), Lua, C++, GLSL, HLSL
                </p>
                <h2>
                    Software
                </h2>
                <p>
                    Unity, Git, Unreal, Perforce, GameMaker, Paint.NET
                </p>
                {/* <h2>
                    Programming and scripting
                </h2>
                <table style={{width: "100%"}}>
                    <tr>
                        <td>C#</td><td>▰▰▰▰▰</td><td></td><td></td>
                        <td>JavaScript</td><td>▰▰▰▰▱</td><td></td><td></td>
                        <td>Lua</td><td>▰▰▰▰▰</td>
                    </tr>
                    <tr>
                        <td>C++</td><td>▰▰▰▱▱</td><td></td><td></td>
                        <td>HTML</td><td>▰▰▰▱▱</td><td></td><td></td>
                        <td>Python</td><td>▰▰▱▱▱</td>
                    </tr>
                    <tr>
                        <td>Java</td><td>▰▰▱▱▱</td><td></td><td></td>
                        <td>CSS</td><td>▰▰▰▱▱</td><td></td><td></td>
                        <td>GLSL</td><td>▰▰▰▱▱</td>
                    </tr>
                    <tr>
                        <td>GML</td><td>▰▰▱▱▱</td><td></td><td></td>
                        <td>PHP</td><td>▰▰▱▱▱</td><td></td><td></td>
                        <td>HLSL</td><td>▰▰▰▱▱</td>
                    </tr>
                </table>
                <h2>
                    Software
                </h2>
                <table style={{width: "100%"}}>
                    <tr>
                        <td>Unity</td><td>▰▰▰▰▰</td><td></td><td></td>
                        <td>Git</td><td>▰▰▰▰▰</td><td></td><td></td>
                        <td>Adobe Suite</td><td>▰▰▰▱▱</td>
                    </tr>
                    <tr>
                        <td>Unreal</td><td>▰▰▰▱▱</td><td></td><td></td>
                        <td>Perforce</td><td>▰▰▰▰▱</td><td></td><td></td>
                        <td>Substance</td><td>▰▰▰▱▱</td>
                    </tr>
                    <tr>
                        <td>GameMaker</td><td>▰▰▰▱▱</td><td></td><td></td>
                        <td>MySQL</td><td>▰▰▰▱▱</td><td></td><td></td>
                        <td>Paint.NET</td><td>▰▰▰▰▰</td>
                    </tr>
                    <tr>
                        <td>Qt</td><td>▰▱▱▱▱</td><td></td><td></td>
                        <td>MS Office</td><td>▰▰▰▱▱</td><td></td><td></td>
                        <td>LMMS</td><td>▰▰▰▱▱</td>
                    </tr>
                </table> */}
            </div>
        )
    }
}

export default About;