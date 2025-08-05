// App.jsx
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import './styles.css';
import ThemeToggle from './Components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="main-content">
        <h1>My Portfolio</h1>
        <p>This is a themed portfolio using Context API and plain CSS.</p>
        <ThemeToggle/>
      </div>
    </ThemeProvider>
  );
}

export default App;
