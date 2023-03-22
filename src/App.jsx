import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"

import { Turns,combosWinner } from "./constans"

import { checkWinnerFrom,checkEndGameFrom } from "./board"
import { WinnerModal } from "./components/WinnerModal"

function App() {
  const [board,setBoard] = useState( ()=>{
    const boardFromStorage=window.localStorage.getItem('board')
    if(boardFromStorage)return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
    
  })
    

  const[turn,setTurn]=useState(()=>{
    const turnFromStorage=window.localStorage.getItem('turn')
    return turnFromStorage ?? Turns.X
  })
    
    

  const [winner,setWinner]=useState(null)
   

  const resetGame =()=>{
    setBoard(Array(9).fill(null))
    setTurn(Turns.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }


  const updateBoard=(index)=>{
    //no sobre escribir si ya tiene algo en la posicion[index]
    if(board[index]||winner)return
    //actualizar tablero
    const newBoard = [...board]
    newBoard[index]=turn
    setBoard(newBoard)
    //cambiar turno
    const newTurn = turn === Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)
    //guardar partida
    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn', (newTurn))

    //revisar ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
      //checkear si empate
    }else if(checkEndGameFrom(newBoard)){
      setWinner(false)//empate
    }

  }
  return (
    <main className=" w-fit my-10 mx-auto text-center grid place-items-center " >
      <h1 className="mb-4 text-3xl font-bold text-white">Tic tac toe</h1>
      <button onClick={resetGame} className="butonReset w-44 text-white  mb-4">Reset del juego</button>
      <section className="grid grid-cols-3 gap-3 text-white">
        {
          board.map((_,index)=>{
            return(
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="flex justify-center gap-4 my-4 mx-auto relative  text-white">
        <Square isSelected={turn === Turns.X} >{Turns.X}</Square>
        <Square isSelected={turn === Turns.O} >{Turns.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} ></WinnerModal>
    </main>
    
  )
}
export default App