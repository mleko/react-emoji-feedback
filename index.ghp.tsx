import * as React from "react";
import * as ReactDOM from "react-dom";
import {Feedback} from "./index";

class GhPage extends React.Component<void, State> {

	public constructor(props) {
		super(props);
		this.state = {
			opinion: null
		};
	}

	public render(): JSX.Element {
		return (
			<div>
				<h1>{null !== this.state.opinion ? "Your opinion: " + this.state.opinion : "How much you like this component?"}</h1>
				<Feedback size={100} onChange={this.change}/>
			</div>
		);
	}

	private change = (opinion: number) => {
		this.setState({opinion});
	}
}
interface State {
	opinion?: number;
}

// Render component into the body.
let element = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(element);
ReactDOM.render(<GhPage/>, element);
