import * as React from "react";
import * as ReactDOM from "react-dom";
import {Face} from "./src/component/Face/index";

// Render a simple React component into the body.
let element = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(element);
ReactDOM.render(
	(
		<div>
			<Face mood={1}/>
			<Face mood={0.5}/>
			<Face mood={0}/>
			<Face mood={-.5}/>
			<Face mood={-1}/>
		</div>
	), element);
