import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App relative">
        <Header/>
        <About/>
        <Project/>
        <Skills/>
        <Contact/>
      </div>
  );
}

export default App;
