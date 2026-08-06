function SectionHeader({
title,
description
}){


return (

<div className="
mb-5
">

<h2 className="
text-xl
font-semibold
text-white
">

{title}

</h2>


<p className="
text-sm
text-gray-400
mt-1
">

{description}

</p>


</div>

)

}


export default SectionHeader;