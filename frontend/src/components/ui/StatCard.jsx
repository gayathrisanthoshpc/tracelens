function StatCard({
title,
value,
icon
}){


return (

<div className="
bg-[#0b1120]
border
border-white/10
rounded-2xl
p-5
flex
items-center
gap-4
">


<div className="
h-12
w-12
rounded-xl
bg-blue-500/10
text-blue-400
flex
items-center
justify-center
text-xl
">

{icon}

</div>



<div>

<p className="
text-sm
text-gray-400
">

{title}

</p>


<p className="
text-3xl
font-bold
mt-1
">

{value}

</p>


</div>


</div>

)


}


export default StatCard;