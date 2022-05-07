 import React from 'react';

 // react-bootstrap components
 import Card from 'react-bootstrap/Card';
 import Button from 'react-bootstrap/Button';

 const PortfolioCard = ({ image, title, text, siteLink, repoLink}) => {
   return (
    <Card className="shadow-sm" style={{ width: '20em' }}>
    <Card.Img variant=" " src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
    </Card.Body>
    <Card.Body className="d-flex gap-2">
    <Button varian="primary" className="text-light"> View App</Button>
    <Button variant="outline-primary"> View Repo</Button>
    </Card.Body>
  </Card>
   )
 }
 
 export default PortfolioCard