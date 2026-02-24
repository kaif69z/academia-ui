import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ApplyForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const dob = form.dob.value;
    const course = form.course.value;
    const qualification = form.qualification.value.trim();

    let isValid = true;

    // Clear previous errors
    const errorElements = form.querySelectorAll(".error-msg");
    errorElements.forEach((el) => (el.innerText = ""));

    // Validation

    if (!firstName) {
      form.querySelector("#firstNameError").innerText =
        "First name is required";
      isValid = false;
    }

    if (!lastName) {
      form.querySelector("#lastNameError").innerText =
        "Last name is required";
      isValid = false;
    }

    if (!email) {
      form.querySelector("#emailError").innerText =
        "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      form.querySelector("#emailError").innerText =
        "Invalid email format";
      isValid = false;
    }

    if (!phone) {
      form.querySelector("#phoneError").innerText =
        "Phone number is required";
      isValid = false;
    }

    if (!dob) {
      form.querySelector("#dobError").innerText =
        "Date of birth is required";
      isValid = false;
    }

    if (!course) {
      form.querySelector("#courseError").innerText =
        "Please select a course";
      isValid = false;
    }

    if (!qualification) {
      form.querySelector("#qualificationError").innerText =
        "Qualification is required";
      isValid = false;
    }

    if (isValid) {
      alert("Application Submitted Successfully!");
      form.reset();
    }
  };

  return (
    <Container className="my-5" id="applyForm">
      <Row className="justify-content-center">
        <Col md={9} lg={8}>
          <Card className="apply-card shadow-lg border-0">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4 apply-title">
                University Application Form
              </h2>

              <Form onSubmit={handleSubmit} noValidate>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" name="firstName" />
                      <small id="firstNameError" className="text-danger error-msg"></small>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" name="lastName" />
                      <small id="lastNameError" className="text-danger error-msg"></small>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" />
                  <small id="emailError" className="text-danger error-msg"></small>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" name="phone" />
                  <small id="phoneError" className="text-danger error-msg"></small>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" name="dob" />
                  <small id="dobError" className="text-danger error-msg"></small>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Course</Form.Label>
                  <Form.Select name="course">
                    <option value="">Select Course</option>
                    <option>Bachelor of Science</option>
                    <option>Bachelor of Arts</option>
                    <option>Computer Science</option>
                    <option>Business Administration</option>
                  </Form.Select>
                  <small id="courseError" className="text-danger error-msg"></small>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Previous Qualification</Form.Label>
                  <Form.Control as="textarea" rows={3} name="qualification" />
                  <small id="qualificationError" className="text-danger error-msg"></small>
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button
                    type="button"
                    className="secondary-btn"
                    onClick={() => navigate("/")}
                  >
                    ⬅️ Back
                  </Button>

                  <Button type="submit" className="apply-btn">
                    Submit Application
                  </Button>
                </div>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplyForm;
