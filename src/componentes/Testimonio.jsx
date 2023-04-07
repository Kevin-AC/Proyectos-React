import React from "react";

function Testimonio(props) {
  const imagenSrc = `./image/testimonio-${props.imagen}.png`;
  return (
    <div className="w-1170 h-368 bg-white flex items-center justify-center shadow-Shadow text-black my-4 ">
      <img className="w-auto h-full" src={imagenSrc} alt="foto-testigo" />
      <div className="p-10">
        <p className="text-xl">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="text-xl mt-3 pb-8">
          {props.cargo} de Software en <strong>{props.empresa}</strong>
        </p>
        <p className="text-lg text-justify">"{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;
