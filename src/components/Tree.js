import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import React from "react";
import CircleNode from "./CircleNode";

// example edge = { id: "e1-2", source: "1", target: "2" }
const nodeTypes = { circleNode: CircleNode };
const NODE_SIZE = 50;
const LEVEL_SEPARATION = 150;
const INIT_Y_OFFSET = 50;
const INIT_X_OFFSET = window.innerWidth / 2 - NODE_SIZE / 2;

function constructGraph(graphList) {
	let nodes = [];
	let edges = [];

	// [5, 1, 4]

	//      5
	//     / \
	//    1   4

	let levelLength = 1;
	let level = 1;
	let i = 0;

	while (i < graphList.length) {
		for (let j = 0; j < levelLength; j++) {
			// create nodes with calculated x, y coordsR
			const x = i === 0 ? INIT_X_OFFSET : getX(j);
			const y = i === 0 ? INIT_Y_OFFSET : getY(level);
		}
		levelLength *= 2;
		i += levelLength;
		level++;
	}

	for (let i = 0; i < graphList.length; i++) {
		// this is where we leave it off for tonight!
	}

	console.log(typeof window.innerWidth);

	const newNode = {
		id: "1",
		type: "circleNode",
		position: { x: INIT_X_OFFSET, y: 50 },
		data: { value: graphList[0] },
	};
	nodes.push(newNode);
	return [nodes, edges];
}

function getY(level) {
	return (level - 1) * (LEVEL_SEPARATION + NODE_SIZE) + INIT_Y_OFFSET;
}
function getX(pos) {
	return 0;
}

export default function Tree({ graphList }) {
	const [initNodes, initEdges] = constructGraph(graphList);

	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<ReactFlow
				nodes={initNodes}
				edges={initEdges}
				nodeTypes={nodeTypes}
				draggable={false}
				panOnDrag={false}
				zoomOnScroll={false}
			/>
		</div>
	);
}
