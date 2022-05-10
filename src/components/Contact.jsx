import React from "react";
import emailjs from "@emailjs/browser";

// react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_u86wcwn", "template_81xtb2o", e.target, "Thw5mFEamw7Eln7mq").then((result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="p-5 bg-light" style={{ width: "100vw" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <h2 className="h1 mb-4 ">Reach Out</h2>
            <Form
              onSubmit={sendEmail}
              className="bg-light p-5 rounded shadow-lg "
              style={{ borderLeft: "10px solid #B35F6B" }}
            >
              <Form.Group className="mb-3" controlId="usersName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
              </Form.Group>

              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" />
              </Form.Group>
              <Button variant="primary" type="submit" className="text-light">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
