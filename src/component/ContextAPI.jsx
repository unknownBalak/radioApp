import React from "react";
import { useTheme, useThemeUpdate } from "../ThemeContext";
function ContextAPI() {
const darkTheme = useTheme();
const toggleTheme = useThemeUpdate();
 
 const style = {
    margin: "auto",
    marginTop: "20px",
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "6rem",
  };
  return (
    <>
      <button style={{ padding: "10px" }} onClick={toggleTheme}>
        Toogle Theme
      </button>
      <div style={style}>function Theme</div>
    </>
  );
}

export default ContextAPI;
