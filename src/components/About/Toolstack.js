import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiEclipseide,
  SiPowerbi,
  SiSpringboot
} from "react-icons/si";

function Toolstack(){
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
    </Row>
  );
}

export default Toolstack;
