import React, { useReducer } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Selector from "./Selector";
//import DevPanel from "./DevPanel";
import PrintPreview from "./PrintPreview";
import GUESTS from "./GuestList.json";
import ManageGuests from "./ManageGuests";
import Teams from "./TeamData.json";


import reducer from "./Reducer";
//import { propTypes } from "react-bootstrap/esm/Image";

// We want to control the round and team at this level.



const HomePage = (props) => {

  console.log("Props: ", props);

  const initialState = {
    round: "5",
    // team: "Adelaide Spurs",
    team: Teams[props.teamId-1].name,
    selected: [],
    guests: GUESTS.sort((a, b) => a.name > b.name),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { round, team, selected, guests } = state;

  // const teamId = props.teamId || 1;

  //   const count = selected.length;
  //   const gcount = guests.length;

  return (
    <div className="home-page">
      <Container>
        {/* <Row>
          <Col md={3}>
            <Jumbotron>
              <DevPanel
                round={round}
                team={team}
                selected={selected}
                guests={guests}
                dispatch={dispatch}
              />
            </Jumbotron>
          </Col>
        </Row> */}
        <Row>
          <Col md={3} >
            <Jumbotron style={{padding: 4}}>
              <Selector
                round={round}
                team={team}
                guests={guests}
                selected={selected}
                dispatch={dispatch}
              />
            </Jumbotron>
            <Jumbotron>
              <ManageGuests team={team} guests={guests} dispatch={dispatch} />
            </Jumbotron>
          </Col>
          <Col>
            <PrintPreview round={round} team={team} selected={selected} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
