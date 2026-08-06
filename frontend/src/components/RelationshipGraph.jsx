import React, { useMemo } from "react";

import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  MarkerType
} from "reactflow";

import "reactflow/dist/style.css";



function PersonNode({ data }) {


return (

<div
className="
w-52
bg-[#0b1120]
border
border-blue-500/40
rounded-2xl
p-5
shadow-xl
"
>


<Handle
type="target"
position={Position.Left}
className="!bg-blue-400"
/>



<div className="
flex
items-center
gap-3
">


<div className="
h-10
w-10
rounded-full
bg-blue-500/20
text-blue-400
flex
items-center
justify-center
font-bold
">

{data.label?.[0]}

</div>



<div>

<p className="
text-[10px]
uppercase
tracking-widest
text-blue-400
font-semibold
">

Entity

</p>


<h3 className="
text-lg
font-bold
text-white
">

{data.label}

</h3>


</div>


</div>




<p className="
text-xs
text-gray-400
mt-4
">

👤 Person Entity

</p>



<Handle

type="source"

position={Position.Right}

className="!bg-blue-400"

/>


</div>

);


}






const nodeTypes = {

person: PersonNode

};









function RelationshipGraph({
connections=[]
}) {



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






const nodes=people.map((person,index)=>(


{


id:person,


type:"person",



position:{


x:index * 350,


y:index % 2 === 0 ? 100 : 300


},



data:{


label:person


}



}


));









const edges=connections.map((item,index)=>(


{


id:`edge-${index}`,

source:item.source,

target:item.target,


label:item.relation,


animated:true,



style:{


stroke:"#60a5fa",

strokeWidth:2


},





labelStyle:{


fill:"#e5e7eb",

fontSize:13,

fontWeight:600


},




labelBgStyle:{


fill:"#111827",


fillOpacity:0.9


},




markerEnd:{


type:MarkerType.ArrowClosed,


color:"#60a5fa"


}



}


));





return {


nodes,

edges


};



},[connections]);









if(!connections.length){


return (


<div

className="
h-[450px]
rounded-2xl
border
border-white/10
bg-[#0b1120]
flex
flex-col
items-center
justify-center
text-gray-400
gap-3
"

>


<p className="
text-lg
font-medium
">

No Relationship Data

</p>


<p className="
text-sm
">

Entities and connections will appear here after analysis.

</p>



</div>


);


}










return (


<div

className="
h-[520px]
rounded-3xl
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

padding:0.8

}}




defaultViewport={{

x:0,

y:0,

zoom:1

}}




proOptions={{

hideAttribution:true

}}



>



<Background

gap={25}

size={1}

/>




<Controls

className="
!bg-[#0b1120]
!border
!border-white/10
!rounded-xl
"

/>




</ReactFlow>



</div>


);



}



export default RelationshipGraph;