function Button({
children,
onClick,
disabled=false
}){


return (

<button

disabled={disabled}

onClick={onClick}

className="
w-full
rounded-xl
bg-blue-600
hover:bg-blue-700
transition
py-3
font-medium
text-white
disabled:opacity-50
"

>


{children}


</button>


)


}


export default Button;