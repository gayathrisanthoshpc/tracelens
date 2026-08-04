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

        Loading investigation...

      </div>

    );

  }







  return (


    <div className="min-h-screen bg-gray-950 text-white p-8">



      <div className="max-w-7xl mx-auto">





        {/* Header */}

        <div className="flex justify-between items-center">


          <div>

            <h1 className="text-4xl font-bold">

              TraceLens AI

            </h1>


            <p className="text-gray-400 mt-2">

              Case Investigation: {data.case_id}

            </p>


          </div>




          <div className="bg-green-900/30 border border-green-700 px-5 py-3 rounded-xl">

            <span className="text-green-400">

              ● Investigation Complete

            </span>

          </div>



        </div>








        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-5 mt-10">


          <StatCard

            title="Entities"

            value={data.people.length}

          />


          <StatCard

            title="Events"

            value={data.events.length}

          />


          <StatCard

            title="Connections"

            value={data.connections?.length || 0}

          />


          <StatCard

            title="Confidence"

            value={`${data.report.confidence}%`}

          />


        </div>









        {/* Agents */}

        <section className="mt-12">


          <h2 className="text-2xl font-bold mb-5">

            AI Agent Pipeline

          </h2>


          <AgentStatus />


        </section>









        {/* Report */}

        <ReportCard report={data.report}/>









        {/* People */}

        <section className="mt-12">


          <h2 className="text-2xl font-bold">

            Identified Entities

          </h2>


          <div className="flex gap-4 mt-5">


            {

              data.people.map((person)=>(


                <div

                key={person}

                className="bg-gray-900 border border-gray-800 px-6 py-4 rounded-xl"

                >

                  👤 {person}


                </div>


              ))

            }


          </div>


        </section>









        {/* Timeline */}

        <section className="mt-12">


          <h2 className="text-2xl font-bold">

            Event Timeline

          </h2>



          <div className="mt-5 space-y-4">


          {

            data.events.map((event,index)=>(


              <div

              key={index}

              className="bg-gray-900 border border-gray-800 p-5 rounded-xl"

              >


                <p className="text-blue-400 font-bold">

                  {event.time}

                </p>


                <p className="mt-2">

                  {event.event}

                </p>


              </div>


            ))

          }


          </div>


        </section>









        {/* Graph */}

        <section className="mt-12">


          <h2 className="text-2xl font-bold mb-5">

            Relationship Network

          </h2>


          <RelationshipGraph connections={data.connections}/>


        </section>





      </div>


    </div>


  );


}






function StatCard({title,value}){


  return (

    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">


      <p className="text-gray-400">

        {title}

      </p>


      <p className="text-3xl font-bold mt-2">

        {value}

      </p>


    </div>

  );


}




export default CaseDetails;