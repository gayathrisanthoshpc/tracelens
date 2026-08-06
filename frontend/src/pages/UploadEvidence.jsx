import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  UploadCloud,
  CheckCircle2,
  LoaderCircle
} from "lucide-react";




function UploadEvidence(){



  const [file,setFile]=useState(null);

  const [loading,setLoading]=useState(false);

  const [step,setStep]=useState(0);


  const caseId="case_002";


  const navigate=useNavigate();





  const agents=[

    "Evidence Agent",

    "Entity Extraction Agent",

    "Timeline Reconstruction Agent",

    "Report Generation Agent"

  ];









  const uploadFile=async()=>{


    if(!file){

      alert("Select evidence file");

      return;

    }



    setLoading(true);



    const formData=new FormData();

    formData.append(
      "file",
      file
    );





    const timer=setInterval(()=>{


      setStep(current=>{


        if(current < agents.length-1){

          return current+1;

        }


        return current;


      });


    },1500);







    try{


      await axios.post(

        `http://127.0.0.1:8000/upload/${caseId}`,

        formData

      );





      await axios.get(

        `http://127.0.0.1:8000/analyze/${caseId}`

      );





      clearInterval(timer);


      navigate(`/case/${caseId}`);




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


      <div className="
        min-h-screen
        bg-[#050816]
        flex
        items-center
        justify-center
        px-6
      ">


        <div className="
          max-w-xl
          w-full
          bg-[#0b1120]
          border
          border-white/10
          rounded-3xl
          p-8
        ">



          <div className="
            flex
            items-center
            gap-3
          ">


            <LoaderCircle
              className="
                animate-spin
                text-blue-400
              "
            />


            <h1 className="
              text-2xl
              font-semibold
            ">

              Processing Evidence

            </h1>


          </div>




          <p className="
            text-gray-400
            mt-3
            text-sm
          ">

            TraceLens agents are reconstructing the investigation.

          </p>







          <div className="
            mt-8
            space-y-3
          ">


          {


            agents.map((agent,index)=>(



              <div

                key={agent}

                className={`

                  rounded-xl
                  border
                  p-4


                  ${
                    index <= step

                    ?

                    "border-blue-500/50 bg-blue-500/10"

                    :

                    "border-white/10"

                  }


                `}

              >




                <div className="
                  flex
                  items-center
                  gap-3
                ">



                {

                  index < step

                  ?

                  <CheckCircle2
                    size={18}
                    className="text-green-400"
                  />

                  :

                  <span className="text-blue-400">

                    {index===step?"●":"○"}

                  </span>

                }





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



    <div className="
      min-h-screen
      bg-[#050816]
      text-white
      px-6
      py-12
    ">



      <div className="
        max-w-5xl
        mx-auto
      ">




        <p className="
          text-blue-400
          text-xs
          uppercase
          tracking-widest
        ">

          Evidence Submission

        </p>




        <h1 className="
          text-4xl
          font-bold
          mt-3
        ">

          Upload Evidence

        </h1>




        <p className="
          text-gray-400
          mt-3
        ">

          Upload digital evidence and allow AI agents to reconstruct the case.

        </p>








        <div className="
          mt-10
          max-w-2xl
          bg-[#0b1120]
          border
          border-white/10
          rounded-3xl
          p-8
        ">





          <label className="
            block
            border-dashed
            border
            border-blue-500/40
            rounded-2xl
            bg-blue-500/5
            p-12
            text-center
            cursor-pointer
          ">


            <UploadCloud
              className="
                mx-auto
                text-blue-400
              "
              size={45}
            />



            <h3 className="
              mt-5
              font-semibold
            ">

              Upload Evidence File

            </h3>




            <p className="
              text-sm
              text-gray-400
              mt-2
            ">

              Chat logs, documents or digital evidence

            </p>



            <input

              type="file"

              className="hidden"

              onChange={(e)=>
                setFile(e.target.files[0])
              }

            />


          </label>







          {
            file &&

            <div className="
              mt-5
              p-4
              rounded-xl
              bg-blue-500/10
              border
              border-blue-500/30
            ">

              <p className="text-blue-400 text-sm">

                Selected Evidence

              </p>


              <p className="
                text-sm
                text-gray-300
                mt-1
              ">

                {file.name}

              </p>


            </div>

          }






          <button

            onClick={uploadFile}

            className="
              mt-6
              w-full
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              transition
              font-medium
            "

          >

            Start Investigation

          </button>





        </div>



      </div>


    </div>


  );


}



export default UploadEvidence;