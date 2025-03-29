import "./App.css";
import "./AppCV.css";
import React from "react";
import { UR_Router } from "../ur_libs/Helpers_Routing.js";
import { paths } from "../ur_kb/CV_Menu.js";

export default function App() {
  return (
    <div>
      {UR_Router(paths, "React CV", "/ReactCV")}
      <div className='footer'></div>
    </div>
  );
}
