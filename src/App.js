import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Achievement from './components/Achievement';

function App() {
  return (
    <div className="App relative">
      <Navbar/>
      <About/>
      <Education/>
      <Achievement/>
      </div>
  );
}

export default App;
