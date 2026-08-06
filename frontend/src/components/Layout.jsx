import Sidebar from "./Sidebar";


function Layout({children}){


return (

<div className="
flex
min-h-screen
bg-[#050816]
">


<Sidebar/>


<main className="
flex-1
p-10
max-w-[1400px]
">

{children}

</main>


</div>


)


}


export default Layout;