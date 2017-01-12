import * as React from "react";

export class Face extends React.Component<Props, void> {
	public render(): JSX.Element {
		const size = this.props.size || 100;
		const mood = this.props.mood || 0;
		let color = this.props.color;
		const moodModifier = mood * (this.props.mod || 10);

		const smileBase = 25;
		let smileSide = smileBase - moodModifier * 0.5 - 5;
		let smileCenter = smileBase + moodModifier * 1.5 - 5;

		const xPos = 18;

		const style = Object.assign({stroke: "black", strokeWidth: 5, fill: color}, this.props.style || {});

		return (
			<svg
				onClick={this.click}
				width={size}
				style={style}
				viewBox="-55 -55 110 110"
			>
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

	private click = () => {
		if (this.props.onClick) this.props.onClick(this.props.mood);
	}
}

interface Props {
	size?: number;
	mood?: number;
	color: string;
	mod?: number;
	style?: {[id: string]: string};

	onClick?: (mood: number) => void;
}
