import React from "react";
import Tree from "./Tree.js";
import '../styles/App.css';

export default function App() {
	return (
		<div className="graph-container">
			<Tree graphList={[5, 1, 4]}/>;
		</div>
	);
}

// we need a way to accept user input
// we need a way to validate that user input

// then we need a way to generate nodes
// on the center of the screen that too

// 1) Center Tree
