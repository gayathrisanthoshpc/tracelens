import React, { useMemo } from "react";

import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  MiniMap
} from "reactflow";

import "reactflow/dist/style.css";



function EntityNode({data}){


return(


<div

className="
w-48
bg-[#0b1120]
border
border-blue-500/50
rounded-2xl
p-5
shadow-xl
"

>


<Handle

type="target"

position={Position.Left}

/>



<p className="
text-xs
text-blue-400
tracking-widest
font-medium
">

ENTITY

</p>



<h3 className="
text-xl
font-semibold
mt-3
text-white
">

{data.label}

</h3>



<p className="
text-xs
text-gray-400
mt-2
">

Person

</p>




<Handle

type="source"

position={Position.Right}

/>



</div>


);


}







function RelationshipGraph({

connections=[]

}){



const nodeTypes={

entity:EntityNode

};







const {nodes,edges}=useMemo(()=>{



const people=[];



connections.forEach(item=>{


if(!people.includes(item.source))

people.push(item.source);



if(!people.includes(item.target))

people.push(item.target);


});







const generatedNodes=people.map((person,index)=>({


id:person,


type:"entity",


position:{


x:index===0?80:420,

y:120 + (index%2)*160


},



data:{


label:person


}



}));








const generatedEdges=connections.map((item,index)=>(


{


id:`edge-${index}`,

source:item.source,

target:item.target,

label:item.relation,


animated:true,


style:{


stroke:"#3b82f6",

strokeWidth:2


},


labelStyle:{


fill:"#cbd5e1",

fontSize:12,

fontWeight:600


},


labelBgStyle:{


fill:"#101a30",

fillOpacity:0.9


}



}


));





return{


nodes:generatedNodes,

edges:generatedEdges


};




},[connections]);










if(!connections.length){


return(

<div

className="
h-64
rounded-2xl
border
border-white/10
bg-[#0b1120]
flex
items-center
justify-center
text-gray-500
"

>

No relationship data available

</div>


);


}







return(


<div

className="
h-[420px]
rounded-2xl
overflow-hidden
border
border-white/10
bg-[#050816]
"

>


<ReactFlow


nodes={nodes}


edges={edges}


nodeTypes={nodeTypes}


fitView


fitViewOptions={{

padding:0.5

}}


defaultEdgeOptions={{

type:"smoothstep"

}}



>


<Background

gap={20}

/>



<Controls

className="
bg-[#0b1120]
border
border-white/10
"

/>



<MiniMap

className="
bg-[#0b1120]
"

/>



</ReactFlow>



</div>


);


}


export default RelationshipGraph;