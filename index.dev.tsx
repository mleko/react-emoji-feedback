import "es6-shim";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Feedback} from ".";

// Render a simple React component into the body.
let element = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(element);
ReactDOM.render((<Feedback size={200}/>), element);
