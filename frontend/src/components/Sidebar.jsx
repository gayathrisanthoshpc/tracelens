import {
LayoutDashboard,
Upload,
ShieldCheck
} from "lucide-react";


function Sidebar(){


return (

<aside

className="
w-64
min-h-screen
border-r
border-white/10
bg-[#050816]
p-6
flex
flex-col
"

>


<div className="
flex
items-center
gap-3
mb-10
">


<div className="
h-10
w-10
rounded-xl
bg-blue-500/10
text-blue-400
flex
items-center
justify-center
">

<ShieldCheck size={22}/>

</div>


<div>

<h1 className="
font-bold
">

TraceLens

</h1>


<p className="
text-xs
text-gray-500
">

Evidence Intelligence

</p>

</div>


</div>





<nav className="
space-y-2
">


<a

className="
flex
items-center
gap-3
px-4
py-3
rounded-xl
bg-blue-500/10
text-blue-400
"

>

<LayoutDashboard size={18}/>

Dashboard

</a>



<a

className="
flex
items-center
gap-3
px-4
py-3
rounded-xl
text-gray-400
hover:bg-white/5
"

>

<Upload size={18}/>

Upload Evidence

</a>



</nav>





<div className="
mt-auto
border
border-white/10
rounded-xl
p-4
bg-white/5
">


<p className="
text-green-400
text-sm
font-medium
">

● System Online

</p>


<p className="
text-xs
text-gray-500
mt-1
">

Multi-agent analysis ready

</p>


</div>



</aside>

)

}


export default Sidebar;