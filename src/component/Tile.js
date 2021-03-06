import "../style/tile.scss";
import { useDrop } from 'react-dnd'
import React from 'react';

export default function Tile({ value, click,position,onDrop, color, stateCouleur }) {
  
  return (
    <>
      <div className="tile__container">
        <div className="tile" onClick={click}>
          {value}
        </div>
      </div>
    </>
  );
}
