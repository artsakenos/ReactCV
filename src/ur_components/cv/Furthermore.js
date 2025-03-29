import React, { useContext } from "react";
import { LanguageContext } from "../../ur_libs/LanguageContext";
import profileData from "../../ur_kb/CV_Profile_Generics.json";
import profileTalkSeminars from "../../ur_kb/CV_FtmTalksSeminars.json";
import profileEventsOrganization from "../../ur_kb/CV_FtmEventsOrganization.json";
import profileRefresherCourses from "../../ur_kb/CV_FtmRefresherCourses.json";
import publicationsNoName from "../../ur_kb/CV_Publications_NoName.json";
import teachingActivity from "../../ur_kb/CV_TeachingActivity.json";
import researchActivityDetails from "../../ur_kb/CV_ResearchActivity_Details.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProfileSection } from "./Profiles";

const Furthermore = ({ profileData }) => {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <div className="container-fluid py-4 text-start">
            {Array.isArray(profileData) && profileData.map((section, index) => (
                <ProfileSection key={index} section={section} language={currentLanguage} />
            ))}
        </div>
    );
};

export function FTMProfileData() {
    return <Furthermore profileData={profileData} />;
}

export function FTMEventsOrganization() {
    return <Furthermore profileData={profileEventsOrganization} />;
}

export function FTMTalksSeminars() {
    return <Furthermore profileData={profileTalkSeminars} />;
}

export function FTMRefresherCourses() {
    return <Furthermore profileData={profileRefresherCourses} />;
}

export function FTMPublicationsNoName() {
    return <Furthermore profileData={publicationsNoName} />;
}

export function TeachingActivity() {
    return <Furthermore profileData={teachingActivity} />;
}

export function ResearchActivityDetails(){
    return <Furthermore profileData={researchActivityDetails} />;
}