import React, { useState } from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);
  const agregarTarea = (tarea) => {
    console.log(tarea);

    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareaActualizadas = [tarea, ...tareas];
      setTareas(tareaActualizadas);
    }
  };
  const eliminarTarea = (id) => {
    const tareaActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareaActualizadas);
  };
  const completarTarea = (id) => {
    const tareaActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareaActualizadas);
  };

  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className="flex flex-wrap justify-center mt-4">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}
export default ListaDeTareas;
