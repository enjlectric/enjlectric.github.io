import './explainable.css';
import { SetMessage } from './Nyxel';

export function Explainable(props) {
    if (props.style == undefined) {
        props.style = {}
    }

    function setNyxelMessage(content) {
        SetMessage(content)
    }

    return (
        <a style = {props.style} href="" className="explainable" onClick={() => setNyxelMessage(props.text)}>
            {props.children}
        </a>
    );
}
