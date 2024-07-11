import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import React from "react";
import CircleNode from "./CircleNode";

// example edge = { id: "e1-2", source: "1", target: "2" }
const nodeTypes = { circleNode: CircleNode };
const NODE_SIZE = 50;
const DIST_Y = 100;
const DIST_X = 100;
const INIT_Y_OFFSET = 50;
const INIT_X_OFFSET = window.innerWidth / 2 - NODE_SIZE;

function createNode(id, x, y, value) {
	return {
		id: id,
		type: "circleNode",
		position: { x: x, y: y },
		data: { value: value },
	};
}

function createGraph(graphList) {
	let nodes = [];
	let edges = [];

	// [5, 1, 4]

	//      5
	//     / \
	//    1   4

	let level = 0;
	let i = 0;

	// coords for nodes are by top left corner

	while (i < graphList.length) {
		for (let j = 0; j < 2 ** level; j++) {
			if (typeof graphList[j] !== "number") continue;

			// i === 0 case is for root node
			const x = i === 0 ? INIT_X_OFFSET : getX(level, j);
			const y = i === 0 ? INIT_Y_OFFSET : getY(level);

			nodes.push(createNode((j + i).toString(), x, y, graphList[j + i]));
		}
		i += 2 ** level;
		level++;
	}
	console.log(nodes);

	return [nodes, edges];
}

function getX(level, idx) {
	// calculate number of nodes on this level
	const numNodes = 2 ** level;

	// calculate level offset
	const levelSize = NODE_SIZE * numNodes + DIST_X * (numNodes - 1);
	const levelOffset = (window.innerWidth - levelSize - NODE_SIZE) / 2;

	// calculate node x offset
	const nodeOffset =
		idx === 0 ? levelOffset : levelOffset + idx * (NODE_SIZE + DIST_X);

	return nodeOffset;
}

function getY(level) {
	return level * (NODE_SIZE + DIST_Y) + INIT_Y_OFFSET + NODE_SIZE / 2;
}

export default function Tree({ graphList }) {
	const [nodes, edges] = createGraph(graphList);

	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
				draggable={false}
				panOnDrag={false}
				zoomOnScroll={false}
			/>
		</div>
	);
}
