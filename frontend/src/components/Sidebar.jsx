import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Upload,
  Activity,
  LogOut
} from "lucide-react";


function Sidebar(){

  const navigate = useNavigate();


  const handleLogout = () => {

    navigate("/");

  };


  return (

    <aside className="
      h-screen
      w-64
      bg-[#0b1120]
      border-r
      border-white/10
      flex
      flex-col
      p-5
    ">


      {/* Logo */}

      <div className="mb-10">

        <h1 className="
          text-xl
          font-bold
          text-white
        ">

          TraceLens

        </h1>


        <p className="
          text-xs
          text-gray-500
          mt-1
        ">

          AI Digital Evidence Intelligence

        </p>


      </div>





      {/* Navigation */}

      <nav className="
        space-y-3
        flex-1
      ">


        <NavLink

          to="/dashboard"

          className={({isActive}) =>

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

          className={({isActive}) =>

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
        border-t
        border-white/10
        pt-5
        space-y-4
      ">


        <div className="
          flex
          items-center
          gap-2
          text-sm
          text-green-400
        ">

          <Activity size={16}/>

          System Online

        </div>



        <p className="
          text-xs
          text-gray-500
        ">

          Multi-agent analysis ready

        </p>






        {/* Logout */}

        <button

          onClick={handleLogout}

          className="
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl
            text-sm
            text-gray-400
            hover:text-white
            hover:bg-red-500/10
            transition
          "

        >

          <LogOut size={18}/>

          Logout


        </button>



      </div>



    </aside>

  );

}


export default Sidebar;