import Cell from "./Cell.jsx";
import {useEffect} from "react";


const Board = ({className, boardMatrix, setBoardMatrix, activePlayer, setActivePlayer}) => {

    const handlePlayerTouch = (x, y) => {
        if (boardMatrix[x][y] !== "") return;
        handleBoardMatrix(x, y, activePlayer);
        setActivePlayer(activePlayer === "x" ? "o" : "x");
    }

    const clearBoard = () => {
        setBoardMatrix([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]);
    }

    const handleBoardMatrix = (x, y, value) => {
        setBoardMatrix((prevMatrix) =>
            prevMatrix.map((row, rowIndex) =>
                rowIndex === x
                    ? row.map((cell, colIndex) => (colIndex === y ? value : cell))
                    : row
            )
        );
    };

    useEffect(() => {
        const winner = checkWinner(boardMatrix);
        if (winner) {
            const userConfirmed = window.confirm(`Player ${winner} wins! TRY AGAIN?`);

            if (userConfirmed) clearBoard();
        }
    },[activePlayer])

    const checkWinner = (boardMatrix) => {
        for (let i = 0; i < 3; i++) {
            if (boardMatrix[i][0] === boardMatrix[i][1] &&
                boardMatrix[i][1] === boardMatrix[i][2] &&
                boardMatrix[i][0] !== '') {
                return boardMatrix[i][0];
            }
        }
        for (let j = 0; j < 3; j++) {
            if (boardMatrix[0][j] === boardMatrix[1][j] &&
                boardMatrix[1][j] === boardMatrix[2][j] &&
                boardMatrix[0][j] !== '') {
                return boardMatrix[0][j];
            }
        }

        if (boardMatrix[0][0] === boardMatrix[1][1] &&
            boardMatrix[1][1] === boardMatrix[2][2] &&
            boardMatrix[0][0] !== '') {
            return boardMatrix[0][0];
        }

        if (boardMatrix[0][2] === boardMatrix[1][1] &&
            boardMatrix[1][1] === boardMatrix[2][0] &&
            boardMatrix[0][2] !== '') {
            return boardMatrix[0][2];
        }

        return null;
    };


    return (
        <div className={"w-full h-full " + className}>
            <div className={"gap-2 flex w-full h-1/3"}>
                <Cell onClick={() => handlePlayerTouch(0, 0)}
                      value={boardMatrix[0][0]} />
                <Cell onClick={() => handlePlayerTouch(0, 1)}
                      value={boardMatrix[0][1]} />
                <Cell onClick={() => handlePlayerTouch(0, 2)}
                      value={boardMatrix[0][2]} />
            </div>
            <div className={"gap-2  flex w-full h-1/3 mt-2"}>
                <Cell onClick={() => handlePlayerTouch(1, 0)}
                      value={boardMatrix[1][0]} />
                <Cell onClick={() => handlePlayerTouch(1, 1)}
                      value={boardMatrix[1][1]} />
                <Cell onClick={() => handlePlayerTouch(1, 2)}
                      value={boardMatrix[1][2]} />
            </div>
            <div className={"gap-2  flex w-full h-1/3 mt-2"}>
                <Cell onClick={() => handlePlayerTouch(2, 0)}
                      value={boardMatrix[2][0]} />
                <Cell onClick={() => handlePlayerTouch(2, 1)}
                      value={boardMatrix[2][1]} />
                <Cell onClick={() => handlePlayerTouch(2, 2)}
                      value={boardMatrix[2][2]} />
            </div>
        </div>
    )
}

export default Board;