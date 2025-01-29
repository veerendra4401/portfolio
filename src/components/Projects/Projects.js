import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pglife from "../../Assets/Projects/pglife.png";
import muisc from "../../Assets/Projects/music.png";
import bill from "../../Assets/Projects/bill.png";
import uni from "../../Assets/Projects/uni.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pglife}
              isBlog={false}
              title="PG-Life Web Application"
              description="Welcome to the PG Life project! This Project contains a web application designed to help users find and explore Paying Guest accommodations in major cities like Delhi, Mumbai, Bangalore, and Hyderabad."
              ghLink="https://github.com/veerendra4401/PG-Web-Application.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muisc}
              isBlog={false}
              title="Music Player"
              description="The Music Player project is a web application built using React that offers users an interface to play, pause, and manage their music collection. It has a responsive design making it effortless for users to enjoy their songs. It has a separate data file using which the users can add their own songs to the list and can listen to their personalized songs playlist."
              ghLink="https://github.com/veerendra4401/Music-Player.git"
              Demo="https://music-player-212.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bill}
              isBlog={false}
              title="Bill/Invoice Generator"
              description="The Bill/Invoice Generator is a sleek and functional web application designed to simplify billing tasks. This project allows users to effortlessly add items, calculate totals, and generate professional invoices in PDF format."
              ghLink="https://github.com/veerendra4401/Invoice-Generator.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uni}
              isBlog={false}
              title="Uni-Chat"
              description="This project is a full-stack chat application designed for seamless real-time communication. The frontend is built with React.js, providing a responsive and intuitive user interface, while the backend uses Node.js and Express.js for efficient API handling and Socket.IO for real-time message exchange. MongoDB serves as the database, ensuring secure and scalable data storage."
              ghLink="https://github.com/veerendra4401/Uni-chat.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
