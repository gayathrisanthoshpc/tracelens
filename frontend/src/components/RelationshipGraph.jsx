import ReactFlow, {
  Background,
  Controls
} from "reactflow";

import "reactflow/dist/style.css";


function RelationshipGraph({ connections = [] }) {


  const nodes = [];


  const people = new Set();



  connections.forEach((connection) => {

    people.add(connection.source);

    people.add(connection.target);

  });



  Array.from(people).forEach((person, index) => {

    nodes.push({

      id: person,

      position: {

        x: index * 250 + 50,

        y: 120

      },

      data: {

        label: person

      }

    });

  });





  const edges = connections.map((connection, index) => ({

    id: `edge-${index}`,

    source: connection.source,

    target: connection.target,

    label: connection.relation


  }));





  return (

    <div

      style={{

        height: 350,

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