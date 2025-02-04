import React from "react";
import PropTypes from "prop-types";
import "./css/NavBar.css";
// import { Link } from "react-router-dom";

export default function NavBar({
  title = "Title",
  aboutText = "About Text",
  mode,
  toggleMode,
  showAlert,
}) {
  function handleRed() {
    document.querySelectorAll("button").forEach((button) => {
      button.style.backgroundColor = "#d52f46";
      button.style.color = "#FAF9F6";
      button.style.borderColor = "#d52f46";
    });

    showAlert("Red Theme Enabled", "success");
  }
  function handleBlue() {
    document.querySelectorAll("button").forEach((button) => {
      button.style.backgroundColor = "#2f88d5";
      button.style.color = "#FAF9F6";
      button.style.borderColor = "#2f88d5";
    });

    showAlert("Blue Theme Enabled", "success");
  }
  function handleGreen() {
    document.querySelectorAll("button").forEach((button) => {
      button.style.backgroundColor = "#1dbc3a";
      button.style.color = "#FAF9F6";
      button.style.borderColor = "#1dbc3a";
    });
    showAlert("Green Theme Enabled", "success");
  }

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  bg-${mode} navbar-${mode} fixed-top`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {title}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  {aboutText}
                </a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            <div className="d-flex flex-row">
              <p className="theme-button  my-1">Themes</p>
              <button className="red theme-button mx-5" onClick={handleRed}>
                Red
              </button>
              <button className="blue theme-button mx-5" onClick={handleBlue}>
                Blue
              </button>
              <button className="green theme-button mx-5" onClick={handleGreen}>
                Green
              </button>
            </div>
            <div
              className={`form-check form-switch text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {`Toggle ${mode === "light" ? "Dark" : "Light"} Mode`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
