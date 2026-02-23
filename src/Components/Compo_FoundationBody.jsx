import React from "react";
import { Container, Row, Col, Button, Card, Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FoundationYear = () => {
  const applyNow = useNavigate();
    const startNow = useNavigate();
  return (
    <div className="foundation-wrapper">
      {/* HERO */}
      <section className="foundation-hero d-flex align-items-center text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold">Foundation Year Program</h1>
              <p className="lead mt-3">
                Build your academic confidence, strengthen your knowledge, and
                transition smoothly into your undergraduate degree.
              </p>
              <Button className="primary-btn mt-4" onClick={()=>startNow("/apply")}>
                Start Your Application
              </Button>
            </Col>
            <Col lg={6}>
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                alt="students"
                className="img-fluid rounded-4 shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mb-4">
            <Col lg={8}>
              <h2 className="section-heading">Program Overview</h2>
              <p className="text-muted mt-3">
                The Foundation Year is designed for students who require
                additional academic preparation before entering a full
                undergraduate degree. This intensive one-year program enhances
                subject knowledge, academic writing, research methods, and
                critical thinking skills.
              </p>
              <p className="text-muted">
                Students successfully completing the program are guaranteed
                progression into Year 1 of their chosen degree pathway.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <h2 className="section-heading text-center mb-5">Core Modules</h2>
          <Row>
            {[
              "Academic Writing & Research",
              "Mathematics & Quantitative Skills",
              "Business & Economics Basics",
              "Computer Fundamentals",
              "English for Academic Purposes",
              "Critical Thinking & Analysis",
            ].map((item, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <Card className="module-card border-0 shadow-sm h-100">
                  <Card.Body>
                    <h5 className="fw-bold">{item}</h5>
                    <p className="text-muted mt-3">
                      Comprehensive training designed to prepare you for
                      university-level academic challenges.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="section-heading">Why Choose This Program?</h2>
              <ul className="mt-4 custom-list">
                <li>Small class sizes for personal attention</li>
                <li>Experienced academic mentors</li>
                <li>Modern campus facilities</li>
                <li>Direct progression to undergraduate study</li>
              </ul>
            </Col>
            <Col lg={6}>
              <img
                src="https://www.simplilearn.com.cach3.com/ice9/free_resources_article_thumb/c_program_for_factorial.jpg"
                alt="campus"
                className="img-fluid rounded-4 shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="stats-section text-white py-5">
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <h2 className="fw-bold">95%</h2>
              <p>Progression Rate</p>
            </Col>
            <Col md={4}>
              <h2 className="fw-bold">1 Year</h2>
              <p>Program Duration</p>
            </Col>
            <Col md={4}>
              <h2 className="fw-bold">50+</h2>
              <p>Supported Degree Pathways</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-5">
        <Container>
          <h2 className="section-heading text-center mb-4">
            Frequently Asked Questions
          </h2>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Who should apply for Foundation Year?
              </Accordion.Header>
              <Accordion.Body>
                Students who need academic preparation before entering
                undergraduate studies.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Is progression guaranteed?</Accordion.Header>
              <Accordion.Body>
                Yes, successful completion ensures entry into Year 1.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Can international students apply?
              </Accordion.Header>
              <Accordion.Body>
                Yes, international students are welcome.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <section className="py-5 text-center bg-light">
        <Container>
          <h2 className="section-heading mb-3">
            Take the First Step Toward Your Degree
          </h2>
          <Button className="primary-btn px-5 py-3" onClick={()=>applyNow("/apply")} >Apply Now</Button>
        </Container>
      </section>
    </div>
  );
};

export default FoundationYear;
