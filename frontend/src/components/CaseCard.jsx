import { useNavigate } from "react-router-dom";


function CaseCard({ caseId }) {

  const navigate = useNavigate();


  return (

    <div
      onClick={() => navigate(`/case/${caseId}`)}
      className="bg-gray-900 p-6 rounded-xl border border-gray-800 cursor-pointer hover:border-blue-500"
    >

      <h3 className="text-xl font-bold">
        {caseId}
      </h3>


      <p className="text-gray-400 mt-2">
        Investigation Case
      </p>


    </div>

  );
}


export default CaseCard;