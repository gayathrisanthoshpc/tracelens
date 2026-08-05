import { Link } from "react-router-dom";


function CaseCard({caseId}){


return (

<div className="
bg-[#0b1220]
border
border-gray-800
rounded-2xl
p-6
hover:border-blue-500
transition
">


<h3 className="text-xl font-bold">

{caseId}

</h3>


<p className="text-gray-400 mt-2">
Digital evidence analysis
</p>



<Link

to={`/case/${caseId}`}

className="
inline-block
mt-5
bg-blue-600
px-5
py-2
rounded-lg
hover:bg-blue-700
"

>

View Investigation

</Link>


</div>

);


}


export default CaseCard;