import Board from "./Board";
import ShipsToPlace from "./ShipsToPlace";
import Ship4 from "./Ship4";
import "../style/interface.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

let player1 = "Player 1";
let player2 = "Player 2";
let turn = "Ennemy's Turn";
function App() {
  let shipsLeftToPlace = [5,<Ship4 />, 3, 2, 1];
  return (
    <>
      {/* <div className="container"> */}
      <Container fluid>
        <div className="center_child">
          <div className="title_area">
            <div className="title">
              {player1} vs {player2}
              <div>BattleSHip</div>
              {turn}
            </div>
          </div>
        </div>
        <Row className="center_child ">
          <Col xs={3}>
            <div className="fleet">
              <div>Title</div>
              <div>
                <ShipsToPlace shipsLeftToPlace={shipsLeftToPlace} />
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div>
              <div>
                <div className="center_child">
                  <Board />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="kills">Kill List</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
