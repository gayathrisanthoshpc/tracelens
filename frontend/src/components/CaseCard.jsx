import { Link } from "react-router-dom";
import {
  FolderSearch,
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock3
} from "lucide-react";


function CaseCard({ caseId }) {


  return (

    <div
      className="
      rounded-2xl
      border
      border-white/15
      bg-[#0b1220]
      p-6
      transition-all
      duration-300
      hover:border-blue-500/40
      hover:-translate-y-1
      hover:shadow-xl
      "
    >


      {/* Header */}

      <div className="flex items-start justify-between gap-3">


        <div className="flex items-center gap-3">


          <div
            className="
            w-12
            h-12
            rounded-xl
            bg-blue-500/10
            flex
            items-center
            justify-center
            "
          >

            <FolderSearch
              size={24}
              className="text-blue-400"
            />

          </div>



          <div>

            <h3 className="
              text-xl
              font-semibold
            ">
              {caseId}
            </h3>


            <p className="
              text-sm
              text-gray-400
              mt-1
            ">
              Digital Evidence Investigation
            </p>


          </div>


        </div>




        <span
          className="
          flex
          items-center
          gap-1
          rounded-full
          border
          border-green-500/20
          bg-green-500/10
          px-3
          py-1
          text-xs
          text-green-400
          whitespace-nowrap
          "
        >

          <CheckCircle2 size={14}/>

          Complete

        </span>



      </div>






      {/* Stats */}


      <div className="
        mt-6
        grid
        grid-cols-2
        gap-4
      ">


        <div
          className="
          rounded-xl
          border
          border-white/10
          bg-black/20
          p-4
          "
        >

          <div className="
            flex
            items-center
            gap-2
            text-gray-400
            text-xs
          ">

            <FileText size={14}/>

            Evidence

          </div>


          <p className="
            mt-2
            text-xl
            font-semibold
          ">
            --
          </p>


        </div>





        <div
          className="
          rounded-xl
          border
          border-white/10
          bg-black/20
          p-4
          "
        >

          <div className="
            flex
            items-center
            gap-2
            text-gray-400
            text-xs
          ">

            <Clock3 size={14}/>

            Timeline

          </div>


          <p className="
            mt-2
            text-xl
            font-semibold
          ">
            --
          </p>


        </div>


      </div>






      {/* Action */}

      <Link

        to={`/case/${caseId}`}

        className="
        mt-6
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-blue-600
        px-5
        py-3
        font-medium
        hover:bg-blue-700
        transition
        "

      >

        View Investigation

        <ArrowRight size={18}/>

      </Link>




    </div>

  );

}


export default CaseCard;