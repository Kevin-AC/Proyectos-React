import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";



function App() {

  const[numClicks,setNumClicks]=useState(0);

  const manejarClick=()=>{
    setNumClicks(numClicks+1) ;
  };
  const reiniciarContador=()=>{
    setNumClicks(0);
  };

  return (
    <div className="flex flex-wrap justify-center items-center pt-4 ">
      <div className="w-screen flex items-center justify-center m-5">
        <img className="h-14" src="src/image/freecodecamp-logo.png" alt="logo freecodecamp" />
      </div>
      <div className="h-[550px] min-w-[600px] flex flex-col flex-wrap items-center justify-center  ">
        <Counter numClicks={numClicks}/>
        <Button texto='Click' isButtonClick={true} click={manejarClick}  />
        <Button texto='Restart' isButtonClick={false} click={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
