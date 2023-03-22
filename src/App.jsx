import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";
import { useState } from "react";
import {evaluate} from 'mathjs';

function App() {

  const [input,setInput]=useState('');
  const addInput=val=>{
    setInput(input+val);
  }
  const result=()=>{
    if(input){
      const output=evaluate(input)
      setInput(output.toString().slice(0,8))
    }
    
  }


  return (
    <div className=" h-screen pt-2 flex flex-wrap justify-center items-center ">
      <div className="w-full h-14 m-1 flex justify-center items-center">
        <img
          className="h-10"
          src="src/image/freecodecamp-logo.png"
          alt="logoFreecodeCamp"
        />
      </div>
      <div className="w-[400px] h-[590px] p-4 bg-[#99c9ff] rounded-lg border-4">
        <Screen input={input} />
        <div className="fila">
          <Buttons click={addInput}>1</Buttons>
          <Buttons click={addInput}>2</Buttons>
          <Buttons click={addInput}>3</Buttons>
          <Buttons click={addInput}>+</Buttons>
        </div>
        <div className="fila">
          <Buttons click={addInput}>4</Buttons>
          <Buttons click={addInput}>5</Buttons>
          <Buttons click={addInput}>6</Buttons>
          <Buttons click={addInput}>-</Buttons>

        </div>
        <div className="fila">
          <Buttons click={addInput}>7</Buttons>
          <Buttons click={addInput}>8</Buttons>
          <Buttons click={addInput}>9</Buttons>
          <Buttons click={addInput}>*</Buttons>

        </div>
        <div className="fila">
          <Buttons click={result}>=</Buttons>
          <Buttons click={addInput}>0</Buttons>
          <Buttons click={addInput}>.</Buttons>
          <Buttons click={addInput}>/</Buttons>
        </div>
        <div className="fila">
          <ButtonClear clear={()=>setInput('')} >Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
