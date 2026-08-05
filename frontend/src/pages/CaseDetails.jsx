import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import RelationshipGraph from "../components/RelationshipGraph";
import AgentStatus from "../components/AgentStatus";
import ReportCard from "../components/ReportCard";


function CaseDetails() {

  const { caseId } = useParams();

  const [data, setData] = useState(null);



  useEffect(() => {

    axios
      .get(`http://127.0.0.1:8000/cases/${caseId}`)
      .then((response)=>{

        setData(response.data);

      })
      .catch((error)=>{

        console.log(error);

      });


  }, [caseId]);





  if (!data) {

    return (

      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">

        <p className="text-gray-400">

          Loading investigation...

        </p>

      </div>

    );

  }





  const events = data.events || data.timeline || [];





  return (


    <div className="min-h-screen bg-gray-950 text-white p-6">


      <div className="max-w-7xl mx-auto">



        {/* Header */}

        <div className="flex justify-between items-center mb-8">


          <div>


            <h1 className="text-2xl font-semibold">

              TraceLens Investigation

            </h1>


            <p className="text-sm text-gray-400 mt-1">

              Case ID: {data.case_id}

            </p>


          </div>




          <div className="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-lg">

            <span className="text-green-400 text-sm">

              ● Analysis Complete

            </span>

          </div>


        </div>







        {/* Stats */}


        <div className="grid md:grid-cols-4 gap-4">


          <StatCard

            title="Entities"

            value={data.people?.length || 0}

          />


          <StatCard

            title="Events"

            value={events.length}

          />


          <StatCard

            title="Connections"

            value={data.connections?.length || 0}

          />


          <StatCard

            title="Confidence"

            value={`${data.report?.confidence || 0}%`}

          />


        </div>








        {/* Agent Pipeline */}


        <section className="mt-10">


          <h2 className="text-lg font-medium mb-4">

            Agent Execution Pipeline

          </h2>


          <AgentStatus/>


        </section>








        {/* Report */}


        <section className="mt-10">


          <ReportCard report={data.report}/>


        </section>








        {/* Entities */}


        <section className="mt-10">


          <h2 className="text-lg font-medium mb-4">

            Identified Entities

          </h2>



          <div className="flex flex-wrap gap-3">


            {

              data.people?.map((person)=>(


                <div

                  key={person}

                  className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg hover:border-blue-500 transition"

                >

                  <span>

                    👤 {person}

                  </span>


                </div>


              ))

            }


          </div>


        </section>








        {/* Timeline */}


        <section className="mt-10">


          <h2 className="text-lg font-medium mb-4">

            Evidence Timeline

          </h2>




          <div className="space-y-3">


            {

              events.map((event,index)=>(


                <div

                  key={index}

                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-blue-500 transition"

                >


                  <p className="text-blue-400 text-sm font-medium">

                    {event.time}

                  </p>



                  <p className="text-gray-300 mt-1">

                    {event.event}

                  </p>


                </div>


              ))

            }


          </div>


        </section>








        {/* Network */}


        <section className="mt-10">


          <h2 className="text-lg font-medium mb-4">

            Relationship Network

          </h2>



          <RelationshipGraph

            connections={data.connections || []}

          />


        </section>





      </div>


    </div>


  );

}






function StatCard({title,value}){


  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-blue-500 transition">


      <p className="text-gray-400 text-sm">

        {title}

      </p>


      <p className="text-2xl font-semibold mt-2">

        {value}

      </p>


    </div>


  );

}



export default CaseDetails;