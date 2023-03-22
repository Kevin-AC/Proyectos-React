import React from "react";

const ButtonClear=(props)=>(
  <div className="h-20 text-xl flex flex-1 bg-[#ac0246] mt-2 justify-center items-center font-bold text-white border-2 cursor-pointer rounded-3xl hover:bg-[#ebb000] select-none"
  onClick={props.clear}>
    {props.children}
  </div>
)
export default ButtonClear;