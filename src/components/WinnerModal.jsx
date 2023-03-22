import { Square } from "./Square"

export function WinnerModal({winner,resetGame}){
    if (winner === null) return null
    const winnerText = winner === false ? 'Empate' : 'Ganó'
    return (
        <section className="winner">
            <div className="text">
                <h2 className="text-2xl font-bold">
                    {winnerText}
                </h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame} className="butonReset">Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}
