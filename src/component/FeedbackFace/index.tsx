import * as React from "react";
import {animate} from "react-easing";

import {Face} from "../Face";

@animate({duration: 700, easing: "ease-in-out"})
export class FeedbackFace extends React.Component<Props, void> {
	public render(): JSX.Element {
		if (this.props.mood === null)return null;
		const position = (1 + this.props.mood) * 2;
		let face = (
			<Face
				mood={this.props.mood}
				size={this.props.size}
			/>
		);
		return (
			<div style={{position: "absolute", left: this.props.size * position, display: "inline-block"}}>
				{face}
			</div>
		);
	}
}

interface Props {
	mood?: number;
	size: number;
}
