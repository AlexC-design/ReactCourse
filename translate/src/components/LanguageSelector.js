import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        <h2>Select a language:</h2>
        <i
          onClick={() => this.context.onLanguageChange("english")}
          className="flag uk"
          style={{ cursor: "pointer" }}
        />
        <i
          onClick={() => this.context.onLanguageChange("romanian")}
          className="flag ro"
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}

export default LanguageSelector;
