function AgentStatus() {

  const agents = [
    {
      name: "Evidence Agent",
      status: "Evidence collected successfully"
    },
    {
      name: "Entity Agent",
      status: "People and entities extracted"
    },
    {
      name: "Timeline Agent",
      status: "Events reconstructed successfully"
    },
    {
      name: "Report Agent",
      status: "Investigation report generated"
    }
  ];


  return (

    <div className="space-y-4">

      {
        agents.map((agent) => (

          <div
            key={agent.name}
            className="bg-gray-900 p-5 rounded-xl border border-gray-800"
          >

            <div className="flex items-center gap-3">

              <span className="text-green-400 text-xl">
                ✓
              </span>


              <h3 className="text-lg font-semibold">
                {agent.name}
              </h3>

            </div>


            <p className="text-gray-400 mt-2 ml-8">
              {agent.status}
            </p>


          </div>

        ))
      }

    </div>

  );

}


export default AgentStatus;