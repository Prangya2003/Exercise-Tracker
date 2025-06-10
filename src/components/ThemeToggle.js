import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="theme-toggle">
      
        <button onClick={() => setDarkMode(!darkMode)} className="theme-button">   
        <span>{darkMode ? "☀️ Light" : "🌙 Dark" }</span>
        </button>
    </div>
  );
};

export default ThemeToggle;
