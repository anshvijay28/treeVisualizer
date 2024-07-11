import "../styles/CircleNode.css";
import { Handle, Position } from "@xyflow/react";
import React from "react";

export default function CircleNode({ data, isConnectable }) {
	return (
		<div className="circle-node">
			<Handle
				type="target"
				position={Position.Top}
				isConnectable={isConnectable}
			/>
			{data.value}
			<Handle
				type="source"
				position={Position.Bottom}
				isConnectable={isConnectable}
			/>
		</div>
	);
}
