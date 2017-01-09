import * as React from "react";

import {Face} from "../Face";
import {FeedbackFace} from "../FeedbackFace";

export class Feedback extends React.Component<Props, State> {

	protected static defaultProps: Props = {
		size: 100
	};

	public constructor(props) {
		super(props);
		this.state = {
			mood: null
		};
	}

	public render(): JSX.Element {
		return (
			<div style={{position: "relative"}}>
				{this.renderBackFaces()}
				<FeedbackFace size={this.props.size} mood={this.state.mood}/>
			</div>
		);
	}

	private renderBackFaces() {
		let grey = "#eeeeee";
		let faces = [];
		for (let i = 0; i < 5; i++) {
			faces.push((
				<div style={{display: "inline-block"}} key={-1 + 0.5 * i}>
					<Face
						style={{display: "block"}}
						mood={-1 + 0.5 * i}
						neutralColor={grey}
						negativeColor={grey}
						positiveColor={grey}
						size={this.props.size}
						onClick={this.updateMood}
					/>
				</div>
			));
		}
		return faces;
	}

	private updateMood = (mood: number) => {
		this.setState({mood});
		if (this.props.onChange) this.props.onChange(mood);
	};

	private renderSelectedMood = () => {
		if (this.state.mood === null)return null;
		const position = (1 + this.state.mood) * 2;
		let face = (
			<Face
				mood={this.state.mood}
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
	size?: number;

	onChange?: (mood: number) => any;
}
interface State {
	mood?: number;
}
