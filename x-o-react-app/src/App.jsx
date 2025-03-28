import { useState } from 'react'
import './App.css'
import PlayerCard from "./components/PlayerCard.jsx";
import Board from "./components/Board.jsx";

function App() {

    const [player1, setPlayer1] = useState({
        "name": undefined,
        "mark": "x"
    })

    const [player2, setPlayer2] = useState({
        "name": undefined,
        "mark": "o"
    });

    const handlePlayerChange = (e, player) => {
        if (player === 1) {
            setPlayer1((prevPlayer) => {
                return {
                    ...prevPlayer,
                    "name": e.target.value
                }
            })
        } else {
            setPlayer2((prevPlayer) => {
                return {
                    ...prevPlayer,
                    "name": e.target.value
                }
            })
        }
    }


    const [boardMatrix, setBoardMatrix] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])

    const [activePlayer, setActivePlayer] = useState(player1.mark);


  return (
    <div className={"bg-amber-400 w-full h-full flex justify-center items-center"}>
        <div id={"x-o-container"} className={"w-1/2 h-2/3  bg-black rounded-2xl"}>
            <div id={"players"} className={"flex justify-around mt-5"}>
                <PlayerCard name={player1.name} mark={player1.mark} onChange={(e) => handlePlayerChange(e, 1)}/>
                <PlayerCard name={player2.name} mark={player2.mark} onChange={(e) => handlePlayerChange(e, 2)}/>
            </div>
            <div className={"w-2/3 h-2/3 mx-auto mt-5"}>
                <Board boardMatrix={boardMatrix}
                       setBoardMatrix={setBoardMatrix}
                       activePlayer={activePlayer}
                       setActivePlayer={setActivePlayer}/>
            </div>
        </div>
    </div>
  )
}

export default App
