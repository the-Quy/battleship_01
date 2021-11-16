import React, { useState } from "react";
import "../style/board.scss";
import Tile from "./Tile";

const horizontalAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const verticalAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];


export default function Board() {
  const [allValues, setValues] = useState(Array(100).fill(null));

  const nextSymbole = "X";

  function onClickTile(index) {
    let maCopie = allValues.slice();
    console.log(maCopie);
    maCopie[(index)] = nextSymbole;
    setValues(maCopie);
  }

  function fabriqueTile(index) {
    return (
      <Tile
        value={allValues[(index)]}
        click={() => onClickTile(index)}
      />
    );
  }

  let board = []; // board creation

  for (let ii = 0; ii < verticalAxis.length * horizontalAxis.length; ii++) {
    board.push(<div className="">{fabriqueTile([ii])}</div>);
  }
  return <div className="board">{board}</div>;
}
