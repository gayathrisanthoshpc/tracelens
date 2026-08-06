import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  FolderKanban,
  Users,
  Clock3,
  ShieldCheck,
  Upload,
  ArrowRight,
  Server,
  BrainCircuit
} from "lucide-react";

import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";


function Dashboard() {


  const navigate = useNavigate();

  const [cases,setCases] = useState([]);



  useEffect(()=>{

    axios
      .get("http://127.0.0.1:8000/cases")
      .then(res=>{

        setCases(res.data.cases || []);

      })
      .catch(err=>{

        console.log(err);

      });


  },[]);




  const stats=[

    {
      title:"Cases",
      value:cases.length,
      icon:<FolderKanban size={22}/>,
      color:"blue"
    },

    {
      title:"Entities",
      value:"2",
      icon:<Users size={22}/>,
      color:"green"
    },

    {
      title:"Evidence Events",
      value:"3",
      icon:<Clock3 size={22}/>,
      color:"yellow"
    },

    {
      title:"Confidence",
      value:"90%",
      icon:<ShieldCheck size={22}/>,
      color:"green"
    }

  ];





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
space-y-10
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
uppercase
tracking-widest
text-xs
">

Investigation Platform

</p>


<h1 className="
text-4xl
font-bold
mt-3
">

TraceLens Dashboard

</h1>


<p className="
text-gray-400
mt-2
">

AI Digital Evidence Intelligence

</p>


</div>




<Badge type="success">

● System Online

</Badge>


</div>







{/* STATS */}

<div className="
grid
md:grid-cols-4
gap-5
">


{

stats.map((stat)=>(


<Card key={stat.title}>


<div className="
flex
items-center
justify-between
">


<div>

<p className="
text-sm
text-gray-400
">

{stat.title}

</p>


<h2 className="
text-3xl
font-bold
mt-2
">

{stat.value}

</h2>


</div>


<div className="
text-blue-400
">

{stat.icon}

</div>


</div>


</Card>


))


}


</div>









{/* MAIN GRID */}


<div className="
grid
lg:grid-cols-3
gap-6
">






{/* RECENT CASES */}

<Card className="lg:col-span-2">


<h2 className="
text-xl
font-semibold
">

Recent Investigations

</h2>


<p className="
text-sm
text-gray-400
mt-1
">

Previously analyzed evidence cases

</p>




<div className="
mt-6
space-y-4
">


{

cases.length ?


cases.map((item)=>(


<div

key={item}

className="
flex
items-center
justify-between
bg-[#101a30]
rounded-xl
p-4
"


>


<div>


<p className="
font-medium
">

{item}

</p>


<p className="
text-sm
text-gray-400
mt-1
">

Analysis Complete

</p>


</div>



<button

onClick={()=>navigate(`/case/${item}`)}

className="
flex
items-center
gap-2
text-blue-400
text-sm
hover:text-blue-300
"

>

View Case

<ArrowRight size={16}/>

</button>



</div>


))


:


<p className="text-gray-500">

No investigations found

</p>



}



</div>


</Card>









{/* QUICK ACTIONS */}

<Card>


<h2 className="
text-xl
font-semibold
">

Quick Actions

</h2>


<div className="
mt-6
space-y-3
">


<button

onClick={()=>navigate("/upload")}

className="
w-full
flex
items-center
gap-3
bg-blue-600
hover:bg-blue-700
rounded-xl
p-3
transition
"

>

<Upload size={18}/>

Upload Evidence

</button>




<button

onClick={()=>navigate("/case/case_002")}

className="
w-full
flex
items-center
gap-3
bg-[#101a30]
hover:bg-[#16243d]
rounded-xl
p-3
transition
"

>

<FolderKanban size={18}/>

Open Latest Case

</button>


</div>


</Card>


</div>









{/* SYSTEM STATUS */}

<Card>


<h2 className="
text-xl
font-semibold
">

System Status

</h2>



<div className="
grid
md:grid-cols-3
gap-4
mt-6
">


<div className="
bg-[#101a30]
rounded-xl
p-4
flex
gap-3
items-center
">

<Server className="text-green-400"/>

<div>

<p className="text-sm">

Backend Connected

</p>

<p className="text-xs text-gray-400">

FastAPI Server

</p>

</div>


</div>





<div className="
bg-[#101a30]
rounded-xl
p-4
flex
gap-3
items-center
">


<BrainCircuit className="text-blue-400"/>


<div>

<p className="text-sm">

AI Pipeline Ready

</p>

<p className="text-xs text-gray-400">

Multi Agent System

</p>

</div>


</div>





<div className="
bg-[#101a30]
rounded-xl
p-4
flex
gap-3
items-center
">


<ShieldCheck className="text-green-400"/>


<div>

<p className="text-sm">

Memory Active

</p>

<p className="text-xs text-gray-400">

Case Storage

</p>

</div>


</div>



</div>


</Card>








</div>


</div>


);


}


export default Dashboard;