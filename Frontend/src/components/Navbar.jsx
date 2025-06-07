import React, { useState } from "react";
import "../styles/components/navbar.css";
import logo from "../assets/logo.png";

const ProductsIcon = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="me-2"
  >
    <rect x="2" y="2" width="6" height="6" rx="2" fill="#333" />
    <rect x="12" y="2" width="6" height="6" rx="2" fill="#333" />
    <rect x="2" y="12" width="6" height="6" rx="2" fill="#333" />
    <rect x="12" y="12" width="6" height="6" rx="2" fill="#333" />
  </svg>
);

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <nav className="navbar navbar-expand-md  bg-white  custom-navbar">
      <div className="container-fluid px-3 px-md-5">
        {/* Logo and Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            className="dyno-logo me-2"
            src={logo}
            alt="Dynotech Innovations Logo"
            style={{ height: "24px" }}
          />
        </a>
        {/* Toggler for mobile */}
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <ProductsIcon /> Products
        </button>

        <div
          className="collapse collapsed-content navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <li className="nav-item mx-4 d-none d-md-block">
            <a
              className={`nav-link fw-semibold${
                activeNav === "home" ? " active" : ""
              }`}
              aria-current="page"
              href="#home"
              onClick={() => setActiveNav("home")}
            >
              Home
            </a>
          </li>
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-end bg-light rounded  px-3 py-2 custom-nav">
            <li className="nav-item mx-2 d-none d-md-flex">
              <a
                className={`nav-link fw-semibold d-flex align-items-center products-pill${
                  activeNav === "products" ? " active" : ""
                }`}
                href="#products"
                onClick={() => setActiveNav("products")}
              >
                Products
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className={`nav-link fw-semibold${
                  activeNav === "dynocash" ? " active" : ""
                }`}
                href="#products"
                onClick={() => setActiveNav("dynocash")}
              >
                DynoCash
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className={`nav-link fw-semibold${
                  activeNav === "speechcue" ? " active" : ""
                }`}
                href="#"
                onClick={() => setActiveNav("speechcue")}
              >
                SpeechCue
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className={`nav-link fw-semibold${
                  activeNav === "nameword" ? " active" : ""
                }`}
                href="#"
                onClick={() => setActiveNav("nameword")}
              >
                NameWord
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className={`nav-link fw-semibold${
                  activeNav === "bozzmail" ? " active" : ""
                }`}
                href="#"
                onClick={() => setActiveNav("bozzmail")}
              >
                BozzMail
              </a>
            </li>
            <li className="nav-item mx-2 d-md-none">
              <a
                className={`nav-link fw-semibold${
                  activeNav === "waitlist" ? " active" : ""
                }`}
                href="#"
                onClick={() => setActiveNav("waitlist")}
              >
                Waitlist
              </a>
            </li>
          </ul>
          <li className="nav-item mx-4 d-none d-md-block">
            <a
              className={`nav-link fw-semibold${
                activeNav === "watchlist" ? " active" : ""
              }`}
              href="#"
              onClick={() => setActiveNav("watchlist")}
            >
              Watchlist
            </a>
          </li>
        </div>
        {/* Centered Nav Links */}
      </div>
    </nav>
  );
};

export default Navbar;
