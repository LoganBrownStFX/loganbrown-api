import React from "react";
import strings from "../../constants/strings";

import "./Title.css";

function Title() {
  return (
    <div id="Title" className="flex-container-column">
      <span className="name fadeInDown">{strings.title.name}</span>
      <span className="slogan fadeInUp">{strings.title.slogan}</span>
    </div>
  );
}

export default Title;
