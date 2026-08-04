import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function UploadEvidence() {


  const [file, setFile] = useState(null);

  const [caseId, setCaseId] = useState("case_002");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();





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





    try {


      await axios.post(

        `http://127.0.0.1:8000/upload/${caseId}`,

        formData

      );




      await axios.get(

        `http://127.0.0.1:8000/analyze/${caseId}`

      );




      navigate(

        `/case/${caseId}`

      );



    }

    catch(error){


      console.log(error);


      alert(

        "Upload failed"

      );


    }


    finally {


      setLoading(false);


    }


  };








  return (


    <div className="min-h-screen bg-gray-950 text-white p-10">



      <div className="max-w-4xl mx-auto">



        <h1 className="text-5xl font-bold">

          TraceLens

        </h1>



        <p className="text-gray-400 text-lg mt-3">

          AI Investigation Dashboard

        </p>







        <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-10 max-w-xl">



          <h2 className="text-2xl font-semibold">

            📂 Upload Evidence

          </h2>




          <p className="text-gray-400 mt-2">

            Upload evidence and let AI agents investigate the case.

          </p>







          <div className="mt-8 border-2 border-dashed border-gray-700 rounded-xl p-8 text-center">


            <p className="text-gray-300">

              Choose evidence file

            </p>



            <input


              type="file"


              className="mt-5 block w-full text-sm text-gray-400"


              onChange={(e)=>


                setFile(e.target.files[0])


              }


            />




          </div>







          {

            file && (


              <div className="mt-5 bg-gray-800 rounded-lg p-4">


                <p className="text-green-400">

                  ✓ Evidence selected

                </p>


                <p className="text-gray-300 mt-1">

                  {file.name}

                </p>


              </div>


            )

          }








          <button


            onClick={uploadFile}


            disabled={loading}


            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"


          >



            {

              loading

              ? "Analyzing Evidence..."

              : "Start Investigation"

            }



          </button>





        </div>



      </div>



    </div>


  );

}



export default UploadEvidence;