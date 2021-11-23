import React from "react";

// let shipsLeftToPlace = [5, 4, 3, 2, 1];

class ShipsToPlace extends React.Component {
  render() {
    return (
      <ul>
        {this.props.shipsLeftToPlace.map((aShip) => (
          <ol>{aShip}</ol>
        ))}
      </ul>
    );
  }
}

export default ShipsToPlace;