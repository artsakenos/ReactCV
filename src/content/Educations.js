import React from "react";
import { automaticLinks_OS } from "../components/Helpers";
import educationData from "../json/CV_Education.json";

const Education = () => (
  <div>
    <h2>Education</h2>
    <div className="item-container">
      {educationData.education.map((item, index) => (
        <div key={index}>
          <b>{item.date}</b> - {item.certification["it"]};{" "}
          {item.source && <>@{item.source}; </>} {item.number}
        </div>
      ))}
    </div>
  </div>
);

const Languages = () => (
  <div>
    <h2>Languages</h2>
    <p>
      Tabella&nbsp;compilata&nbsp;secondo le&nbsp;direttive del CEFR (
      <a href="https://it.wikipedia.org/wiki/Quadro_comune_europeo_di_riferimento_per_la_conoscenza_delle_lingue">
        QCER
      </a>
      ):&nbsp;
      <a href="http://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages">
        Common European Framework of Reference for Languages
      </a>
      .
    </p>
    <table style={{ border: "1px solid black" }}>
      <thead>
        <tr>
          {" "}
          <th style={{ border: "1px solid black", padding: "1px" }}>
            Language
          </th>
          <th style={{ border: "1px solid black", padding: "1px" }}>Writing</th>
          <th style={{ border: "1px solid black", padding: "1px" }}>
            Speaking
          </th>
          <th style={{ border: "1px solid black", padding: "1px" }}>Reading</th>
          <th style={{ border: "1px solid black", padding: "1px" }}>
            Listening
          </th>
        </tr>
      </thead>
      <tbody>
        {educationData.languages.map((language, index) => {
          const lang = Object.keys(language)[0];
          return (
            <>
              <tr key={index} style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black", padding: "10px" }}>
                  {lang}
                </td>
                <td>{language[lang].writing}</td>
                <td>{language[lang].speaking}</td>
                <td>{language[lang].reading}</td>
                <td>{language[lang].listening}</td>
              </tr>
              <tr>
                <td></td>
                <td colSpan="3">
                  <ul>
                    {language[lang].certification &&
                      language[lang].certification.map((item) => (
                        <li>{automaticLinks_OS(item)}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  </div>
);

const Certifications = () => (
  <div>
    <ul style={{ textAlign: "left" }}>
      {educationData.certifications.map((certification, index) => {
        const period = Object.keys(certification)[0];
        const description = certification[period];
        return (
          <li key={index}>
            {period}: {description}
          </li>
        );
      })}
    </ul>
  </div>
);
const Interests = () => <div></div>;

const Educations = () => (
  <div className="content-container">
    <Education />
    <Languages />
    <Certifications />
    <Interests />
  </div>
);

export default Educations;
