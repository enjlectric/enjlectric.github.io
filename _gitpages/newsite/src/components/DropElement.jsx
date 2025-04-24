import './dropElement.css';

export function DropElement(props) {
    if (props.style == undefined) {
        props.style = {}
    }
    return (
        <div className="dropElement">
            {props.children}
        </div>
    );
}
