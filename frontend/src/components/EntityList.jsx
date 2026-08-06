function EntityList({ people = [] }) {


  if (people.length === 0) {


    return (

      <div className="
        bg-[#0b1120]
        border
        border-white/10
        rounded-2xl
        p-8
        text-center
        text-gray-400
        text-sm
      ">

        No entities identified from evidence.

      </div>

    );

  }





  return (


    <div className="
      grid
      sm:grid-cols-2
      md:grid-cols-3
      gap-5
    ">


      {

        people.map((person,index)=>(


          <div

            key={person}

            className="
              bg-[#0b1120]
              border
              border-white/10
              rounded-2xl
              p-5
              flex
              items-center
              gap-4
              hover:border-blue-500/50
              transition
            "

          >



            <div className="
              h-12
              w-12
              rounded-full
              bg-blue-500/10
              border
              border-blue-500/30
              flex
              items-center
              justify-center
              text-blue-400
              font-semibold
              text-lg
            ">


              {person.charAt(0).toUpperCase()}


            </div>






            <div>


              <p className="
                text-xs
                uppercase
                tracking-wider
                text-blue-400
              ">

                Person

              </p>



              <h3 className="
                mt-1
                text-white
                font-semibold
              ">

                {person}

              </h3>


            </div>




          </div>


        ))


      }


    </div>


  );


}


export default EntityList;