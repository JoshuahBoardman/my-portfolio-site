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
    <section
      id="portfolio"
      className="bg-light pb-5"
      style={{ width: "100vw" }}
    >
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
                "An app that provides users anime recommendations based on genre."
              }
              siteLink={"https://deluxe-sorbet-7d57f2.netlify.app"}
              repoLink={"https://github.com/JoshuahBoardman/Anime-Insight-App"}
              altText={"Anime Insight"}
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
                "An app that allows users to create collections of flashcards to study off and quiz themselves."
              }
              siteLink={"https://beamish-hotteok-3d5c44.netlify.app"}
              repoLink={"https://github.com/JoshuahBoardman/flash-card-app"}
              altText={"Flashcard App"}
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
                "An app that gives users the chance to test their typing skills against the clock and find out their WPM."
              }
              siteLink={"https://steady-bubblegum-d42899.netlify.app"}
              repoLink={"https://github.com/JoshuahBoardman/type-regatta"}
              altText={"Type Regattat"}
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
              text={"An app that helps users to build color pallets."}
              siteLink={"https://classy-druid-a46b61.netlify.app"}
              repoLink={"https://github.com/JoshuahBoardman/color-picker-app"}
              altText={"Color Picker"}
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
              image={wordleClone}
              title={"Wordle Clone"}
              text={
                "A clone of the popular Wordle app, you have five tries to guess a five-letter word."
              }
              siteLink={"https://euphonious-salamander-948d54.netlify.app"}
              repoLink={"https://github.com/JoshuahBoardman/My-Wordle-Clone"}
              altText={"Wordle Clone"}
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
                "My take on the 70s game Space Invaders; destroy all the invaders before they reach the player. "
              }
              siteLink={"https://leafy-gingersnap-f92bd9.netlify.app"}
              repoLink={"https://github.com/JoshuahBoardman/My-Space-Invaders"}
              altText={"Crypto Invaders"}
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
                "My take on the 90s game Snake; direct the snake to eat as much food as possible without running into the walls or snake's body."
              }
              siteLink={"https://scintillating-sprite-b0bdf3.netlify.app"}
              repoLink={"https://github.com/JoshuahBoardman/My-Snake-Game"}
              altText={"Snake Clone"}
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
                "An app that randomly generates a Pokemon team (for any pokemon game in the series) for users to use in the game."
              }
              siteLink={"https://dynamic-praline-d519b4.netlify.app"}
              repoLink={
                "https://github.com/JoshuahBoardman/Pokemon-Team-Randomizer"
              }
              altText={"Pokemon Team Randomizer"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
