import React from "react";
import "./nav.css";
import { RxHamburgerMenu } from "react-icons/rx";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black pb-3">
        <div className="container-fluid">
          <h1 className="navbar-brand brand ps-5 pt-3">
            <span>L</span>ogith V
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            id="toggle"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <RxHamburgerMenu style={{ color: "#ee6a13" }} />
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-lg-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav gap-3 gap-lg-5 pe-lg-5 me-lg-5 d-flex flex-column flex-lg-row text-center  align-items-center">
              <div className="col-6 col-md-5 col-lg-6 ">
                <a href="https://drive.google.com/file/d/1m7nE9w0KyRDST7G6CUg5-dQ65yzm1iPr/view?usp=drivesdk">
                  <button className="btn button1 w-100"> Resume</button>
                </a>
              </div>
              <div className="col-6 col-md-5 col-lg-6">
                <a href="#contact">
                  <button className="btn button2 w-100">Get in touch</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
