import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function UploadEvidence() {


  const [file, setFile] = useState(null);

  const [caseId] = useState("case_002");

  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(0);

  const navigate = useNavigate();



  const agents = [

    "Evidence Agent",
    "Entity Extraction Agent",
    "Timeline Reconstruction Agent",
    "Report Generation Agent"

  ];





  const uploadFile = async () => {


    if (!file) {

      alert("Select evidence file");

      return;

    }



    setLoading(true);



    const formData = new FormData();


    formData.append(
      "file",
      file
    );




    const timer = setInterval(()=>{


      setStep((current)=>{


        if(current < agents.length - 1){

          return current + 1;

        }


        return current;


      });


    },1500);






    try {


      await axios.post(

        `http://127.0.0.1:8000/upload/${caseId}`,

        formData

      );




      await axios.get(

        `http://127.0.0.1:8000/analyze/${caseId}`

      );



      clearInterval(timer);



      navigate(

        `/case/${caseId}`

      );



    }

    catch(error){


      console.log(error);

      alert("Investigation failed");


    }

    finally{


      clearInterval(timer);

      setLoading(false);


    }


  };








  if(loading){


    return (


      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">


        <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl p-8">


          <h1 className="text-2xl font-semibold">

            TraceLens Processing

          </h1>



          <p className="text-sm text-gray-400 mt-2">

            AI agents are analyzing the submitted evidence

          </p>





          <div className="mt-8 space-y-3">


          {

            agents.map((agent,index)=>(


              <div

                key={agent}

                className={`rounded-xl p-4 border transition

                ${
                  index <= step
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-zinc-800 bg-zinc-950"

                }

                `}

              >



                <div className="flex items-center gap-3">


                  <span>


                  {

                    index < step

                    ? "✓"

                    : index === step

                    ? "◉"

                    : "○"

                  }


                  </span>



                  <span className="text-sm">

                    {agent}

                  </span>


                </div>



              </div>


            ))

          }


          </div>



        </div>



      </div>


    );


  }







  return (


    <div className="min-h-screen bg-gray-950 text-white p-6">


      <div className="max-w-5xl mx-auto">



        <header>


          <h1 className="text-3xl font-semibold">

            TraceLens

          </h1>



          <p className="text-sm text-gray-400 mt-2">

            Digital evidence analysis and investigation platform

          </p>


        </header>







        <div className="mt-10 max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl p-8">


          <h2 className="text-xl font-medium">

            Upload Evidence

          </h2>



          <p className="text-sm text-gray-400 mt-2">

            Submit digital evidence for AI-powered investigation.

          </p>






          <div className="mt-6 border border-dashed border-zinc-700 rounded-xl p-8 text-center">


            <p className="text-gray-300 text-sm">

              Select evidence file

            </p>



            <input

              type="file"

              className="mt-4 text-sm text-gray-400"

              onChange={(e)=>setFile(e.target.files[0])}

            />


          </div>






          {

            file && (


              <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">


                <p className="text-blue-400 text-sm">

                  Evidence Selected

                </p>


                <p className="text-gray-300 text-sm mt-1">

                  {file.name}

                </p>


              </div>


            )

          }







          <button


            onClick={uploadFile}


            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-3 text-sm font-medium transition"


          >

            Start Investigation


          </button>





        </div>



      </div>


    </div>


  );

}


export default UploadEvidence;