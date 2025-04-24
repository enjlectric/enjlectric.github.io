import './stardiv.css';

const path = '../assets/div_border1';
const num = 2;
export function Stardiv(props) {
    if (props.style == undefined) {
        props.style = {}
    }
	let style = props.style
    //style.borderImage = "url(" + path + ((Math.floor(Math.random()*num)) + 1) + ".png) 30 30px 15px stretch"
	let keyframes = []
	const kfc = 12
	for (let i = 0; i < kfc; i++) {
		keyframes[i] = ""
	}
	let pc = 0
	function create_path_point(xx, yy, rr) {
		for (let i = 0; i < kfc; i++) {
			let xxx = (Math.floor(xx +
					rr * Math.sin(Math.PI * 2 * ((i+pc)/kfc)))/1000)
			let yyy = (Math.floor(yy +
					rr * Math.cos(Math.PI * 2 * ((i+pc)/kfc)))/1000)
			let angfx = (Math.floor(xx +
					rr * Math.sin(Math.PI * 2 * ((i+pc)/kfc)))/1000)
			let angfy = (Math.floor(yy +
					rr * Math.cos(Math.PI * 2 * ((i+pc)/kfc)))/1000)

			if (keyframes[i] == "") {
				keyframes[i] += "M " + xxx.toString() + " " + yyy.toString()
			}
			keyframes[i] += "Q "
			+ xxx.toString()
			+ " " + (yyy).toString()
			+ " " + (angfx).toString()
			+ " " + (angfy).toString()
		}
		pc++
	}
	// I hate that this is how it works
	// const wp1 = "M 0.01 0.03 Q 0.01 0.01 0.03 0.01 Q 0.450 0 0.95 0.01 Q 0.98 0.01 0.99 0.03 Q 1 0.500 0.99 0.98 Q 0.98 0.99 0.95 0.99 Q 0.500 1 0.03 0.99 Q 0.01 0.99 0.01 0.97 Q 0 0.500 0.01 0.03";
	// const wp2 = "M 0.01 0.04 Q 0.01 0.01 0.04 0.01 Q 0.450 0.02 0.700 0.01 Q 0.97 0.01 0.99 0.04 Q 0.98 0.550 0.99 0.96 Q 0.99 0.99 0.700 0.99 Q 0.500 0.98 0.04 0.99 Q 0.01 0.99 0.01 0.96 Q 0.02 0.450 0.01 0.04"
	create_path_point(12, 12, 4)
	create_path_point(500, 6, 4)
	create_path_point(988, 12, -4)
	create_path_point(994, 500, -4)
	create_path_point(988, 988, 4)
	create_path_point(500, 994, 4)
	create_path_point(12, 988, -4)
	create_path_point(6, 500, -4)
	let wpath = ""
	for (let i = 0; i < kfc; i++) {
		wpath += keyframes[i]
		wpath += ";"
	}
	wpath += keyframes[0]

	// const wpath = wp1 + ";" + wp2 + ";" + wp2 + ";" + wp1 + ";" + wp1;
	return (
		<div className="stardivouter">
			<div className="stardivclip" style = {style}>
				<div className="starry-div">
				{props.children}
				</div>
			</div>
			{props.stardivnoclip}
			<svg viewBox="0 0 1 1" width="1" height="1">
			<clipPath id="stardivpath" clipPathUnits="objectBoundingBox">
				<path d=''>
					<animate attributeName="d" values={wpath} dur = "2s" repeatCount="indefinite" />
				</path>
			</clipPath>
			</svg>
		</div>
	);
}
