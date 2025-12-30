import React, { useRef, useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import '../styles/ContactForm.css';

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);
    setIsLoading(true);

    emailjs
      .sendForm('service_hogokgi', 'template_dfccqba', form.current, {
        publicKey: 'xcBrb6PKfgy1FDOgX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          setShowSuccess(true);
          setIsLoading(false);
          setTimeout(() => setShowSuccess(false), 3000);
        },
        (error) => {
          setShowError(true);
          setIsLoading(false);
          setTimeout(()=> setShowError(false),4000)
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <section id="contact" className="contact-section">
      <Container>
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">Have a question or want to collaborate? Let me know!</p>
        </div>

        <Row className="contact-wrapper">
          {/* Contact Info */}
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="contact-info">
              <h3 className="contact-info-title">Let's Connect</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <a href="mailto:contact@ayman.samir1095@gmail.com">send email</a>
                </div>
              </div>

                  <div className="info-item">
                  <div className="info-icon">
                    <FaWhatsapp />
                  </div>
                  <div className="info-content">
                    <h4>WhatsApp</h4>
                    <a href="https://wa.me/201159090880" target="_blank" rel="noopener noreferrer">send WhatsApp message</a>
                  </div>
                  </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  <a href="https://github.com/AymanCE-SE" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <Form ref={form} onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" required placeholder="Enter your name" className="form-input" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="Enter your email" className="form-input" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="title" required placeholder="What is this about?" className="form-input" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={5} required placeholder="Tell me more..." className="form-input" />
              </Form.Group>
              <Button 
                variant="primary" 
                type="submit" 
                className="contact-btn-submit"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
              {showSuccess && (
                <Alert variant="success" className="mt-3 alert-custom">
                  ✓ Your message has been sent successfully! I'll get back to you soon.
                </Alert>
              )}
              {showError && (
                <Alert variant="danger" className="mt-3 alert-custom">
                  ✗ Something went wrong. Please try again later.
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}