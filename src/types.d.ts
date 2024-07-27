import { HandleType, Node, Position } from "@xyflow/react";

declare global {
  type Handler = {
    id?: string;
    position: Position;
    type: HandleType;
  } & (
    | { type: "source"; id: string }
    | { type: "target" | "other"; id?: never }
  );

  type CustomNodeModel = {
    title: string;
    type: string;
    content: string;
    color: string;
    handler: Handler[];
    icon?: string;
  };

  type CustomNode = Node<CustomNodeModel>;

  interface CustomNodeProps {
    data: CustomNodeModel;
  }
}

export { CustomNodeModel, CustomNode, CustomNodeProps };
