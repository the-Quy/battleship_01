import React, { useState } from "react";
import "../style/board.scss";

import Tile from "./Tile";

const horizontalAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const verticalAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

// function Tile({value, click}){
//   return (<div className="tile" onClick={click}>{value}</div>)
// }

export default function Board() {
  const [allValues, setValues] = useState(Array(100).fill(null));

  const nextSymbole = "X";

  function onClickTile(positionXX, positionYY) {
    let maCopie = allValues.slice();
    console.log(maCopie);
    maCopie[(positionXX, positionYY)] = nextSymbole;
    setValues(maCopie);
  }

  function fabriqueTile(positionXX, positionYY) {
    return (
      <Tile
        value={allValues[(positionXX, positionYY)]}
        click={() => onClickTile(positionXX, positionYY)}
      />
    );
  }

  let board = []; // board creation

  for (let yy = 0; yy < verticalAxis.length; yy++) {
    for (let xx = 0; xx < horizontalAxis.length; xx++) {
      board.push(
        <div className="">
          {/* {horizontalAxis[xx]}
          {verticalAxis[yy]} */}
          {fabriqueTile([xx], [yy])}
        </div>
      );
    }
  }
  return <div className="board">{board}</div>;
}
