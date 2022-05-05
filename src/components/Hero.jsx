import React from "react";

// react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// font awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

// assets
import background from "../assets/background.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background}
        )`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="d-flex align-items-center"
    >
      <Container className>
        <Row className="justify-content-end">
          <Col md={6}>
            <h1 className="display-1 fw-bold">
              Creating <span className="text-danger">fluid</span> user experiences
            </h1>
            <p className="fs-4 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button variant="danger" size="lg" className="mt-4">View portfolio</Button>
            <div className="mt-4 d-flex gap-2">
              <FontAwesomeIcon icon={faLinkedin} className="fs-1" />
              <FontAwesomeIcon icon={faGithubSquare} className="fs-1" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
