import { useEffect, useState } from "react";
import axios from "axios";


function App() {

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



      <section>

        <h2 className="text-2xl font-semibold mb-5">
          Recent Cases
        </h2>


        <div className="grid md:grid-cols-3 gap-6">


          {cases.map((caseId) => (

            <div
              key={caseId}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
            >

              <h3 className="text-xl font-bold">
                {caseId}
              </h3>

              <p className="text-gray-400 mt-2">
                Investigation Case
              </p>

            </div>

          ))}


        </div>


      </section>


    </div>

  );

}


export default App;