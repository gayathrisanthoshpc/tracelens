import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function UploadEvidence() {


  const [file, setFile] = useState(null);

  const [caseId, setCaseId] = useState("case_002");

  const navigate = useNavigate();



  const uploadFile = async () => {


    if (!file) {

      alert("Select evidence file");

      return;

    }



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


  };





  return (

    <div className="min-h-screen bg-gray-950 text-white p-10">


      <h1 className="text-4xl font-bold">

        TraceLens

      </h1>


      <p className="text-gray-400 mt-2">

        AI Investigation Dashboard

      </p>




      <div className="mt-10 bg-gray-900 rounded-xl p-8 max-w-xl">


        <h2 className="text-2xl font-semibold">

          Upload Evidence

        </h2>




        <input

          className="mt-6"

          type="file"

          onChange={(e)=>
            setFile(e.target.files[0])
          }

        />




        <button

          onClick={uploadFile}

          className="mt-6 bg-blue-600 px-6 py-3 rounded-lg"

        >

          Analyze Case

        </button>



      </div>


    </div>

  );

}


export default UploadEvidence;