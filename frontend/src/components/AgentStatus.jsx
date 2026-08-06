import { useEffect, useState } from "react";


function AgentStatus(){

const agents=[
{
name:"Evidence Agent",
role:"Evidence ingestion and analysis",
done:"Evidence processed"
},
{
name:"Entity Agent",
role:"Person and entity extraction",
done:"Entities extracted"
},
{
name:"Timeline Agent",
role:"Event reconstruction",
done:"Timeline generated"
},
{
name:"Report Agent",
role:"Investigation intelligence report",
done:"Report generated"
}
];


const [active,setActive]=useState(0);



useEffect(()=>{

const timer=setInterval(()=>{

setActive(prev=>{

if(prev < agents.length){

return prev+1;

}

clearInterval(timer);

return prev;

});


},1200);


return ()=>clearInterval(timer);


},[]);





return (

<div className="space-y-3">


{
agents.map((agent,index)=>{


const completed=index < active;

const running=index === active;



return (

<div

key={agent.name}

className={`
rounded-xl
border
p-4
transition

${
completed

?
"border-green-500/30 bg-green-500/5"

:

running

?
"border-blue-500 bg-blue-500/10"

:

"border-white/10 bg-white/5"

}

`}

>


<div className="flex items-center gap-4">


<div

className={`
h-9
w-9
rounded-full
flex
items-center
justify-center
font-bold

${
completed

?
"bg-green-500/20 text-green-400"

:

running

?
"bg-blue-500/20 text-blue-400"

:

"bg-white/10 text-gray-500"

}

`}

>


{
completed

?
"✓"

:

running

?
"•"

:

"○"

}


</div>



<div>


<p className="font-medium">

{agent.name}

</p>


<p className="text-xs text-gray-400">

{agent.role}

</p>


</div>



<span className="ml-auto text-xs text-gray-400">

{
completed

?
"Completed"

:

running

?
"Running"

:

"Waiting"

}

</span>



</div>



<p className="ml-13 mt-3 text-sm text-gray-400">

{
completed

?
agent.done

:

running

?
"Processing..."

:

"Waiting for previous agent"

}

</p>



</div>


)


})

}


</div>

);


}


export default AgentStatus;