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
      .get(`http://127.0.0.1:8000/analyze/${caseId}`)
      .then((response) => {

        setData(response.data);

      })
      .catch((error) => {

        console.log(error);

      });


  }, [caseId]);





  if (!data) {

    return (

      <div className="min-h-screen bg-gray-950 text-white p-8">

        Loading investigation...

      </div>

    );

  }





  return (

    <div className="min-h-screen bg-gray-950 text-white p-8">



      <h1 className="text-4xl font-bold">

        Investigation: {data.case_id}

      </h1>





      {/* Agent Workflow */}

      <section className="mt-10">


        <h2 className="text-2xl font-semibold mb-5">

          Investigation Process

        </h2>


        <AgentStatus />


      </section>









      {/* Report */}

      <section className="mt-10">


        <h2 className="text-2xl font-semibold mb-5">

          AI Report

        </h2>


        <ReportCard report={data.report} />


      </section>









      {/* People */}

      <section className="mt-10">


        <h2 className="text-2xl font-semibold">

          Identified People

        </h2>



        <div className="flex gap-4 mt-5 flex-wrap">


          {data.people.map((person) => (

            <div

              key={person}

              className="bg-gray-900 border border-gray-700 px-6 py-3 rounded-xl"

            >

              {person}

            </div>

          ))}


        </div>


      </section>









      {/* Timeline */}

      <section className="mt-10">


        <h2 className="text-2xl font-semibold">

          Timeline

        </h2>



        <div className="mt-5 space-y-4">


          {data.events.map((event, index) => (

            <div

              key={index}

              className="bg-gray-900 border border-gray-700 p-5 rounded-xl"

            >


              <p className="text-blue-400 font-semibold text-lg">

                {event.time}

              </p>



              <p className="mt-2">

                {event.event}

              </p>


            </div>

          ))}


        </div>


      </section>









      {/* Connection Graph */}

      <section className="mt-10">


        <h2 className="text-2xl font-semibold mb-5">

          Relationship Graph

        </h2>



        <RelationshipGraph

          connections={data.connections}

        />


      </section>






    </div>

  );

}



export default CaseDetails;