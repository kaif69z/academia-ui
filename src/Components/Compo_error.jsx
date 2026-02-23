
import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ServiceUnavailable() {
  const navigate = useNavigate();

  return (
    <div id="serviceUnavailablePage">

      <Container id="errorContainer">
        <h1 id="errorCode">503</h1>

        <h2 id="errorTitle">Service Currently Unavailable</h2>

        <p id="errorMessage">
          The service you are trying to access is not available at the moment.
          We are working to make it accessible as soon as possible.
          Please check back later.
        </p>

        <div id="errorButtonGroup">


          <Button
            variant="outline-dark"
            id="homeBtn"
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>
        </div>
      </Container>

    </div>
  );
}

export default ServiceUnavailable;