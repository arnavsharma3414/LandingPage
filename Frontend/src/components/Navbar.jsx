import "./styles.css";
import logo from "../assets/logo.webp";

export default function navbar() {
  return (
<>
      <nav className="navbar navbar-expand-lg nav-primary ">
        <div className="container brand-details">
          <span>
            <img
              className="icons-nav"
              src="https://img.icons8.com/?size=100&id=22790&format=png&color=FFFFFF"
            />
            sales@vavensoft.com
          </span>
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <span>
                <img
                  className="icons-nav"
                  src="https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF"
                />{" "}
                +91 9090979706 , +91 9090949405
              </span>
            </li>
          </ul>
          <span className="social-links">
            Follow Us:
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "20px",marginLeft: "20px"  }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"
                alt="LinkedIn"
                style={{ height: "24px", verticalAlign: "middle" }}
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "20px"}}
            >
              <img
                src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF"
                alt="Facebook"
                style={{ height: "20px", verticalAlign: "middle" }}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "20px" }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=85154&format=png&color=FFFFFF"
                alt="Instagram"
                style={{ height: "24px", verticalAlign: "middle" }}
              />
            </a>
           
          </span>
        </div>
      </nav>

      <nav className="navbar nav-secondary ">
        <div className="container">
          <img className="navbar-brand" src={logo} alt="Navbar" />
          <button className="btn btn-logo" type="submit">
            <img
              className="login-logo"
              src="https://img.icons8.com/?size=100&id=85094&format=png&color=FFFFFF"
              alt="Navbar"
            />{" "}
            Login
          </button>
        </div>
      </nav>
    </>
  )
}
