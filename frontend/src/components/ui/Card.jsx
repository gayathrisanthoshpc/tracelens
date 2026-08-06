function Card({children,className=""}){


return (

<div

className={`
bg-[#0b1120]
border border-white/10
rounded-2xl
p-6
${className}

`}

>

{children}

</div>

)


}


export default Card;