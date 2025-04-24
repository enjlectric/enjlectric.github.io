import './sticker.css';

export function Sticker(props) {
    if (props.style == undefined) {
        props.style = {}
    }

	if (props.padh == undefined) {
		props.padh = -12
	}
	if (props.padv == undefined) {
		props.padv = -12
	}

	if (props.side != undefined) {
		switch (props.side) {
			case "tl": {
				props.style.left = props.padh
				props.style.top = props.padv
				break
			}
			case "tr": {
				props.style.right = props.padh
				props.style.top = props.padv
				break
			}
			case "bl": {
				props.style.left = props.padh
				props.style.bottom = props.padv
				break
			}
			case "br": {
				props.style.right = props.padh
				props.style.bottom = props.padv
				break
			}
		}
	}
	let style = props.style
	return (
		<div className="sticker" style = {style}>
			{props.children}
		</div>
	);
}
