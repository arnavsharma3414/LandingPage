import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import startups from "../config/startups";
import bell from "../assets/bell.png";
import launchingSoonIcon from "../assets/launchingsoon.png";

import "../styles/components/Products.css";

const bellIconUrl = bell;

const TagBadge = ({ text }) => (
  <span className="custom-tag-badge">#{text}</span>
);

const StartupCard = ({ startup }) => (
  <Card className="startup-card mb-4">
    <Card.Body>
      <Row className="align-items-center flex-md-nowrap flex-wrap">
        <Col
          xs={12}
          md={3}
          className="text-center mb-3 mb-md-0 position-relative"
        >
          <div className="startup-logo-bg d-flex align-items-center justify-content-center mx-auto">
            <img
              src={startup.logo}
              alt={startup.name}
              className="startup-logo"
            />
          </div>
          {/* Remind me button for mobile, visible on xs only */}
          <div className="d-flex d-md-none justify-content-center mt-3">
            <Button variant="light" className="remind-btn">
              <img className="bell-icon" src={bellIconUrl} alt="Remind me" />
              Remind me
            </Button>
          </div>
        </Col>
        <Col xs={12} md={9}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
            <div>
              <div className="d-flex align-items-center mb-2">
                <h5 className="startup-title mb-0">{startup.name}</h5>
                <Badge bg="dark" className="launching-badge ms-2">
                  <img
                    src={launchingSoonIcon}
                    alt="Launching soon"
                    className="launching-icon"
                  />
                  {startup.badgeText}
                </Badge>
              </div>
              <div className="mb-2">
                {startup.tags.map((tag, idx) => (
                  <TagBadge text={tag} key={idx} />
                ))}
              </div>
            </div>
            {/* Remind me button for desktop, hidden on mobile */}
            <div className="d-none d-md-block ms-md-3 mt-md-0 mt-3 ">
              <Button variant="light" className="remind-btn">
                <img className="bell-icon" src={bellIconUrl} alt="Remind me" />
                Remind me
              </Button>
            </div>
          </div>
          <div className="startup-description mt-3">{startup.description}</div>
          <ul className="startup-points mt-3">
            {startup.points.map((point, idx) => (
              <li key={idx} className="startup-point-item">
                <span className="startup-point-icon">{point.icon}</span>
                <span className="startup-point-text">{point.text}</span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const Products = () => (
  <section id="products" className="products-section">
    <Container>
      <Row className="align-items-center ph-products-row">
        <Col lg={6} md={6} xs={12}>
          <h2 className="ph-title">Our Products</h2>
        </Col>
        <Col lg={6} md={6} xs={12} className="ph-desc-col">
          <div className="ph-desc">
            Our suite of innovative technologies designed to transform how
            businesses operate.
          </div>
        </Col>
      </Row>

      <hr className="ph-divider" />
      {startups.map((startup, idx) => (
        <StartupCard startup={startup} key={idx} />
      ))}
    </Container>
  </section>
);

export default Products;
