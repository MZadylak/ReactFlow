import { EdgeProps, EdgeLabelRenderer, BaseEdge, Edge } from "@xyflow/react";

const CustomStraightEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  data,
  markerEnd,
  style = {},
}: EdgeProps<Edge<{ label: string }>>) => {
  const centerX = (sourceX + targetX) / 2;
  const centerY = (sourceY + targetY) / 2;

  const edgePath = `M ${sourceX},${sourceY} L ${targetX},${targetY}`;

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            transform: `translate(-50%, -50%) translate(${centerX}px,${centerY}px)`,
          }}
          className="absolute nodrag nopan bg-white max-w-16 p-1 text-center"
        >
          <p className="text-[6px]">{data?.label}</p>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomStraightEdge;
