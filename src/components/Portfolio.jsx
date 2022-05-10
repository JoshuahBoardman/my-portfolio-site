import React from "react";

// react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// assets
import animeInsight from "../assets/animeInsight.PNG";
import flashCard from "../assets/flashCard.PNG";
import typeRegatta from "../assets/typeRegatta.PNG";
import colorPicker from "../assets/colorPicker.PNG";
import wordleClone from "../assets/wordleClone.PNG";
import cryptoInvaders from "../assets/cryptoInvaders.PNG";
import snakeClone from "../assets/snakeClone.PNG";
import pokemonRandomizer from "../assets/pokemonRandomizer.PNG";

// components
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  // TODO: May move the Cols into the PortfolioCard component
  return (
    <div className="bg-light pb-5" style={{ width: "100vw" }}>
      {/* TODO: Maybe make this a curvy box instead of being straight across */}
      <div
        className="d-flex justify-content-center bg-primary py-5 mb-4"
        style={{ width: "100vw" }}
      >
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
              repoLink={"https://github.com/JoshuahBoardman/Anime-Insight-App"}
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={flashCard}
              title={"Flashcard App"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
              repoLink={"https://github.com/JoshuahBoardman/flash-card-app"}
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={typeRegatta}
              title={"Type Regattat"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
              repoLink={"https://github.com/JoshuahBoardman/type-regatta"}
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={colorPicker}
              title={"Color Picker"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
              repoLink={"https://github.com/JoshuahBoardman/color-picker-app"}
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
              image={wordleClone }
              title={"Wordle Clone"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
              repoLink={"https://github.com/JoshuahBoardman/My-Wordle-Clone"}
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={cryptoInvaders}
              title={"Crypto Invaders"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
              repoLink={"https://github.com/JoshuahBoardman/My-Space-Invaders"}
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={snakeClone}
              title={"Snake Clone"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
              repoLink={"https://github.com/JoshuahBoardman/My-Snake-Game"}
            />
          </Col>
          <Col
            xxl={3}
            lg={4}
            md={6}
            className="mb-5 d-flex justify-content-center"
          >
            <PortfolioCard
              image={pokemonRandomizer}
              title={"Pokemon Team Randomizer"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas dui purus, vitae tincidunt tellus commodo sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempus turpis, nec pellentesque mi."
              }
              repoLink={"https://github.com/JoshuahBoardman/Pokemon-Team-Randomizer"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
