import React, { useState } from "react";
import "../style/board.scss";
import Tile from "./Tile";
import Board from "./Board";

const size = 10;

export default function Game() {
  const [allValues, setValues] = useState(Array(100).fill(null)); //-----> tic tac toe
  const [stateCouleurs, setCouleurs] = useState(Array(size * size).fill(null)); //-----> dragdrop
  const DropItem = (position, item, stateCouleur) => {
    let newState = stateCouleur.slice(0);
    newState[position] = item.color;
    console.log(newState);
    setCouleurs(newState);
  }; //-----> dragdrop

  const nextSymbole = "X"; //-----> tic tac toe

  function onClickTile(index) {
    let maCopie = allValues.slice();
    console.log(maCopie);
    maCopie[index] = nextSymbole;
    setValues(maCopie);
  } //-----> tic tac toe

  function fabriqueTile(index) {
    return (
      <Tile
        value={allValues[index]} //-----> tic tac toe
        click={() => onClickTile(index)} //-----> tic tac toe
        id={index} //-----> dragdrop
        position={index}
        onDrop={DropItem}
        color={stateCouleurs[index]}
        stateCouleur={stateCouleurs} //-----> dragdrop
      />
    );
  }
  let arraySquare = [];
  for (let y = 0; y < size; y++) {
    let ligneSquare = [];
    for (let x = 0; x < size; x++) {
      let id = x + y * size;
      ligneSquare.push(<div className="oneTest">{fabriqueTile([id])}</div>);
    }

    const row = <div>{ligneSquare}</div>;
    arraySquare.push(row);
  }
  return (
    <div>
      <div className="background-board">
        <div className="board">{<Board squares={arraySquare} />}</div>
      </div>
    </div>
  );
}
