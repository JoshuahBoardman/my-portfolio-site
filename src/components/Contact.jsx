import React from "react";

// react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <div className="p-5 bg-light" style={{ width: "100vw" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <h2 className="h1 mb-4 ">Reach Out</h2>
            <Form
              className="bg-light p-5 rounded shadow-lg "
              style={{ borderLeft: "10px solid #B35F6B" }}
            >
              <Form.Group className="mb-3" controlId="usersName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
