import * as React from "react";
import {Face} from "../Face/index";

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
			<div style={{position: "relative", width: this.props.size * 5}}>
				{this.renderBackFaces()}
				{this.renderSelectedMood()}
			</div>
		);
	}

	private renderBackFaces() {
		let grey = "#eeeeee";
		let faces = [];
		for (let i = 0; i < 5; i++) {
			faces.push((
				<Face
					mood={-1 + 0.5 * i}
					key={-1 + 0.5 * i}
					neutralColor={grey}
					negativeColor={grey}
					positiveColor={grey}
					size={this.props.size}
					onClick={this.updateMood}
				/>
			));
		}
		return (
			<div style={{position: "absolute"}}>
				{faces}
			</div>
		);
	}

	private updateMood = (mood: number) => {
		this.setState({mood});
		if(this.props.onChange) this.props.onChange(mood);
	};

	private renderSelectedMood = () => {
		if (this.state.mood === null)return null;
		const position = (1 + this.state.mood) * 2;
		return (
			<div style={{position: "absolute", left: this.props.size * position}}>
				<Face
					mood={this.state.mood}
					size={this.props.size}
				/>
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
