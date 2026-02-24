import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function ContactUsPage() {
  return (
    <div id="contactFullPage">

      {/* HERO SECTION */}
      <Container fluid id="contactHeroSection">
        <Container>
          <h1 id="contactHeroHeading">Contact Us</h1>
          <p id="contactHeroSubtext">
            Connect with our admissions team, academic advisors, or administrative office.
            We are here to assist you at every step.
          </p>
        </Container>
      </Container>

    
      <Container id="contactMainArea">
        <Row>

          {/* LEFT SIDE - CONTACT INFO */}
          <Col lg={4} md={5} xs={12}>
            <Card id="contactInfoCard">
              <Card.Body>

                <h4 id="contactInfoTitle">University Contact Details</h4>

                <div className="contactItem">
                  <span>📍</span>
                  <p>
                    28, Bunyodkor Ave. Chilanzar District<br />
                    Uzbekistan, Tashkent 100185
                  </p>
                </div>

                <div className="contactItem">
                  <span>📞</span>
                  <p>+99871 xx xx 00</p>
                </div>

                <div className="contactItem">
                  <span>✉️</span>
                  <p>inbox@mdis.uz</p>
                </div>

              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT SIDE - FORM */}
          <Col lg={8} md={7} xs={12}>
            <Card id="contactFormCard">
              <Card.Body>
                <h4 id="contactFormTitle">Send an Inquiry</h4>

                <Form>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="First Name" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Last Name" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                  </Form.Group>

                  <Button id="contactSubmitButton" variant="dark">
                    Submit Message
                  </Button>

                </Form>

              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>



      {/* FAQ SECTION */}
      <Container id="contactFAQSection">
        <h3 id="faqHeading">Frequently Asked Questions</h3>

        <Row>
          <Col md={6}>
            <div className="faqBox">
              <h6>How long does admission processing take?</h6>
              <p>Usually 5-7 working days after document submission.</p>
            </div>
          </Col>

          <Col md={6}>
            <div className="faqBox">
              <h6>Can international students apply?</h6>
              <p>Yes, we welcome students from all over the world.</p>
            </div>
          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default ContactUsPage;