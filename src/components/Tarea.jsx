import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={completada ? "TareaContainer completada" : "TareaContainer"}
    >
      <div
        className="w-full h-full text-xl font-normal flex items-center"
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="w-6 h-6 m-1 " />
      </div>
    </div>
  );
}
export default Tarea;
