 import { combosWinner } from "./constans"
 
 //Revisar combinaciones ganadoras
 export const checkWinnerFrom=(boardToCheck)=>{
    for(const combo of combosWinner){
      const [a,b,c]=combo
      if( boardToCheck[a]&&
          boardToCheck[a]===boardToCheck[b]&&
          boardToCheck[a]===boardToCheck[c]
        ){
          return boardToCheck[a]
        }
    }
    return null
  }


 export const checkEndGameFrom=(newBoard)=>{

    return newBoard.every((Square)=>Square != null)
  }