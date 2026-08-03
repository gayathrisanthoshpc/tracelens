import ReactFlow, {
  Background,
  Controls
} from "reactflow";

import "reactflow/dist/style.css";


function RelationshipGraph() {

  const nodes = [
    {
      id: "1",
      position: {
        x: 50,
        y: 100
      },
      data: {
        label: "Rahul"
      }
    },

    {
      id: "2",
      position: {
        x: 300,
        y: 100
      },
      data: {
        label: "Arjun"
      }
    }
  ];


  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      label: "contacted"
    }
  ];


  return (

    <div
      style={{
        height: 300,
        width: "100%"
      }}
      className="bg-gray-900 rounded-xl"
    >

      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >

        <Background />

        <Controls />

      </ReactFlow>


    </div>

  );

}


export default RelationshipGraph;