import {
  LayoutDashboard,
  Upload,
  ShieldCheck
} from "lucide-react";

import { NavLink } from "react-router-dom";


function Sidebar(){


return (

<aside
className="
w-64
min-h-screen
bg-[#050816]
border-r
border-white/10
p-6
flex
flex-col
"
>


{/* Logo */}

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
text-white
">

TraceLens

</h1>


<p className="
text-xs
text-gray-500
">

AI Evidence Intelligence

</p>

</div>


</div>





<nav className="space-y-2">


<NavLink

to="/dashboard"

className={({isActive})=>

`

flex
items-center
gap-3
px-4
py-3
rounded-xl
transition

${
isActive

?
"bg-blue-500/10 text-blue-400"

:

"text-gray-400 hover:bg-white/5"

}

`

}

>

<LayoutDashboard size={18}/>

Dashboard

</NavLink>






<NavLink

to="/upload"

className={({isActive})=>

`

flex
items-center
gap-3
px-4
py-3
rounded-xl
transition

${
isActive

?
"bg-blue-500/10 text-blue-400"

:

"text-gray-400 hover:bg-white/5"

}

`

}

>

<Upload size={18}/>

Upload Evidence

</NavLink>



</nav>






<div className="
mt-auto
rounded-xl
border
border-white/10
bg-white/5
p-4
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

);


}


export default Sidebar;