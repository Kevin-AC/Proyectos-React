import React from "react";

function Buttons(props) {
  const isOperator = (valor) => {
    //retornar falso o verdadero si operador es o no un numero
    return isNaN(valor) && valor != "." && valor != "=";
  };
  return (
    <button
      className={`buttonCont ${isOperator(props.children) ? "operator" : null}`}
      onClick={() => props.click(props.children)}
    >
      {props.children}
    </button>
  );
}
export default Buttons;
