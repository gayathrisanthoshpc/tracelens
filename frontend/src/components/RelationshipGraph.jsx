import React from "react";
import ReactFlow, {
  Background,
  Controls
} from "reactflow";

import "reactflow/dist/style.css";



function RelationshipGraph({ connections = [] }) {



  const nodes = [];

  const edges = [];



  const people = new Set();




  connections.forEach((connection, index) => {


    people.add(connection.source);

    people.add(connection.target);



    edges.push({

      id: `edge-${index}`,

      source: connection.source,

      target: connection.target,

      label: connection.relation


    });


  });






  Array.from(people).forEach((person, index)=>{


    nodes.push({

      id: person,

      position: {

        x: index * 250,

        y: 120

      },

      data: {

        label: person

      }


    });


  });







  return (


    <div

      className="bg-gray-900 rounded-xl border border-gray-800"

      style={{

        height:400,

        width:"100%"

      }}

    >



      {

        connections.length > 0 ? (


          <ReactFlow

            nodes={nodes}

            edges={edges}

            fitView

          >


            <Background/>

            <Controls/>


          </ReactFlow>


        ) : (


          <div className="h-full flex items-center justify-center text-gray-400">

            No connections detected

          </div>


        )

      }



    </div>


  );


}


export default RelationshipGraph;