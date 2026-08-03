function ReportCard({ report }) {

  if (!report) {
    return null;
  }


  return (

    <div className="mt-10 bg-gray-900 border border-gray-800 rounded-xl p-6">


      <h2 className="text-2xl font-semibold mb-6">
        Investigation Summary
      </h2>



      <div className="grid md:grid-cols-2 gap-5">


        <div className="bg-gray-800 rounded-lg p-5">

          <p className="text-gray-400">
            Risk Level
          </p>

          <p className="text-yellow-400 text-2xl font-bold mt-2">
            {report.risk}
          </p>

        </div>




        <div className="bg-gray-800 rounded-lg p-5">

          <p className="text-gray-400">
            Confidence
          </p>

          <p className="text-green-400 text-2xl font-bold mt-2">
            {report.confidence}%
          </p>

        </div>


      </div>




      <div className="mt-6">


        <h3 className="text-lg font-semibold">
          Summary
        </h3>


        <p className="text-gray-300 mt-2">
          {report.summary}
        </p>


      </div>





      <div className="mt-6">


        <h3 className="text-lg font-semibold">
          Key Findings
        </h3>


        <div className="mt-3 space-y-3">


          {
            report.findings.map((finding, index)=>(

              <div
                key={index}
                className="flex gap-3 items-center bg-gray-800 p-3 rounded-lg"
              >

                <span className="text-green-400">
                  ✓
                </span>


                <span>
                  {finding}
                </span>


              </div>

            ))
          }


        </div>


      </div>



    </div>

  );

}


export default ReportCard;