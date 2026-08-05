import { useEffect,useState } from "react";
import axios from "axios";
import CaseCard from "../components/CaseCard";


function Dashboard(){


const [cases,setCases]=useState([]);



useEffect(()=>{


axios
.get("http://127.0.0.1:8000/cases")
.then((res)=>{

setCases(res.data.cases || []);

});


},[]);




return (

<div className="space-y-8">


<h1 className="
text-3xl
font-bold
">

Investigation Dashboard

</h1>


<p className="
text-gray-400
">

Monitor digital evidence analysis and active cases

</p>




<div className="
grid
md:grid-cols-3
gap-5
">


<div className="
bg-[#0b1220]
border
border-gray-800
rounded-xl
p-5
">

<p className="text-gray-400">
Total Cases
</p>

<p className="text-3xl mt-2 font-bold">
{cases.length}
</p>

</div>




<div className="
bg-[#0b1220]
border
border-gray-800
rounded-xl
p-5
">

<p className="text-gray-400">
System Status
</p>

<p className="text-green-400 mt-2">
● Online
</p>

</div>




<div className="
bg-[#0b1220]
border
border-gray-800
rounded-xl
p-5
">

<p className="text-gray-400">
AI Engine
</p>

<p className="text-blue-400 mt-2">
Ready
</p>

</div>



</div>





<h2 className="text-xl font-semibold">

Recent Investigations

</h2>



<div className="
grid
md:grid-cols-3
gap-5
">


{

cases.map((id)=>(

<CaseCard
key={id}
caseId={id}
/>

))

}



</div>


</div>

);


}


export default Dashboard;