import { useEffect, useState } from "react";


function AgentStatus() {


  const agents = [

    {
      name: "Evidence Agent",
      role: "Evidence ingestion and analysis",
      processing: "Reading uploaded evidence...",
      completed: "Evidence processed"
    },

    {
      name: "Entity Agent",
      role: "Person and entity extraction",
      processing: "Identifying entities...",
      completed: "Entities extracted"
    },

    {
      name: "Timeline Agent",
      role: "Event reconstruction",
      processing: "Building evidence timeline...",
      completed: "Timeline generated"
    },

    {
      name: "Report Agent",
      role: "Investigation intelligence report",
      processing: "Preparing final report...",
      completed: "Report generated"
    }

  ];




  const [activeAgent,setActiveAgent] = useState(0);

  const [finished,setFinished] = useState(false);





  useEffect(()=>{


    const timer=setInterval(()=>{


      setActiveAgent((current)=>{


        if(current < agents.length-1){

          return current+1;

        }


        clearInterval(timer);

        setFinished(true);

        return current;


      });


    },1800);



    return ()=>clearInterval(timer);


  },[]);







  return (


    <div className="space-y-3">


      {

        agents.map((agent,index)=>{


          const completed =

            index < activeAgent ||

            (finished && index === agents.length-1);



          const active =

            index === activeAgent && !finished;




          return (


            <div

              key={agent.name}

              className={`border rounded-xl p-4 transition


              ${
                active

                ? "border-blue-500 bg-blue-500/10"

                : completed

                ? "border-green-500/30 bg-green-500/5"

                : "border-zinc-800 bg-zinc-900"

              }


              `}


            >




              <div className="flex items-center justify-between">


                <div className="flex items-center gap-3">


                  <div

                    className={`h-8 w-8 rounded-full flex items-center justify-center text-sm


                    ${
                      completed

                      ? "bg-green-500/20 text-green-400"

                      : active

                      ? "bg-blue-500/20 text-blue-400"

                      : "bg-zinc-800 text-gray-500"

                    }


                    `}

                  >


                    {

                      completed

                      ? "✓"

                      : active

                      ? "•"

                      : "○"

                    }


                  </div>




                  <div>


                    <h3 className="text-sm font-medium">

                      {agent.name}

                    </h3>



                    <p className="text-xs text-gray-500">

                      {agent.role}

                    </p>


                  </div>



                </div>





                <span className="text-xs text-gray-400">


                  {

                    completed

                    ? "Completed"

                    : active

                    ? "Running"

                    : "Waiting"

                  }


                </span>



              </div>





              <p className="text-sm text-gray-400 mt-3 ml-11">


                {

                  completed

                  ? agent.completed

                  : active

                  ? agent.processing

                  : "Awaiting previous agent"

                }


              </p>



            </div>


          );


        })


      }


    </div>


  );


}


export default AgentStatus;