import {Link,Outlet} from "react-router-dom";
import {
LayoutDashboard,
Upload,
Shield
} from "lucide-react";


function Layout(){

return(

<div className="min-h-screen bg-[#050816] text-white flex">


<aside className="
w-72
border-r
border-white/10
bg-[#080d1c]
p-6
">


<div>

<h1 className="
text-2xl
font-bold
tracking-wide
">

TraceLens

</h1>


<p className="
text-sm
text-gray-400
mt-1
">

Digital Evidence Intelligence

</p>


</div>



<nav className="mt-10 space-y-3">


<Link
to="/"
className="
flex gap-3
items-center
px-4
py-3
rounded-xl
hover:bg-blue-500/10
transition
"
>

<LayoutDashboard size={18}/>

Dashboard

</Link>




<Link

to="/upload"

className="
flex gap-3
items-center
px-4
py-3
rounded-xl
hover:bg-blue-500/10
transition
"

>

<Upload size={18}/>

Upload Evidence

</Link>


</nav>



<div className="
absolute
bottom-6
text-xs
text-gray-500
flex
gap-2
items-center
">


<Shield size={14}/>

Prototype v1.0


</div>


</aside>



<main className="
flex-1
p-8
overflow-auto
">


<Outlet/>


</main>



</div>


)

}


export default Layout;