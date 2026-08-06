function Dashboard(){


return (

<div className="
p-8
text-white
space-y-8
">


<div>

<p className="
text-blue-400
uppercase
text-xs
tracking-widest
">

Overview

</p>


<h1 className="
text-4xl
font-bold
mt-3
">

Investigation Dashboard

</h1>


<p className="
text-gray-400
mt-2
">

Monitor evidence processing and active investigations.

</p>


</div>




<div className="
grid
md:grid-cols-4
gap-5
">


{
[
["Cases","2"],
["Evidence","12"],
["AI Agents","4"],
["Status","Online"]

].map(item=>(


<div

key={item[0]}

className="
bg-[#0b1120]
border
border-white/10
rounded-2xl
p-6
"


>


<p className="
text-gray-400
text-sm
">

{item[0]}

</p>


<h2 className="
text-3xl
font-bold
mt-2
">

{item[1]}

</h2>


</div>


))


}


</div>


</div>

);


}


export default Dashboard;