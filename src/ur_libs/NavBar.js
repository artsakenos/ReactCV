import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import { RouteBuilder } from "./Helpers_Routing";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ paths, name }) => {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-background">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {name}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {RouteBuilder(paths)}
            </ul>
            <div className="d-flex">
              <select
                className="form-select"
                value={currentLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="it">Italian</option>
                <option value="en">English</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ paddingTop: "50px" }}>
        {/* This div adds space to prevent content from being hidden by the fixed navbar */}
      </div>
    </>
  );
};

export default NavBar;