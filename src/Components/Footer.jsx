import { Container, Row, Col, Form, Button, InputGroup, Image, OverlayTrigger, Tooltip  } from "react-bootstrap";
import Footerlogo from "../assets/images/footer-logo 1 (1).png";
import Footermap from "../assets/images/footermap_1 1.png";
import Social1 from "../assets/images/Vector-1.svg";
import Social2 from "../assets/images/Vector-2.svg";
import Social3 from "../assets/images/Vector-3.svg";
import Social4 from "../assets/images/Vector.svg";

export default function Footer() {
  return (
    <footer className=" text-white py-5">
      <Container>
        <Row className="g-4 align-items-start">

          {/* LEFT */}
          <Col xs={12} md={6} lg={4} className="text-center text-lg-start">
            <Image src={Footerlogo} fluid className="mb-3" />

            <InputGroup className="mt-3 InputGroup">
              <Form.Control
                placeholder="Email"
                className="p-2"
              />
              <Button  id="button-addon2">Subscribe</Button>
            </InputGroup>
          </Col>

          {/* CENTER */}
          <Col xs={12} md={6} lg={4} className="text-center text-lg-start">
            <p className="mb-2 pb-4">
              28, Bunyodkor Ave. Chilanzar District,<br />
              Uzbekistan, Tashkent 100185
            </p>

            <p className="mb-2 pb-4">+99871 xx xx 00</p>
            <p className="mb-3 pb-4">inbox@mdis.uz</p>

            <p className="fw-bold pb-3">Follow Us</p>

       <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-2">

  {/* Facebook */}
  <OverlayTrigger placement="top" overlay={<Tooltip>Facebook</Tooltip>}>
    <a href="#" className="social-icon facebook">
      <img src={Social3} alt="fb" />
    </a>
  </OverlayTrigger>

  {/* Instagram */}
  <OverlayTrigger placement="top" overlay={<Tooltip>Instagram</Tooltip>}>
    <a href="#" className="social-icon instagram">
      <img src={Social1} alt="insta" />
    </a>
  </OverlayTrigger>

  {/* YouTube */}
  <OverlayTrigger placement="top" overlay={<Tooltip>YouTube</Tooltip>}>
    <a href="#" className="social-icon youtube">
      <img src={Social2} alt="yt" />
    </a>
  </OverlayTrigger>

  {/* Telegram */}
  <OverlayTrigger placement="top" overlay={<Tooltip>Telegram</Tooltip>}>
    <a href="#" className="social-icon telegram">
      <img src={Social4} alt="tg" />
    </a>
  </OverlayTrigger>

</div>
          </Col>

          {/* RIGHT */}
          <Col xs={12} md={12} lg={4} className="text-center text-lg-start">
            <Image src={Footermap} fluid className="mb-3" />

            <p className="mb-1 small">
              © 2026 Practice Design. Built for learning purposes.
            </p>

            <small>
              Crafted with ❤️ by{" "}
              <a
                href="https://your-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning text-decoration-none fw-semibold"
              >
                @kaif69z
              </a>
            </small>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}