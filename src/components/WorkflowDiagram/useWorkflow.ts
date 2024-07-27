import { useCallback } from "react";
import {
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  EdgeTypes,
  MarkerType,
  Position,
} from "@xyflow/react";

import MyAccountNode from "@/components/nodes/CustomNode";
import CustomEdge from "@/components/edges/CustomEdge";
import userIcon from "@/assets/account.png";

const initialNodes: CustomNode[] = [
  {
    id: "pbc",
    type: "pbc",
    position: { x: 100, y: 0 },
    data: {
      title: "Personal Banking Customer",
      type: "Person",
      content: "A customer of the bank, with personal bank accounts.",
      color: "bg-blue-600",
      icon: userIcon,
      handler: [
        { position: Position.Bottom, type: "source", id: "pbc-a" },
        { position: Position.Right, type: "target" },
      ],
    },
  },
  {
    id: "ibs",
    type: "ibs",
    position: { x: 100, y: 200 },
    data: {
      title: "Internet Banking System",
      type: "Software System",
      content:
        "Allows customers to view information about their bank accounts, and make payments",
      color: "bg-blue-300",
      handler: [
        { position: Position.Top, type: "target" },
        { position: Position.Right, type: "source", id: "ibs-a" },
        { position: Position.Bottom, type: "source", id: "ibs-b" },
      ],
    },
  },
  {
    id: "mbs",
    type: "mbs",
    position: { x: 100, y: 400 },
    data: {
      title: "Mainframe Banking System",
      type: "Software System",
      content:
        "Stores all of the core banking information about customers, accounts, transactions, etc.",
      color: "bg-gray-400",
      handler: [{ position: Position.Top, type: "target" }],
    },
  },
  {
    id: "email",
    type: "email",
    position: { x: 500, y: 200 },
    data: {
      title: "E-mail System",
      type: "Software System",
      content: "The internal Microsoft Exchange e-mail system.",
      color: "bg-gray-400",
      handler: [
        { position: Position.Left, type: "target" },
        { position: Position.Top, type: "source", id: "email-a" },
      ],
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "pbc->ibs",
    source: "pbc",
    target: "ibs",
    data: {
      label: "Views account balances, and makes payments using",
    },
    type: "custom",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "ibs->mbs",
    source: "ibs",
    target: "mbs",
    data: {
      label: "Gets account information from, and makes payments using",
    },
    type: "custom",
    sourceHandle: "ibs-b",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "ibs->email",
    source: "ibs",
    target: "email",
    sourceHandle: "ibs-a",
    type: "straight",
    label: "Sends e-mail using",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "email->pbc",
    source: "email",
    target: "pbc",
    animated: true,
    type: "straight",
    label: "Sends e-mails to",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

const nodeTypes = {
  pbc: MyAccountNode,
  ibs: MyAccountNode,
  mbs: MyAccountNode,
  email: MyAccountNode,
};

const edgeTypes: EdgeTypes = {
  custom: CustomEdge,
};

export function useWorkflow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds: Edge) => addEdge(params, eds)),
    [setEdges]
  );

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    nodeTypes,
    edgeTypes,
  };
}
