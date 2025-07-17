import React, { useRef, useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);

      emailjs
      .sendForm('service_hogokgi', 'template_dfccqba', form.current, {
        publicKey: 'xcBrb6PKfgy1FDOgX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
              e.target.reset();
              setShowSuccess(true);
              setTimeout(() => setShowSuccess(false), 3000);
        },
        (error) => {
          setShowError(true);
          setTimeout(()=> setShowError(false),4000)
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="contact-title mb-4">Contact Me</h2>
        <Form ref={form} onSubmit={handleSubmit} className="contact-form p-4 rounded shadow">
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
            <Form.Control type="text" name="title" required placeholder="Subject" />
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
          {showError && (
            <Alert variant="danger" className="mt-3">
              Sorry, something went wrong. Please try again later.
            </Alert>
          )}
        </Form>
      </Container>
    </section>
    </>
  );
}