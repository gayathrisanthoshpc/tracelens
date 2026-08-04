import React from "react";
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position
} from "reactflow";

import "reactflow/dist/style.css";



function PersonNode({ data }) {


  return (

    <div className="bg-gray-800 border border-blue-500 rounded-xl px-5 py-3 shadow-lg">


      <Handle
        type="target"
        position={Position.Left}
      />


      <div className="flex items-center gap-2">

        <span>
          👤
        </span>


        <span className="font-semibold text-white">

          {data.label}

        </span>


      </div>



      <Handle
        type="source"
        position={Position.Right}
      />


    </div>

  );

}






function RelationshipGraph({ connections = [] }) {



  const nodeTypes = {

    person: PersonNode

  };





  const nodes = [];

  const edges = [];



  const people = [];




  connections.forEach((connection)=>{


    if(!people.includes(connection.source)){

      people.push(connection.source);

    }



    if(!people.includes(connection.target)){

      people.push(connection.target);

    }




  });







  people.forEach((person,index)=>{


    nodes.push({

      id: person,


      type:"person",


      position:{

        x:index * 300,

        y:150

      },


      data:{

        label:person

      }


    });


  });








  connections.forEach((connection,index)=>{


    edges.push({


      id:`edge-${index}`,


      source:connection.source,


      target:connection.target,


      label:connection.relation,


      animated:true,

      style:{

        strokeWidth:2

      }


    });



  });









  return (


    <div

      className="bg-gray-950 rounded-2xl border border-gray-800"

      style={{

        height:450

      }}

    >



      {


        connections.length > 0 ? (


          <ReactFlow

            nodes={nodes}

            edges={edges}

            nodeTypes={nodeTypes}

            fitView

          >


            <Background/>


            <Controls/>


          </ReactFlow>



        ) : (



          <div className="h-full flex items-center justify-center text-gray-400">


            No relationship data available


          </div>



        )


      }



    </div>


  );


}



export default RelationshipGraph;