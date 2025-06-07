import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} xs={12} className="footer-left mb-3 mb-md-0">
            <div className="custom-footer">
              <div className="footer-company-name">
                Dynotech Innovations, LDA.
              </div>
              <div className="footer-address">
                <div>Rua Luís de Camões Nº17, 1º Dtº</div>
                <div>Montijo 2870-154</div>
                <div>Portugal</div>
              </div>
            </div>
            <div className="footer-socials">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-linkedin"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8874 12.4246V19.1075H16.0129V12.872C16.0129 11.3052 15.4523 10.2365 14.0504 10.2365C12.9799 10.2365 12.3423 10.9574 12.0624 11.6539C11.9601 11.9029 11.9338 12.2498 11.9338 12.5985V19.1075H8.05762C8.05762 19.1075 8.11015 8.54747 8.05762 7.45253H11.9338V9.10445L11.9085 9.14249H11.9338V9.10445C12.4483 8.312 13.3675 7.17902 15.4261 7.17902C17.9755 7.17902 19.8874 8.84543 19.8874 12.4246ZM4.00388 1.83472C2.6789 1.83472 1.81128 2.70415 1.81128 3.848C1.81128 4.96649 2.65354 5.86219 3.95317 5.86219H3.97852C5.33068 5.86219 6.17022 4.96649 6.17022 3.848C6.14668 2.70415 5.33068 1.83472 4.00388 1.83472ZM2.04132 19.1075H5.91573V7.45253H2.04132V19.1075Z"
                    fill="#2A2A2A"
                  />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-x"
              >
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.151 0.6604H17.9291L11.8612 7.61361L19 17.0755H13.411L9.03326 11.3359L4.02382 17.0755H1.24458L7.73477 9.63776L0.886841 0.6604H6.61854L10.5751 5.90531L15.151 0.6604ZM14.1774 15.4091H15.717L5.7808 2.23965H4.13024L14.1774 15.4091Z"
                    fill="#2A2A2A"
                  />
                </svg>
              </a>
            </div>
          </Col>
          <Col md={6} xs={12} className="footer-right text-md-end">
            <div>
              Built With{" "}
              <span className="footer-heart" role="img" aria-label="heart">
                &#x2764;&#xFE0F;
              </span>{" "}
              in Portugal
            </div>
            <div className="footer-copyright">
              © 2025 Dynotech Innovations. All rights reserved.
            </div>
            <div className="footer-legal-links">
              <a href="/privacy-policy" className="footer-link">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="footer-link">
                Terms of Service
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
