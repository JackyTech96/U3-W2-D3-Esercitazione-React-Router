import { Button, Col, Row } from "react-bootstrap";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";

const NetflixFooter = () => (
  <footer>
    <Row className="justify-content-center mt-5">
      <Col xs={6}>
        <Row>
          <Col className="mb-2">
            <Facebook color="#838383" className="me-2" />
            <Instagram color="#838383" className="me-2" />
            <Twitter color="#838383" className="me-2" />
            <Youtube color="#838383" />
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
          <Col>
            <Row>
              <Col>
                <p>
                  <a href="#" alt="footer link">
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Media Center
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Contact us
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p>
                  <a href="#" alt="footer link">
                    Audio Description
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Legal Notices
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p>
                  <a href="#" alt="footer link">
                    Help Center
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Jobs
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Cookie Preferences
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p>
                  <a href="#" alt="footer link">
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a href="#" alt="footer link">
                    Corporate Information
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="mb-2">
            <Button
              variant="dark"
              style={{ backgroundColor: "#221f1f" }}
              size="sm"
              className="footer-button rounded-0 mt-3"
            >
              Service Code
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col className="my-2 copyright"> © 1997-2023 Netflix, Inc.</Col>
        </Row>
      </Col>
    </Row>
  </footer>
);
export default NetflixFooter;
