import React from 'react';
import './App.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Your name - Your Profession</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm [Your Name], a passionate [Your Profession] with [X] years of experience in creating innovative, user-centered solutions.
          I specialize in [list key skills]. I’m dedicated to turning ideas into reality with code, design, and analysis.
        </p>
        <ul>
          <li><strong>Problem-Solving:</strong> I enjoy tackling challenges and finding creative solutions.</li>
          <li><strong>Attention to Detail:</strong> I believe quality is in the details, and I take pride in my work.</li>
          <li><strong>Continuous Learning:</strong> I stay up-to-date with the latest technologies and trends.</li>
        </ul>
      </section>

 </div>
  );
}

export default About;
