import React from "react";
import "../style/board.scss";

const horizontalAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const verticalAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

export default function Board() {
  let board = [];

  for (let yy = 0; yy < verticalAxis.length; yy++) {
    for (let xx = 0; xx < horizontalAxis.length; xx++) {
      board.push(
        <div className="tile">
          {horizontalAxis[xx]}
          {verticalAxis[yy]}
        </div>
      );
    }
  }
  return <div className="board">{board}</div>;
}
