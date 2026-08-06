import React, { useMemo } from "react";

import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  MarkerType
} from "reactflow";

import "reactflow/dist/style.css";



function PersonNode({data}){


return (

<div

className="
w-44
bg-[#0b1120]
border
border-blue-500/50
rounded-2xl
p-4
shadow-lg
"

>


<Handle

type="target"

position={Position.Left}

className="!bg-blue-400"

/>



<p className="
text-[10px]
tracking-widest
text-blue-400
font-semibold
">

ENTITY

</p>



<h3 className="
text-lg
font-bold
mt-2
text-white
">

{data.label}

</h3>



<p className="
text-xs
text-gray-400
mt-1
">

Person

</p>



<Handle

type="source"

position={Position.Right}

className="!bg-blue-400"

/>



</div>

);


}





const nodeTypes={

person:PersonNode

};






function RelationshipGraph({
connections=[]
}){



const {
nodes,
edges
}=useMemo(()=>{


const people=[];



connections.forEach(item=>{


if(!people.includes(item.source))
people.push(item.source);


if(!people.includes(item.target))
people.push(item.target);


});




const nodes=people.map((person,index)=>({


id:person,


type:"person",


position:{


x:index===0 ? 80 : 420,

y:160

},


data:{

label:person

}


}));







const edges=connections.map((item,index)=>({


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

color:"#fff"

},


markerEnd:{

type:MarkerType.ArrowClosed,

color:"#3b82f6"

}


}));




return {

nodes,

edges

};


},[connections]);






if(!connections.length){


return (

<div className="
h-80
rounded-2xl
border
border-white/10
bg-[#0b1120]
flex
items-center
justify-center
text-gray-500
">

No relationship data available

</div>

);


}






return (

<div

className="
h-[380px]
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


proOptions={{

hideAttribution:true

}}



>



<Background

gap={24}

size={1}

/>



<Controls

className="
bg-[#0b1120]
border
border-white/10
"

/>



</ReactFlow>



</div>

);



}


export default RelationshipGraph;