import React, {useState} from 'react'
import Square from './Square'


const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xNext, setXNext] = useState(true)
    const [status, setStatus] = useState('Próximo jogador: X')
    const [done, setDone] = useState(false)
    const [plays, setPlays] = useState(0)


    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

              return squares[a];
            }
          }
          return null;
    }

    const handleClick = (i) => {
        
        if(squares[i]===null && done===false){
            const updateSquares = squares;
            updateSquares[i] = xNext ? 'X' : 'O';
            setSquares(updateSquares)
            const winner = calculateWinner(squares)
            if(winner){
                setStatus('Vencedor: ' + winner)
                setDone(true)
            }
            setXNext(!xNext)
            setPlays(plays+1)
            if(plays===8){
                setStatus('Empate')
                setDone(true)
            }
        }
        
    }

    const renderSquare = (i) => (
        <Square id={i} value={squares[i]} handleClick={handleClick}/>
    )

    

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
      </div>
    )
}

export default Board
