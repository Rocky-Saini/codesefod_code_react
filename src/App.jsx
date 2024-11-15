import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="coming-soon-container">
      <h1 className="fade-in-heading">Welcome to CodeSefod!</h1>
      <p className="fade-in-text">Website Version 2.0 Coming Soon...</p>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default App;
