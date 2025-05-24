import './nu.css';
import {createRef, render} from 'preact';
import { PureComponent } from 'preact/compat';
import { createBrowserHistory } from 'history'
import 'highlight.js/styles/github-dark.css';
import cplusplus from 'highlight.js/lib/languages/cpp.js'
import hljs from 'highlight.js'

import img_space from './images/_spacebg.webp'
export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

class App extends PureComponent {
  canvasRef = null;
  constructor(props) {
      super(props);

      hljs.registerLanguage('cpp', cplusplus);
      hljs.highlightAll()

      const urlParams = new URLSearchParams(window.location.search);

      this.canvasRef = React.createRef()
  }

  componentDidMount() {
      let canvas = this.canvasRef.current;
      let ctx = canvas.getContext('2d');
      let img = new window.Image();
      img.src = img_space;
      ctx.drawImage(img, 10, 10);
      console.log(img);
      ctx.fill();
  }

  render() {
    return (
    <div className="App">
      <canvas ref = {this.canvasRef} id="space_background"></canvas>
    </div>
    )
  }
}

export default App;
