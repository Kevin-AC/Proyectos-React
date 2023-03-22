import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
function Formulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const Envio = (e) => {
    e.preventDefault();
  
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada:false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form
      className="flex flex-wrap gap-4 items-center justify-center mt-4"
      onSubmit={Envio}
    >
      <input
        className="w-[350px] font-normal text-lg bg-white py-4 pr-8 pl-4 rounded border-2 border-[#00471b] outline-none"
        type="text"
        placeholder="Ingrese una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="p-4 text-lg font-Roboto border-none rounded cursor-pointer outline-none bg-[#00471b] text-white capitalize">
        Agregar Tarea
      </button>
    </form>
  );
}
export default Formulario;
