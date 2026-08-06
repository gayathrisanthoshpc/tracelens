import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FolderOpen,
  Activity,
  BrainCircuit,
  Upload,
} from "lucide-react";

import CaseCard from "../components/CaseCard";


function Dashboard() {

  const [cases, setCases] = useState([]);


  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/cases")
      .then((res) => {

        setCases(res.data.cases || []);

      })
      .catch((error)=>{

        console.log(error);

      });

  }, []);



  return (

    <div className="space-y-10">


      {/* Hero Section */}

      <section className="
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-r
        from-blue-600/15
        to-cyan-500/10
        p-8
      ">


        <div className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-8
        ">


          <div>


            <p className="
              text-blue-400
              uppercase
              tracking-[0.25em]
              text-sm
            ">
              AI Investigation Platform
            </p>



            <h1 className="
              mt-3
              text-4xl
              font-bold
            ">
              TraceLens Dashboard
            </h1>



            <p className="
              mt-4
              max-w-2xl
              text-gray-400
            ">
              Upload digital evidence, reconstruct timelines,
              discover relationships and generate explainable
              investigation reports.
            </p>


          </div>





          <Link
            to="/upload"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              px-5
              py-3
              font-medium
              whitespace-nowrap
              hover:bg-blue-700
              transition
            "
          >

            <Upload size={18}/>

            Upload Evidence

          </Link>


        </div>


      </section>







      {/* Statistics */}

      <section className="
        grid
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6
      ">


        <StatCard

          icon={<FolderOpen className="text-blue-400"/>}

          title="Cases"

          value={cases.length}

        />



        <StatCard

          icon={<Activity className="text-blue-400"/>}

          title="Status"

          value="Online"

        />



        <StatCard

          icon={<BrainCircuit className="text-blue-400"/>}

          title="AI Engine"

          value="Ready"

        />



        <StatCard

          icon={<Upload className="text-blue-400"/>}

          title="Uploads"

          value={cases.length}

        />


      </section>









      {/* Investigations */}

      <section className="space-y-6">



        <div className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
        ">


          <h2 className="
            text-2xl
            font-semibold
          ">
            Recent Investigations
          </h2>



          <span className="
            w-fit
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-4
            py-2
            text-sm
            text-blue-300
          ">

            {cases.length} Active Cases

          </span>


        </div>







        <div className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        ">


        {

          cases.length > 0 ?


          cases.map((id)=>(

            <CaseCard

              key={id}

              caseId={id}

            />

          ))



          :



          <div className="
            col-span-full
            rounded-2xl
            border
            border-dashed
            border-white/20
            p-10
            text-center
          ">


            <p className="text-5xl">
              📂
            </p>



            <h3 className="
              mt-4
              text-xl
              font-semibold
            ">
              No investigations yet
            </h3>



            <p className="
              mt-2
              text-gray-400
            ">
              Upload evidence to begin your first AI investigation.
            </p>




            <Link

              to="/upload"

              className="
                inline-block
                mt-5
                rounded-xl
                bg-blue-600
                px-5
                py-3
                hover:bg-blue-700
                transition
              "

            >

              Upload Evidence

            </Link>


          </div>


        }


        </div>


      </section>


    </div>


  );

}








function StatCard({icon,title,value}) {


  return (

    <div className="
      rounded-2xl
      border
      border-white/15
      bg-[#0b1220]
      p-6
      hover:border-blue-500/40
      transition
    ">


      <div>

        {icon}

      </div>




      <p className="
        mt-5
        text-gray-300
        text-sm
      ">

        {title}

      </p>




      <h3 className="
        mt-2
        text-3xl
        font-bold
      ">

        {value}

      </h3>



    </div>

  );

}



export default Dashboard;