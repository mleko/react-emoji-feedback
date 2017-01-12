import * as React from "react";
import {mixHex} from "../../functions/colorFunctions";
import {Face} from "../Face/index";

export class MoodColoredFace extends React.Component<Props, void> {
	public render(): JSX.Element {
		const mood = this.props.mood || 0;
		const negativeColor = this.props.negativeColor || "#FF2222";
		const neutralColor = this.props.neutralColor || "#FFFF22";
		const positiveColor = this.props.positiveColor || "#22FF22";

		let color = mixHex(neutralColor, mood > 0 ? positiveColor : negativeColor, Math.abs(mood));

		return (
			<Face
				color={color}
				{...this.props}
			/>
		);
	}
}

interface Props {
	size?: number;
	mood?: number;
	positiveColor?: string;
	neutralColor?: string;
	negativeColor?: string;
	mod?: number;
	style?: {[id: string]: string};

	onClick?: (mood: number) => void;
}