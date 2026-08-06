function Timeline({ events = [] }) {


  if(events.length === 0){


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

        No evidence timeline available.

      </div>

    );

  }





  return (


    <div className="
      relative
      bg-[#0b1120]
      border
      border-white/10
      rounded-2xl
      p-8
    ">





      <div className="
        absolute
        left-[39px]
        top-10
        bottom-10
        w-px
        bg-white/10
      " />






      <div className="
        space-y-8
      ">


        {

          events.map((event,index)=>(



            <div

              key={index}

              className="
                relative
                flex
                gap-6
              "

            >




              {/* DOT */}


              <div className="
                relative
                z-10
                h-5
                w-5
                rounded-full
                bg-blue-500
                border-4
                border-[#0b1120]
                mt-1
                flex-shrink-0
              "/>








              {/* CONTENT */}


              <div className="
                flex-1
                bg-black/20
                border
                border-white/10
                rounded-xl
                p-5
              ">



                <div className="
                  flex
                  justify-between
                  items-start
                  gap-4
                ">



                  <p className="
                    text-blue-400
                    font-mono
                    text-sm
                    font-semibold
                  ">

                    {event.time || "Unknown"}

                  </p>



                  <span className="
                    text-xs
                    text-gray-500
                  ">

                    Evidence Event

                  </span>



                </div>





                <p className="
                  mt-3
                  text-gray-200
                  text-sm
                  leading-relaxed
                ">

                  {event.event}

                </p>




              </div>




            </div>


          ))

        }


      </div>



    </div>


  );


}


export default Timeline;