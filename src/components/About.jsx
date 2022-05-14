import React from "react";

// react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// font awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faBootstrap,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

// assets
import myPhoto from "../assets/myPhoto.jpg";

const About = () => {
  return (
    <section id="about" className="bg-dark py-5" style={{ width: "100vw" }}>
      <Container>
        <Row>
          <Col lg={6} className="mb-5">
            <h2 className="text-primary display-3 mb-4">About Me</h2>
            <p className="text-light lead">
            I'm passionate about computer information technology—especially programming and creating innovative software. Initially, I got into programming for developing games; however, after learning to program in C#, I realized that I had a passion for creating code to solve real problems for real-world applications. Since then, I have developed a good understanding of front-end web development.
            </p>
            <p className="text-light lead mb-4">
            Software development is full of captivating challenges; I am confident in my ability to rapidly learn what is needed to get the job done—on target and on time.
            </p>
            <h3 className="fs-3 text-primary mb-4">Skills</h3>
            <div className="d-flex gap-4">
              <FontAwesomeIcon icon={faCss3Alt} className="text-light fs-1" />
              <FontAwesomeIcon icon={faHtml5} className="text-light fs-1" />
              <FontAwesomeIcon icon={faJsSquare} className="text-light fs-1" />
              <FontAwesomeIcon icon={faBootstrap} className="text-light fs-1" />
              <FontAwesomeIcon icon={faReact} className="text-light fs-1" />
            </div>
          </Col>
          <Col
            lg={6}
            className=" d-flex justify-content-center justify-content-lg-end align-items-center"
          >
            <img src={myPhoto} className="img-fluid rounded" alt="Joshuah Boardman" style={{maxWidth: "80%",}} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
