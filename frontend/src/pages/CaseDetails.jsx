import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import RelationshipGraph from "../components/RelationshipGraph";
import AgentStatus from "../components/AgentStatus";


function CaseDetails() {


  const { caseId } = useParams();

  const [data, setData] = useState(null);



  useEffect(() => {

    axios
      .get(`http://127.0.0.1:8000/cases/${caseId}`)
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
        {data.case_id}
      </h1>



      {/* Agent Workflow */}

      <section className="mt-10">


        <h2 className="text-2xl font-semibold mb-5">
          Investigation Process
        </h2>


        <AgentStatus />


      </section>





      {/* People */}

      <section className="mt-10">


        <h2 className="text-2xl font-semibold">
          People
        </h2>


        <div className="flex gap-3 mt-4">


          {
            data.people.map((person) => (

              <div
                key={person}
                className="bg-gray-900 px-5 py-3 rounded-xl"
              >

                {person}

              </div>

            ))
          }


        </div>


      </section>






      {/* Timeline */}

      <section className="mt-10">


        <h2 className="text-2xl font-semibold">
          Timeline
        </h2>


        <div className="mt-5 space-y-4">


          {
            data.events.map((event, index) => (

              <div
                key={index}
                className="bg-gray-900 p-5 rounded-xl"
              >

                <p className="text-blue-400 font-semibold">
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

      <section className="mt-10">


        <h2 className="text-2xl font-semibold mb-5">
          Connections
        </h2>


        <RelationshipGraph />


      </section>



    </div>

  );

}


export default CaseDetails;