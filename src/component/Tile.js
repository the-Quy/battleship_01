import "../style/tile.scss";

export default function Tile({ value, click }) {
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
