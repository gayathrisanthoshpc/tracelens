import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  UploadCloud,
  CheckCircle2,
  LoaderCircle,
  FileText,
  ShieldCheck
} from "lucide-react";


function UploadEvidence(){


const [file,setFile]=useState(null);

const [loading,setLoading]=useState(false);

const [step,setStep]=useState(0);


const navigate=useNavigate();


const caseId="case_002";



const agents=[

"Evidence Agent",

"Entity Extraction Agent",

"Timeline Reconstruction Agent",

"Report Generation Agent"

];





const uploadFile=async()=>{


if(!file){

alert("Select evidence file");

return;

}


setLoading(true);



const formData=new FormData();

formData.append(
"file",
file
);



const timer=setInterval(()=>{


setStep(current=>{


if(current < agents.length-1){

return current+1;

}


return current;


});


},1500);




try{


await axios.post(

`http://127.0.0.1:8000/upload/${caseId}`,

formData

);



await axios.get(

`http://127.0.0.1:8000/analyze/${caseId}`

);



clearInterval(timer);


navigate(`/case/${caseId}`);


}

catch(error){


console.log(error);

alert("Investigation failed");


}

finally{


clearInterval(timer);

setLoading(false);


}


};






if(loading){


return (

<div className="
min-h-screen
bg-[#050816]
text-white
flex
items-center
justify-center
p-8
">


<div className="
w-full
max-w-2xl
bg-[#0b1120]
border
border-white/10
rounded-3xl
p-8
">


<div className="
flex
items-center
gap-3
">


<LoaderCircle

className="
text-blue-400
animate-spin
"

/>


<h1 className="
text-2xl
font-bold
">

TraceLens Analysis

</h1>


</div>


<p className="
text-gray-400
mt-3
">

AI agents are examining the submitted evidence.

</p>



<div className="
mt-8
space-y-3
">


{
agents.map((agent,index)=>{


const completed=index < step;


const active=index===step;



return (

<div

key={agent}

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

active

?
"border-blue-500 bg-blue-500/10"

:

"border-white/10 bg-white/5"

}

`}

>


<div className="
flex
items-center
gap-3
">


{

completed

?

<CheckCircle2
size={20}
className="text-green-400"
/>

:

active

?

<div className="
h-5
w-5
rounded-full
bg-blue-400 animate-pulse
"/>

:

<div className="
h-5
w-5
rounded-full
border
border-gray-600
"/>

}



<span>

{agent}

</span>


</div>


</div>


)


})

}


</div>


</div>


</div>

);


}







return (

<div className="
min-h-screen
bg-[#050816]
text-white
p-8
">


<div className="
max-w-6xl
mx-auto
">


<div className="
mb-10
">


<div className="
flex
items-center
gap-2
text-blue-400
text-sm
uppercase
tracking-widest
">


<ShieldCheck size={16}/>

Evidence Submission

</div>



<h1 className="
text-4xl
font-bold
mt-4
">

Upload Evidence

</h1>


<p className="
text-gray-400
mt-3
max-w-xl
">

Submit digital evidence and allow TraceLens agents to reconstruct the investigation timeline.

</p>


</div>





<div className="
grid
lg:grid-cols-3
gap-8
">



<div className="
lg:col-span-2
bg-[#0b1120]
border
border-white/10
rounded-3xl
p-8
">


<label

className="
block
border-2
border-dashed
border-blue-500/40
rounded-2xl
bg-blue-500/5
p-14
text-center
cursor-pointer
hover:bg-blue-500/10
transition
"

>


<UploadCloud

size={55}

className="
mx-auto
text-blue-400
"

/>


<h2 className="
text-xl
font-semibold
mt-5
">

Drop evidence file here

</h2>


<p className="
text-gray-400
mt-2
">

or click to browse

</p>



<p className="
text-xs
text-gray-500
mt-4
">

Supported: TXT • PDF • Chat Logs • Documents

</p>



<input

type="file"

className="hidden"

onChange={(e)=>
setFile(e.target.files[0])
}

/>


</label>





{
file &&

<div className="
mt-6
flex
items-center
gap-4
bg-[#101a30]
border
border-blue-500/30
rounded-xl
p-5
">


<FileText

className="text-blue-400"

/>


<div>

<p className="
text-sm
text-gray-400
">

Selected Evidence

</p>


<p className="
font-medium
mt-1
">

{file.name}

</p>


</div>


</div>

}



<button

onClick={uploadFile}

className="
mt-6
w-full
rounded-xl
bg-blue-600
py-4
font-semibold
hover:bg-blue-700
transition
"

>

Start Investigation

</button>



</div>






<div className="
bg-[#0b1120]
border
border-white/10
rounded-3xl
p-6
h-fit
">


<h3 className="
font-semibold
text-lg
">

AI Pipeline

</h3>


<p className="
text-sm
text-gray-400
mt-2
">

Your evidence will pass through:

</p>


<div className="
mt-5
space-y-4
">


{
agents.map((agent,index)=>(

<div
key={agent}
className="
flex
gap-3
items-center
text-sm
"
>

<div className="
h-7
w-7
rounded-full
bg-blue-500/10
text-blue-400
flex
items-center
justify-center
">

{index+1}

</div>


<span>

{agent}

</span>


</div>


))

}


</div>


</div>




</div>



</div>


</div>


);


}


export default UploadEvidence;