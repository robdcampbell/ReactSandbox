import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
    fontSize: "3rem",
  };
  return (
    <>
      <div style={themeStyles}>
        <h2>Function Theme</h2>
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

export default FunctionContextComponent;
