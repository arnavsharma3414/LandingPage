import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/Hero.png";
import aboutbg from "../assets/BG-2.png";

export default function Dashboard() {
  const [activeCard, setActiveCard] = useState(0);
  const [activePlan, setActivePlan] = useState(0);

  const check = <span className="text-success">&#10003;</span>;
  const cross = <span className="text-danger">&#10007;</span>;

  return (
    <>
      <div className="home-hero-section text-white py-5 hero-section-bg ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <span className="badge bg-white text-primary fs-5 fw-bold px-4 py-2 shadow-sm launch-box">
                  Launch & Save – 50% Off
                </span>
              </div>
              <h1 className="display-4 fw-bold mb-4">
                High-Performance Hosting
                <br />
                Without The Hassle
              </h1>
              <ul className="list-unstyled fs-5 mb-4">
                <li className="mb-2">
                  <span className="me-2">➤</span>Free Domain + Hassle-Free Site
                  Transfer.
                </li>
                <li className="mb-2">
                  <span className="me-2">➤</span>Hands-Free Hosting. We’ve Got
                  You.
                </li>
                <li>
                  <span className="me-2">➤</span>Real Help, Anytime You Need It.
                </li>
              </ul>
              <Link
                to="#"
                className="btn btn-outline-light btn-lg px-5 py-2 fw-bold"
              >
                See All Plans
              </Link>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src={hero}
                alt="VavenCloud"
                className="img-fluid  vaven-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section Starts Here */}

      <section className="feature-section py-5 bg-white">
        <div className="container">
          <h2 className="text-center text fw-bold mb-2">
            Boost Speed And Performance With Next-Gen Hosting Features
          </h2>
          <p className="text-center text-secondary mb-5">
            Accelerate Your Delivery With High-Performance Hosting Tools That
            Boost Site Speed, Reduce Latency, And Ensure Smooth, Efficient
            Access To Your Digital Services.
          </p>
          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <div
                className={`card h-100 border-primary shadow-sm feature-hover${
                  activeCard === 1 ? " active" : ""
                }`}
                onClick={() => setActiveCard(1)}
              >
                <div className="card-body text-center">
                  <img
                    src="https://img.icons8.com/?size=100&id=Oma0uQ970A1t&format=png&color=000000"
                    alt="Security"
                    style={{ height: "50px", marginBottom: "1rem" }}
                  />
                  <h5 className="fw-bold mb-3">Enterprise-Grade Security</h5>
                  <ul
                    className="list-unstyled text-start mx-auto"
                    style={{ maxWidth: "250px" }}
                  >
                    <li>» Free SSL Certificates</li>
                    <li>» Account Isolation</li>
                    <li>» Daily Malware Scanning</li>
                    <li>» DDoS Protection</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={`card h-100 border-primary shadow-sm feature-hover${
                  activeCard === 2 ? " active" : ""
                }`}
                onClick={() => setActiveCard(2)}
              >
                <div className="card-body text-center">
                  <img
                    src="https://img.icons8.com/?size=100&id=X8t9nq1Y9xhF&format=png&color=000000"
                    alt="Performance"
                    style={{ height: "50px", marginBottom: "1rem" }}
                  />
                  <h5 className="fw-bold mb-3">High-Speed Performance</h5>
                  <ul
                    className="list-unstyled text-start mx-auto"
                    style={{ maxWidth: "250px" }}
                  >
                    <li>» SSD-Powered Servers</li>
                    <li>» Global CDN Integration</li>
                    <li>» Optimized For Speed</li>
                    <li>» Auto-Scaling Options</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className={`card h-100 border-primary shadow-sm feature-hover${
                  activeCard === 3 ? " active" : ""
                }`}
                onClick={() => setActiveCard(3)}
              >
                <div className="card-body text-center">
                  <img
                    src="https://img.icons8.com/?size=100&id=sKuLv3O52Wfr&format=png&color=000000"
                    alt="Developer Tools"
                    style={{ height: "50px", marginBottom: "1rem" }}
                  />
                  <h5 className="fw-bold mb-3">Developer-Friendly Tools</h5>
                  <ul
                    className="list-unstyled text-start mx-auto"
                    style={{ maxWidth: "250px" }}
                  >
                    <li>» SSH & SFTP Access</li>
                    <li>» Git, Composer & WP-CLI</li>
                    <li>» Multiple PHP Versions</li>
                    <li>» CPanel Or Custom Panel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cards Section Ends Here */}

      {/* New Hero Section (Treact/Bootstrap style) */}
      <section className="py-5 about-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
              <img
                src={aboutbg}
                alt="Website Mockup"
                className="img-fluid"
                style={{ maxWidth: "70%" }}
              />
            </div>
            <div className="col-lg-6 text-white">
              <h3 className="display-5 fw-bold mb-3">
                Your Perfect Website—Just A Few Clicks Away
              </h3>
              <p className=" mb-4">
                At VavenCloud, We Make Building And Launching Your Dream Website
                Effortless. Whether You're A Business Owner, Our User-Friendly
                Platform, Fast Hosting, And Free Tools—Like One-Click WordPress
                Installs And Free Domain Migration—Mean You Can Go Live In
                Minutes. No Tech Headaches. Just Results.
              </p>
              <Link
                to="#"
                className="btn-outline-light btn-lg px-5 py-2 fw-bold btn"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-2">
            Budget-Friendly Plans With Total Payment Flexibility
          </h2>
          <p className="text-center text-secondary mb-5">
            Pay Your Way With Smart, Scalable Pricing Options
          </p>
          <div className="row justify-content-center">
            {/* Starter Plan */}
            <div className="col-md-4 mb-4">
              <div
                className={`card border-secondary plan-card shadow-sm${
                  activePlan === 1 ? " selected active" : ""
                }`}
                onClick={() => setActivePlan(1)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body text-center">
                  <h4 className="fw-bold text-primary mb-3">Starter</h4>
                  <div className="mb-2">
                    <span className="fs-2 fw-bold">$ 5/1 cPanel</span>
                    <span className="text-decoration-line-through text-secondary ms-2">
                      $10
                    </span>
                    <span className="text-danger ms-2 fw-bold">Save 50 %</span>
                  </div>
                  <p
                    className="text-secondary mb-3"
                    style={{ minHeight: "48px" }}
                  >
                    Simple, Reliable Hosting With Everything To Kick Off Your
                    Website.
                  </p>
                  <ul
                    className="list-unstyled text-start mx-auto mb-4"
                    style={{ maxWidth: "250px" }}
                  >
                    <li>✔ Standard Performance</li>
                    <li>✔ 10 GB SSD Storage</li>
                    <li>✔ Weekly Backups</li>
                    <li>✔ Free SSL</li>
                    <li>✔ Unlimited Bandwidth</li>
                    <li>✔ Free Email</li>
                    <li>✔ 1 GB RAM</li>
                    <li>✔ 1 Subdomain</li>
                  </ul>
                  <button className="btn btn-primary px-4 py-2 fw-bold">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/* Pro Plan */}
            <div className="col-md-4 mb-4">
              <div
                className={`card border-secondary plan-card shadow-lg position-relative${
                  activePlan === 2 ? " selected active" : ""
                }`}
                onClick={() => setActivePlan(2)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="position-absolute top-0 start-50 translate-middle-x  text-primary fw-bold px-4 py-2 "
                  style={{ zIndex: 1 }}
                >
                  Popular Plan
                </div>
                <div className="card-body text-center pt-5">
                  <h4 className="fw-bold mb-3">Pro</h4>
                  <div className="mb-2">
                    <span className="fs-2 fw-bold">$ 8/1 cPanel</span>
                    <span className="text-decoration-line-through text-light ms-2">
                      $16
                    </span>
                  </div>
                  <p className="mb-3" style={{ minHeight: "48px" }}>
                    Simple, Reliable Hosting With Everything To Kick Off Your
                    Website.
                  </p>
                  <ul
                    className="list-unstyled text-start mx-auto mb-4"
                    style={{ maxWidth: "250px" }}
                  >
                    <li>✔ Increased Performance Upto 5x</li>
                    <li>✔ 30 GB SSD Storage</li>
                    <li>✔ Weekly Backups</li>
                    <li>✔ Free SSL</li>
                    <li>✔ Unlimited Bandwidth</li>
                    <li>✔ Free Email</li>
                    <li>✔ 2 GB RAM</li>
                    <li>✔ 2 Subdomain & Add Domain</li>
                  </ul>
                  <Link to="#">
                    <button className="btn btn-primary px-4 py-2 fw-bold">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Business Plan */}
            <div className="col-md-4 mb-4">
              <div
                className={`card border-secondary plan-card shadow-sm${
                  activePlan === 3 ? " selected active" : ""
                }`}
                onClick={() => setActivePlan(3)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body text-center">
                  <h4 className="fw-bold text-primary mb-3">Business</h4>
                  <div className="mb-2">
                    <span className="fs-2 fw-bold">$ 12/1 cPanel</span>
                    <span className="text-decoration-line-through text-secondary ms-2">
                      $24
                    </span>
                    <span className="text-danger ms-2 fw-bold">Save 50 %</span>
                  </div>
                  <p
                    className="text-secondary mb-3"
                    style={{ minHeight: "48px" }}
                  >
                    Simple, Reliable Hosting With Everything To Kick Off Your
                    Website.
                  </p>
                  <ul
                    className="list-unstyled text-start mx-auto mb-4"
                    style={{ maxWidth: "250px" }}
                  >
                    <li>✔ Maximum Performance Upto 10x</li>
                    <li>✔ 30 GB SSD Storage</li>
                    <li>✔ Weekly & On demand Backups</li>
                    <li>✔ Free SSL & Dedicated IP Address</li>
                    <li>✔ Unlimited Bandwidth</li>
                    <li>✔ Free Email</li>
                    <li>✔ 3 GB RAM</li>
                    <li>✔ 2 Subdomain & Add Domain</li>
                  </ul>
                  <button className="btn btn-primary px-4 py-2 fw-bold">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 get-in ">
        <div className="container ">
          <h4 className="text-center text-white fw-bold mb-4">
            All VavenCloud Hosting Plans Come Fully Loaded With Essential
            Features—Speed, Security,
            <br />
            Support, And Tools To Launch Your Site Fast.
          </h4>
          <div className="d-flex justify-content-center ">
            <Link to="#" className="btn btn-outline-light px-4 py-2 fw-bold">
              Get Into Touch
            </Link>
          </div>
        </div>
      </section>

{/* Table Section */}

      <section className="table-info">
        <div className="mx-5">
          <div className="row text-center fw-bold bg-primary text-white py-3">
            <div className="col-3">Other’s Features :</div>
            <div className="col-3">
              Starter
              <br />
              <span className="fw-normal">$5 /1 cPanel</span>
            </div>
            <div className="col-3">
              Pro
              <br />
              <span className="fw-normal">$8 /1 cPanel</span>
            </div>
            <div className="col-3">
              Business
              <br />
              <span className="fw-normal">$12 /1 cPanel</span>
            </div>
          </div>

          {/* Section: Security */}
          <div className="row bg-light fw-semibold py-2 border-bottom border-top">
            <div className="col-12 ps-3">Security :</div>
          </div>
          <div className="row text-center py-2 border-bottom bg-color ">
            <div className="col-3 text-start ps-3 ">
              Standard DDoS Protection
            </div>
            <div className="col-3">{check}</div>
            <div className="col-3">{check}</div>
            <div className="col-3">{check}</div>
          </div>
          <div className="row text-center py-2 border-bottom bg-color">
            <div className="col-3 text-start ps-3 ">
              Web Application Firewall
            </div>
            <div className="col-3">{cross}</div>
            <div className="col-3">{cross}</div>
            <div className="col-3">{check}</div>
          </div>
          <div className="row text-center py-2 border-bottom bg-color">
            <div className="col-3 text-start ps-3 ">Malware Scanner</div>
            <div className="col-3">{cross}</div>
            <div className="col-3">{cross}</div>
            <div className="col-3">{check}</div>
          </div>

          {/* Section: Support & Service */}
          <div className="row bg-light fw-semibold py-2 border-bottom border-top">
            <div className="col-12 ps-3">Support & Service :</div>
          </div>
          <div className="row text-center py-2 border-bottom bg-color">
            <div className="col-3 text-start ps-3 ">99.9% Uptime Guarantee</div>
            <div className="col-3">{check}</div>
            <div className="col-3">{check}</div>
            <div className="col-3">{check}</div>
          </div>
          <div className="row text-center py-2 border-bottom bg-color">
            <div className="col-3 text-start ps-3 ">24/7 Customer Support</div>
            <div className="col-3">{check}</div>
            <div className="col-3">{check}</div>
            <div className="col-3">{check}</div>
          </div>
          <div className="row text-center py-2 border-bottom bg-color">
            <div className="col-3 text-start ps-3 ">Fixed Data Centres</div>
            <div className="col-3">{check}</div>
            <div className="col-3">{check}</div>
            <div className="col-3">{check}</div>
          </div>
          <div className="row text-center py-2 border-bottom bg-color">
            <div className="col-3 text-start ps-3 ">Priority Support</div>
            <div className="col-3">{cross}</div>
            <div className="col-3">{check}</div>
            <div className="col-3">{check}</div>
          </div>
          <div className="row text-center py-2 border-bottom bg-color">
            <div className="col-3 text-start ps-3 ">Ticket support</div>
            <div className="col-3">{cross}</div>
            <div className="col-3">{check}</div>
            <div className="col-3">{check}</div>
          </div>
          <div className="row text-center py-3 bg-color">
            <div className="col-3 text-start ps-3 ">Chat</div>
            <div className="col-3">{cross}</div>
            <div className="col-3">{check}</div>
            <div className="col-3">{check}</div>
          </div>

          {/* Buy Buttons */}
          <div className="row text-center mt-2  ">
            <div className="col-3"></div>
            <div className="col-3">
              <button className="btn btn-primary">
                <img
                  className="fire-img"
                  src="https://img.icons8.com/?size=100&id=FlYM1GD1OXq4&format=png&color=FFFFFF"
                />
                Buy now
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-primary">
                <img
                  className="fire-img"
                  src="https://img.icons8.com/?size=100&id=FlYM1GD1OXq4&format=png&color=FFFFFF"
                />
                Buy now
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-primary">
                <img
                  className="fire-img"
                  src="https://img.icons8.com/?size=100&id=FlYM1GD1OXq4&format=png&color=FFFFFF"
                />{" "}
                Buy now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
