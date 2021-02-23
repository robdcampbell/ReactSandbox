import React, { useState } from "react";
// import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

const PracticeUseContext = () => {
  return (
    <div>
      <ThemeProvider>
        <h1>useContext() Practice</h1>
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </div>
  );
};

export default PracticeUseContext;
