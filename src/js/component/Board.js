import React from "react";
import Square from "./Square";

const Board =({ squares, onclick}) => (
    <div className="board">
        {squares.map((square, i)=>(
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
);
 export default Board;