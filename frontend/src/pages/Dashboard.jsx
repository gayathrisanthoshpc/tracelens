import { useEffect, useState } from "react";
import axios from "axios";
import CaseCard from "../components/CaseCard";


function Dashboard() {

  const [cases, setCases] = useState([]);


  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/cases")
      .then((response) => {

        setCases(response.data.cases);

      })
      .catch((error) => {

        console.log(error);

      });


  }, []);



  return (

    <div className="min-h-screen bg-gray-950 text-white p-8">


      <header className="mb-10">

        <h1 className="text-4xl font-bold">
          TraceLens
        </h1>


        <p className="text-gray-400 mt-2">
          AI Investigation Dashboard
        </p>

      </header>



      <h2 className="text-2xl font-semibold mb-5">
        Recent Cases
      </h2>



      <div className="grid md:grid-cols-3 gap-6">


        {
          cases.map((caseId)=>(

            <CaseCard
              key={caseId}
              caseId={caseId}
            />

          ))
        }


      </div>


    </div>

  );

}


export default Dashboard;
