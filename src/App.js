import React, { useState } from 'react';
import './App.css';
import Star from './Components/Star';

function App() {

  return (
    <div className="App">
     <Star count={5} />,
    </div>
  );
}

export default App;
