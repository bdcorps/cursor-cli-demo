import React, { useState } from 'react';
import './App.css';

function App() {
  const [isHello, setIsHello] = useState(false);
  const currentText = isHello ? 'Hello World' : 'Bye World';

  const toggleText = () => {
    setIsHello(!isHello);
  };

  return (
    <div className="App">
      <h1 data-text={currentText}>{currentText}</h1>
      <button className="toggle-button" onClick={toggleText}>
        Toggle Text
      </button>
    </div>
  );
}

export default App;