import { Handle } from "@xyflow/react";
import Icon from "@/components/Icon";

export default function MyAccountNode({ data }: CustomNodeProps) {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center w-48 text-center ${data.color} p-2 rounded-xl`}
      >
        {data.handler.map((handler, index) => (
          <Handle
            key={handler.id}
            type={handler.type}
            position={handler.position}
            className="w-2 h-2 bg-blue-500"
            id={handler.id || index.toString()}
          />
        ))}
        {data.icon && <Icon alt="user" src={data.icon} />}
        <div
          className={`flex flex-col items-center justify-center p-2 text-white w-full h-full shadow-lg  rounded-xl overflow-hidden min-h-30`}
        >
          <h3 className="text-[10px] font-semibold">{data.title}</h3>
          <p className="rounded px-1.25 py-0.5 text-[6px]">[{data.type}]</p>
          <p className="text-[8px]">{data.content}</p>
        </div>
      </div>
    </>
  );
}
