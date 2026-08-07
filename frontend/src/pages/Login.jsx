import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Lock, Mail } from "lucide-react";


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {

    e.preventDefault();

    // Demo login
    navigate("/dashboard");

  };


  return (

    <div className="
      min-h-screen
      bg-[#050816]
      text-white
      flex
      items-center
      justify-center
      px-6
    ">


      <div className="
        w-full
        max-w-5xl
        grid
        lg:grid-cols-2
        bg-[#0b1120]
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        shadow-2xl
      ">


        {/* LEFT SIDE */}

        <div className="
          hidden
          lg:flex
          flex-col
          justify-between
          p-12
          bg-gradient-to-br
          from-blue-950/40
          to-[#050816]
        ">


          <div>


            <div className="
              flex
              items-center
              gap-3
            ">


              <div className="
                h-11
                w-11
                rounded-xl
                bg-blue-600/20
                border
                border-blue-500/30
                flex
                items-center
                justify-center
              ">

                <ShieldCheck
                  className="text-blue-400"
                  size={26}
                />

              </div>


              <div>

                <h1 className="
                  text-xl
                  font-bold
                ">
                  TraceLens
                </h1>


                <p className="
                  text-xs
                  text-gray-500
                ">
                  Digital Evidence Intelligence
                </p>


              </div>


            </div>




            <div className="
              mt-24
              max-w-md
            ">


              <p className="
                text-blue-400
                text-xs
                uppercase
                tracking-widest
              ">

                Investigation Intelligence

              </p>



              <h2 className="
                text-4xl
                font-bold
                leading-tight
                mt-4
              ">

                Turn fragmented evidence into

                <span className="
                  text-blue-400
                ">

                  {" "}actionable intelligence.

                </span>


              </h2>



              <p className="
                text-gray-400
                mt-6
                leading-relaxed
              ">

                TraceLens uses a multi-agent AI workflow
                to analyze digital evidence, reconstruct
                events, discover relationships, and
                generate explainable reports.

              </p>


            </div>


          </div>



          <p className="
            text-xs
            text-gray-600
          ">

            TraceLens Investigation Platform

          </p>


        </div>







        {/* RIGHT SIDE */}


        <div className="
          p-8
          sm:p-12
          flex
          items-center
        ">


          <div className="
            w-full
            max-w-md
            mx-auto
          ">


            <div className="mb-8">


              <p className="
                text-blue-400
                text-xs
                uppercase
                tracking-widest
              ">

                Authorized Access

              </p>



              <h2 className="
                text-3xl
                font-bold
                mt-3
              ">

                Welcome back

              </h2>



              <p className="
                text-gray-400
                mt-2
              ">

                Sign in to your investigation workspace.

              </p>


            </div>





            <form
              onSubmit={handleLogin}
              className="
                space-y-5
              "
            >



              {/* EMAIL */}


              <div>


                <label className="
                  text-sm
                  text-gray-300
                ">

                  Work Email

                </label>



                <div className="
                  relative
                  mt-2
                ">


                  <Mail
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                    "
                  />



                  <input

                    type="email"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                    placeholder="investigator@example.com"

                    required

                    className="
                      w-full
                      bg-[#050816]
                      border
                      border-white/10
                      rounded-xl
                      py-3
                      pl-11
                      pr-4
                      text-sm
                      outline-none
                      focus:border-blue-500
                    "

                  />


                </div>


              </div>






              {/* PASSWORD */}


              <div>


                <label className="
                  text-sm
                  text-gray-300
                ">

                  Password

                </label>



                <div className="
                  relative
                  mt-2
                ">



                  <Lock
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                    "
                  />



                  <input

                    type="password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                    placeholder="••••••••"

                    required

                    className="
                      w-full
                      bg-[#050816]
                      border
                      border-white/10
                      rounded-xl
                      py-3
                      pl-11
                      pr-4
                      text-sm
                      outline-none
                      focus:border-blue-500
                    "

                  />



                </div>


              </div>






              <button

                type="submit"

                className="
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
                  py-3
                  rounded-xl
                  font-medium
                  transition
                "

              >

                Sign In

              </button>




            </form>




            <div className="
              mt-8
              pt-6
              border-t
              border-white/10
              text-center
            ">


              <p className="
                text-xs
                text-gray-500
              ">

                Authorized personnel only

              </p>



              <p className="
                text-[11px]
                text-gray-600
                mt-2
              ">

                Demo authentication for TraceLens prototype

              </p>


            </div>



          </div>


        </div>


      </div>


    </div>


  );

}


export default Login;