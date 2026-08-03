import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function CaseDetails() {

  const { caseId } = useParams();

  const [data, setData] = useState(null);



  useEffect(() => {

    axios
      .get(`http://127.0.0.1:8000/cases/${caseId}`)
      .then((response)=>{

        setData(response.data);

      });


  }, [caseId]);



  if(!data){

    return (
      <div className="text-white p-8">
        Loading investigation...
      </div>
    );

  }



  return (

    <div className="min-h-screen bg-gray-950 text-white p-8">


      <h1 className="text-4xl font-bold">
        {data.case_id}
      </h1>


      <div className="mt-8">


        <h2 className="text-2xl font-semibold">
          People
        </h2>


        <div className="flex gap-3 mt-3">

          {
            data.people.map((person)=>(

              <span
                key={person}
                className="bg-gray-900 px-4 py-2 rounded-lg"
              >
                {person}
              </span>

            ))
          }

        </div>


      </div>




      <div className="mt-10">


        <h2 className="text-2xl font-semibold">
          Timeline
        </h2>


        <div className="mt-4 space-y-4">


        {
          data.events.map((event,index)=>(

            <div
              key={index}
              className="bg-gray-900 p-4 rounded-xl"
            >

              <p className="text-blue-400">
                {event.time}
              </p>

              <p>
                {event.event}
              </p>


            </div>

          ))
        }


        </div>


      </div>


    </div>

  );

}


export default CaseDetails;