import React, { Component } from "react";
// import { ThemeContext } from "./PracticeUseContext.js";

export default class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
      fontSize: "3rem",
    };
  }

  /* Class-based components need to import with the Context (imported from the
  created context, then wrap the rendered return in <CreatedContext.Consumer>),
  */

  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
      // <ThemeContext.Consumer>
      //   {(darkTheme) => {
      //     return <div style={this.themeStyles(darkTheme)}>Class Style</div>;
      //   }}
      // </ThemeContext.Consumer>
    );
  }
}
