import React from "react";

// react-bootstrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PortfolioCard = ({ image, title, text, siteLink, repoLink }) => {
  return (
    <Card className="shadow-sm rounded" style={{ width: "20em" }}>
      {/* TODO: Give the cards a tint of the hightlight color */}
      <Card.Img variant=" " src={image} className=" rounded-top" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Body className="d-flex gap-2">
        <Button
          href={siteLink}
          varian="primary"
          className="text-light d-flex align-items-center"
        >
          View App
        </Button>
        <Button
          href={repoLink}
          variant="outline-primary"
          className="d-flex align-items-center"
        >
          View Repo
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PortfolioCard;
