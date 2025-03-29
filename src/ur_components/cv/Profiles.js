import React, { useContext } from "react";
import { LanguageContext } from "../../ur_libs/LanguageContext";
import profileData from "../../ur_kb/CV_Profile_Generics.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { translate, md2html } from "../../ur_libs/Helpers";

export const ProfileSection = ({ key, section, language }) => (
  <div className="row mb-4">
    <div className="col-12">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">{translate(section.name, language)}</h3>
        </div>
        <div className="card-body">
          {section.description && <p className="mb-3">{md2html(translate(section.description, language))}</p>}
          <ul className="list-group">
            {section.items.map((item, index) => (
              <li key={index} className="list-group">
                <div className="single_card">
                  {item.id && <>[{item.id}]</>} {item.date_begin && (
                    <strong>{item.date_begin} {item.date_end && <> - {item.date_end}</>}</strong>
                  )} - <strong>{translate(item.title, language)}</strong>
                  {item.description && <div className="mt-1">{md2html(translate(item.description, language))}</div>}
                  {item.details && item.details.length > 0 && (
                    <ul className="mt-2">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Profiles = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <div className="container-fluid py-4 text-start">
      {profileData.map((section, index) => (
        <ProfileSection key={index} section={section} language={currentLanguage} />
      ))}
    </div>
  );
};

export default Profiles;