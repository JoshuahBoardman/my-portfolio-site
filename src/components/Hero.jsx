import React from "react";

// components
import Header from "./Header";

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
    <section
      id="home"
      style={{
        backgroundImage: `url(${background}
        )`,
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <Container >
        <Row
          className="justify-content-end align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Col md={6} className="d-flex flex-column text-center text-md-start align-items-center align-items-md-start">
            <h1 className="display-1 fw-bold">
              Creating <span className="text-primary">fluid</span> user
              experiences
            </h1>
            <p className="fs-3 lead mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button variant="primary" size="lg" className="mt-4 text-light">
              View Resume
            </Button>
            <div className="mt-4 d-flex gap-2 ">
              <a href="https://www.linkedin.com/in/joshuahboardman/">
                {" "}
                <FontAwesomeIcon
                  role="button"
                  icon={faLinkedin}
                  className="fs-1
                  text-dark"
                />
              </a>

              <a href="https://github.com/JoshuahBoardman">
                <FontAwesomeIcon
                  role="button"
                  icon={faGithubSquare}
                  className="fs-1 text-dark"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
