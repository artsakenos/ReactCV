import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profile_home from "../ur_kb/CV_Profile_Home.json";
import { md2html } from "../ur_libs/Helpers";
import { LanguageContext } from "../ur_libs/LanguageContext";

export default function Home() {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <div className="container py-5">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">{profile_home.name}</h1>
        <p className="lead text-muted">Engineer & Computer Scientist</p>
      </header>

      {/* Profile Section */}
      <section className="card shadow-sm mb-5">
        <div className="card-body p-4 single_card">
          <img
            src={profile_home.picture[currentLanguage]}
            alt="Andrea Addis"
            className="img-fluid float-md-end ms-md-4 mb-3"
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '8px',
              objectFit: 'cover'
            }}
          />
          <h2 className="card-title mb-3">About</h2>
          <div className="card-text">
            {md2html(profile_home.profile[currentLanguage])}
          </div>
        </div>
      </section>

      {/* Productivity & Technical Expertise */}
      <section className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card shadow-sm h-100 p-4">
            <h2 className="card-title mb-3">Productivity Tools</h2>
            <div className="card-text single_card">
              {md2html(profile_home.productivity[currentLanguage])}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm h-100 p-4">
            <h2 className="card-title mb-3">Technical Expertise</h2>
            <div className="card-text single_card">
              {md2html(profile_home.technologies[currentLanguage])}
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="card shadow-sm">
        <div className="card-body p-4 p-md-5">
          <h2 className="card-title mb-4">Former and Present Affiliations</h2>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
            {profile_home.affiliations.map((affiliation, index) => (
              <div className="col single_card" key={index}>
                <div className="card h-100 border-0 text-center p-3">
                  <img
                    src={affiliation.logo}
                    alt={affiliation.name}
                    className="mb-3 mx-auto"
                    style={{ maxHeight: "60px", maxWidth: "100%" }}
                  />
                  <h5 className="card-title">{affiliation.name}</h5>
                  <a href={affiliation.url} className="btn btn-sm btn-outline-primary mt-2" target="_blank" rel="noopener noreferrer">
                    Visit
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}