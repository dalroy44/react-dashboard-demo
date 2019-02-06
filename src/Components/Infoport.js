import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import FusionC from "./FusionChart";

const infoport = props => {
  return (
    <Card style={{ width: "460px", margin: "3px" }}>
      <Container>
        <Row>
          <Col>{props.title}</Col>
        </Row>
        <Card.Body>
          <FusionC type={props.type} />
        </Card.Body>
      </Container>
    </Card>
  );
};
export default infoport;
