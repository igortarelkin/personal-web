import "./header.css";
import "animate.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand animate__animated animate__fadeInLeftBig"
            href="https://itarelkin.com/"
          >
            Igor Tarelkin
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 animate__animated animate__fadeInRightBig">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://itarelkin.com/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" data-target="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#projects"
                  data-target="#projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./cv.pdf" target="_blank">
                  Curriculum Vitae
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" data-target="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
