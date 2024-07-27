import { ReactFlow, Background, BackgroundVariant } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { useWorkflow } from "@/components/WorkflowDiagram/useWorkflow";

export default function WorkflowDiagram() {
  const workflow = useWorkflow();

  return (
    <div className="h-screen w-screen bg-white">
      <ReactFlow {...workflow} fitView>
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
      </ReactFlow>
    </div>
  );
}
