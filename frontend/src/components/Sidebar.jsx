import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  Activity
} from "lucide-react";


function Sidebar(){

return (

<div className="
h-screen
w-64
bg-[#050816]
border-r
border-white/10
p-6
flex
flex-col
">


{/* Logo */}

<div>

<h1 className="
text-xl
font-bold
">

TraceLens

</h1>

<p className="
text-xs
text-gray-400
mt-1
">

AI Digital Evidence Intelligence

</p>

</div>




{/* Navigation */}

<nav className="
mt-10
space-y-2
">


<NavLink

to="/"

className={({isActive})=>

`
flex
items-center
gap-3
px-4
py-3
rounded-xl
text-sm
transition

${
isActive
?
"bg-blue-500/20 text-blue-400"
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
text-sm
transition

${
isActive
?
"bg-blue-500/20 text-blue-400"
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






{/* Bottom Status */}

<div className="
mt-auto
text-sm
">

<div className="
flex
items-center
gap-2
text-green-400
font-medium
">

<Activity size={16}/>

System Online

</div>


<p className="
text-xs
text-gray-500
mt-1
ml-6
">

Multi-agent analysis ready

</p>


</div>



</div>

);


}


export default Sidebar;