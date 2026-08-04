import { useEffect, useState } from "react";


function AgentStatus() {


  const agents = [

    {
      name: "Evidence Agent",
      processing: "Analyzing evidence...",
      status: "Evidence collected successfully"
    },

    {
      name: "Entity Agent",
      processing: "Extracting people and entities...",
      status: "People and entities extracted"
    },

    {
      name: "Timeline Agent",
      processing: "Reconstructing events...",
      status: "Events reconstructed successfully"
    },

    {
      name: "Report Agent",
      processing: "Generating investigation report...",
      status: "Investigation report generated"
    }

  ];



  const [activeAgent, setActiveAgent] = useState(0);

  const [completedAll, setCompletedAll] = useState(false);



  useEffect(() => {


    const timer = setInterval(() => {


      setActiveAgent((current) => {


        if (current < agents.length - 1) {

          return current + 1;

        }


        clearInterval(timer);

        setCompletedAll(true);

        return current;


      });


    }, 2000);



    return () => clearInterval(timer);


  }, []);






  return (

    <div className="space-y-4">


      {

        agents.map((agent, index) => {


          const isCompleted =
            index < activeAgent ||
            (completedAll && index === agents.length - 1);


          const isActive =
            index === activeAgent && !completedAll;



          return (

            <div

              key={agent.name}

              className={`p-5 rounded-xl border transition-all duration-500

              ${
                isActive
                  ? "bg-gray-800 border-blue-500 shadow-lg"
                  : "bg-gray-900 border-gray-800"
              }

              `}

            >



              <div className="flex items-center gap-3">


                <span

                  className={`text-xl

                  ${
                    isCompleted
                      ? "text-green-400"
                      : isActive
                      ? "text-blue-400 animate-spin"
                      : "text-gray-500"
                  }

                  `}

                >

                  {

                    isCompleted

                    ? "✓"

                    : isActive

                    ? "⟳"

                    : "○"

                  }


                </span>





                <h3 className="text-lg font-semibold">

                  {agent.name}

                </h3>



              </div>





              <p className="text-gray-400 mt-2 ml-8">


                {

                  isCompleted

                  ? agent.status

                  : isActive

                  ? agent.processing

                  : "Waiting..."

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