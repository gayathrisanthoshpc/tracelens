import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import StatCard from "../components/ui/StatCard";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

import RelationshipGraph from "../components/RelationshipGraph";
import ReportCard from "../components/ReportCard";
import AgentStatus from "../components/AgentStatus";



function CaseDetails() {


const {caseId}=useParams();


const [data,setData]=useState(null);



useEffect(()=>{


axios
.get(`http://127.0.0.1:8000/cases/${caseId}`)
.then(res=>{

setData(res.data);

})

.catch(err=>{

console.log(err);

});


},[caseId]);





if(!data){


return(

<div className="
min-h-screen
bg-[#050816]
text-white
flex
items-center
justify-center
">

Loading investigation...


</div>

);


}





const events=data.events || data.timeline || [];





return (


<div className="
min-h-screen
bg-[#050816]
text-white
p-8
">


<div className="
max-w-7xl
mx-auto
space-y-14
">





{/* HEADER */}


<div className="
flex
justify-between
items-start
">


<div>


<p className="
text-blue-400
text-xs
uppercase
tracking-widest
">

Investigation Case

</p>


<h1 className="
text-4xl
font-bold
mt-3
">

TraceLens Analysis

</h1>


<p className="
text-gray-400
mt-2
font-mono
">

Case ID : {data.case_id}

</p>


</div>


<Badge type="success">

● Analysis Complete

</Badge>


</div>







{/* STATS */}


<div className="
grid
md:grid-cols-4
gap-5
">


<StatCard

title="Entities"

value={data.people?.length || 0}

icon="👤"

color="blue"

/>


<StatCard

title="Evidence Events"

value={events.length}

icon="◷"

color="green"

/>


<StatCard

title="Connections"

value={data.connections?.length || 0}

icon="↔"

color="yellow"

/>


<StatCard

title="Confidence"

value={`${data.report?.confidence || 0}%`}

icon="✓"

color="green"

/>


</div>








{/* AGENTS */}


<section>


<SectionHeader

title="Agent Execution Pipeline"

description="Multi-agent evidence processing workflow"

/>


<Card>

<AgentStatus/>

</Card>


</section>










{/* ENTITIES + REPORT */}


<div className="
grid
lg:grid-cols-3
gap-6
">



<Card className="lg:col-span-1">


<SectionHeader

title="Identified Entities"

description="People extracted from evidence"

/>



<div className="
space-y-3
">


{

data.people?.length ?


data.people.map(person=>(


<div

key={person}

className="
flex
items-center
gap-3
bg-[#101a30]
rounded-xl
p-4
"

>


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

{person[0]}

</div>



<div>


<p className="
font-medium
">

{person}

</p>


<p className="
text-xs
text-gray-400
">

Person Entity

</p>


</div>



</div>


))


:


<p className="text-gray-500">

No entities detected

</p>


}


</div>


</Card>





<Card className="lg:col-span-2">


<ReportCard

report={data.report}

/>


</Card>



</div>









{/* TIMELINE */}



<section>


<SectionHeader

title="Evidence Timeline"

description="Chronological reconstruction of events"

/>



<Card>


<div className="relative">


<div className="
absolute
left-3
top-0
bottom-0
w-px
bg-blue-500/30
"/>



<div className="space-y-8">


{

events.length ?


events.map((event,index)=>(


<div

key={index}

className="
flex
gap-6
relative
"

>


<div className="
z-10
h-6
w-6
rounded-full
bg-blue-500
flex
items-center
justify-center
text-xs
">

{index+1}

</div>



<div>


<p className="
text-blue-400
font-mono
text-sm
">

{event.time}

</p>


<p className="
mt-2
text-gray-200
">

{event.event}

</p>


</div>


</div>


))


:

<p className="text-gray-500">

No timeline available

</p>


}



</div>


</div>


</Card>


</section>









{/* GRAPH */}


<section>


<SectionHeader

title="Relationship Network"

description="Connections discovered between entities"

/>



<RelationshipGraph

connections={data.connections || []}

/>


</section>





</div>


</div>


);


}


export default CaseDetails;