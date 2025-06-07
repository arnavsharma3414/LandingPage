import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/components/Home.css";
const Home = () => {
  return (
    <>
      <section id="home">
        <Container className="d-flex flex-column align-items-center  info-container">
          <Row className="mb-3">
            <Col className="text-center">
              <div className="rounded-pill px-4 py-2  text-secondary fw-medium mb-3">
                4 Products Launching <em>This Year!</em>
              </div>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="text-center">
              <h1 className="hero-title">
                <span
                  className="hero-title-highlight"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  Innovative
                  <svg
                    className="hero-title-underline-svg"
                    width="170"
                    height="18"
                    viewBox="50 0 70 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: "absolute", left: 0, bottom: -5 }}
                  >
                    <path
                      d="M3 15C30 10 80 3 167 9"
                      stroke="#ff8c32"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                solutions for
                <br />
                modern business
              </h1>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="text-center">
              <p className=" about-text">
                Dynotech Innovations is building the next generation
                <br />
                of financial, communication, and infrastructure tools
                <br />
                for businesses worldwide.
              </p>
            </Col>
          </Row>
          <Row className="mb-4 justify-content-center ">
            <Col xs={12} md={8} lg={12} className=" ">
              <Form className="d-flex form-size flex-column flex-md-row align-items-stretch align-items-md-center w-100">
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  className=" py-3 px-5 rounded-3 shadow-sm mb-2 mb-md-0 w-100"
                />
                <Button
                  type="submit"
                  className=" py-3 fw-semibold rounded-2 ms-0 ms-md-1 submit-button w-100 w-md-auto mt-2 mt-md-0 submit-button"
                >
                  Join Waitlist
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <span className="underline-text">or </span>
              <a
                href="#products"
                className="text-decoration-underline underline-text"
              >
                take a look at the products
              </a>
            </Col>
          </Row>
        </Container>

        <div className="ph-section mt-5" >
        
            <Row className="">
              <Col xs={12} lg={12} className="ph-keywords">
                <span>AI</span> <span>Voice</span>{" "}
                <span className="ph-italic">Crypto</span> <span>IVR</span>{" "}
                <span className="ph-italic">VPS</span> <span>SaaS</span>{" "}
                <span className="ph-italic">Mail</span> <span>Tech</span>{" "}
                <span className="ph-italic">Cloud</span> <span>Infra</span>{" "}
                <span className="ph-italic">Ops</span> <span>UX</span>
              </Col>
            </Row>
       
        </div>
      </section>
    </>
  );
};

export default Home;
