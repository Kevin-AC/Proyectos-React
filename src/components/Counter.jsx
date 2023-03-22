import React from "react";

function Counter({ numClicks }){
  return(
    <div className="min-w-[300px] h-72 p-6 text-white flex items-center justify-center text-9xl border-4 rounded-md mb-4 ">
      {numClicks}
    </div>
  )
}
export default Counter;