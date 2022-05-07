import React from "react";

// react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// assets
import animeInsight from "../assets/animeInsight.PNG";

// components
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  // TODO: May move the Cols into the PortfolioCard component
  return (
    <div className="bg-light" style={{ width: "100vw" }}>
      <div className="d-flex justify-content-center bg-primary py-5 mb-4" style={{ width: "100vw" }}>
        <h2 className="text-light h1">Portfolio Projects</h2>
      </div>
      <Container className="">
        <Row className="mb-4">
          <Col className="d-flex justify-content-center"></Col>
        </Row>
        <Row className="mb-3">
          <Col xxl={3} lg={4} md={6} className="d-flex justify-content-center">
            <div style={{ width: "20em" }}>
              <h3 className="fs-3 lead">React</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={animeInsight}
              title={"Anime Insight"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={animeInsight}
              title={"Anime Insight"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={animeInsight}
              title={"Anime Insight"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={animeInsight}
              title={"Anime Insight"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xxl={3} lg={4} md={6} className="d-flex justify-content-center">
            <div style={{ width: "20em" }}>
              <h3 className="fs-3 lead">Vanilla JS</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={animeInsight}
              title={"Anime Insight"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={animeInsight}
              title={"Anime Insight"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={animeInsight}
              title={"Anime Insight"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={animeInsight}
              title={"Anime Insight"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;