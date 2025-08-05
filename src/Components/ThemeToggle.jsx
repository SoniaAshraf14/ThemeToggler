import React from 'react';
import { useTheme } from '../ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="toggle-wrapper">
      <button className="toggle-btn" onClick={toggleTheme}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
