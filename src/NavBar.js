import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";

const NavBar = (props) => {
  const paths = props.paths;
  const navigate = useNavigate();
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };

  const customLi = (name, path, submenus) => {
    return (
      <li className="nav-item" key={path}>
        <button
          className="nav-link btn btn-link"
          onClick={() => navigate(path)}
        >
          {name}
        </button>
        {submenus && ""}
      </li>
    );
  };

  const customLis = paths.map((item) =>
    customLi(item.label, item.path, item.submenus)
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-background">
      <div className="container">
        <Link className="navbar-brand" to="/">
          React CV
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </li>
            {customLis}
            <li className="nav-item">
              <div>
                <select
                  value={currentLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  <option value="it">Italian</option>
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
