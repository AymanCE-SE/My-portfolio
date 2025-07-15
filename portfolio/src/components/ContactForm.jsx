import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    
    e.target.reset();
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="contact-title mb-4">Contact Me</h2>
        <Form onSubmit={handleSubmit} className="contact-form p-4 rounded shadow">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" required placeholder="Your Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" required placeholder="Your Email" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject" required placeholder="Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={4} required placeholder="Your Message" />
          </Form.Group>
          <Button variant="primary" type="submit" className="contact-btn">
            Send
          </Button>
          {showSuccess && (
            <Alert variant="success" className="mt-3">
              Your message has been sent successfully...Thank you!
            </Alert>
          )}
        </Form>
      </Container>
    </section>
    </>
  );
}