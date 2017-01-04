import * as React from "react";

export class Face extends React.Component<Props, void> {
	public render(): JSX.Element {
		const mood = this.props.mood || 0;
		const negativeColor = this.props.negativeColor || "#FF2222";
		const neutralColor = this.props.neutralColor || "#FFFF22";
		const positiveColor = this.props.positiveColor || "#22FF22";
		const moodModifier = mood * (this.props.mod || 10);

		const smileBase = 25;
		let smileSide = smileBase - moodModifier * 0.5 - 5;
		let smileCenter = smileBase + moodModifier * 1.5 - 5;

		let color = this.rgbToHex(
			this.mixRgb(
				this.hexToRGB(neutralColor),
				this.hexToRGB(mood > 0 ? positiveColor : negativeColor),
				Math.abs(mood)
			)
		);

		const xPos = 18;
		return (
			<svg width={150} style={{stroke: "black", strokeWidth: 5, fill: color}} viewBox="-55 -55 110 110">
				<circle cx={0} cy={0} r={50}/>
				<g style={{stroke: "black"}}>
					<circle cx={-xPos} cy={-15} r={5} style={{fill: "black"}}/>
					<circle cx={xPos} cy={-15} r={5} style={{fill: "black"}}/>
					<path
						d={`M -${xPos} ${smileSide} Q 0 ${smileCenter} ${xPos} ${smileSide}`}
						style={{strokeWidth: 7, strokeLinecap: "round"}}
					/>
				</g>
			</svg>
		);
	}

	private hexToRGB(hex) {
		let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			} : null;
	}

	private componentToHex(c) {
		let hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	private rgbToHex(rgb) {
		return "#" + this.componentToHex(rgb.r) + this.componentToHex(rgb.g) + this.componentToHex(rgb.b);
	}

	private mixRgb(a, b, ratio) {
		ratio = Math.max(0, Math.min(1, ratio));
		return {
			r: Math.round(a.r * (1 - ratio) + b.r * ratio),
			g: Math.round(a.g * (1 - ratio) + b.g * ratio),
			b: Math.round(a.b * (1 - ratio) + b.b * ratio)
		};
	}
}

interface Props {
	mood?: number;
	positiveColor?: string;
	neutralColor?: string;
	negativeColor?: string;
	mod?: number;
}
