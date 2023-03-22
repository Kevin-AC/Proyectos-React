import Reac from "react";

function Button({ texto , isButtonClick , click }){
    return(
      <button className={ isButtonClick?'buttonClick':'buttonRestar' } onClick={click} >{texto}</button>
    )

}
export default Button;