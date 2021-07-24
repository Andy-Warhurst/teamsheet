import React, { useState } from "react";
import Teams from "./TeamData.json";
import { navigate} from "@reach/router";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";





const Login= (props) => {

  const [theTeamId, setTeamId] = useState(1);

const handleSubmit = (event) => {

  // const theTeam = target.value;

  const goto = '/team/'+ theTeamId;

  console.log('Redirect to',goto);

  navigate (goto);

};

  return (
      <div>
          <Jumbotron>
              <h3>SAMSL Team Manager - Sign In</h3>
              <Form onSubmit={handleSubmit}>
                  <Form.Group as={Row} controlId="formHorizontalTeam" >
                      <Form.Label column sm={2}>
                          Team

                      </Form.Label>
                      <Col sm={3}>

                          <Form.Control
                              as="select"
                              onChange={(e) =>setTeamId(e.target.value)}

                              custom>
                              {Teams.map((team) => (
                                  <option key={team.id} value={team.id}>{team.name}</option>
                              ))}
                          </Form.Control>
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                      <Form.Label column sm={2}>
                          Password
                      </Form.Label>
                      <Col sm={3}>
                          <Form.Control type="password" placeholder="Password" />
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                      <Col sm={{ span: 10, offset: 2 }}>
                          <Button
                              type="submit"
                          >Sign in</Button>
                      </Col>
                  </Form.Group>
              </Form>
              <p><i>Version 1.0</i></p>
          </Jumbotron>
      </div>
  );
};

export default Login;
