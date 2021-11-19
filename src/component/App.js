import Board from "./Board";
// import "../style/tablet.scss";
import "../style/interface.scss";
let player1 = "Player 1";
let player2 = "Player 2";
let turn = "Ennemy's Turn";

function App() {
    return (
        <div>
            <div className="title">
                {player1} vs {player2}
                <div>BattleSHip</div>
                {turn}
            </div>
            <div className="boardArea">
                <Board />
            </div>
        </div>
    );
}

export default App;
