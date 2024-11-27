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

      <section id="projects">
        <h2>My Projects</h2>

        <div className="project">
          <h3>Project #1: [Project Name]</h3>
          <p><strong>Overview:</strong> A brief description of the project and its goals. Mention any challenges you solved or features implemented.</p>
          <p><strong>Technologies Used:</strong> [React, Node.js, etc.]</p>
          <p><strong>Outcome:</strong> Describe the success of the project, such as user feedback or metrics (if applicable).</p>
        </div>

        <div className="project">
          <h3>Project #2: [Project Name]</h3>
          <p><strong>Overview:</strong> A brief description of the project and its goals.</p>
          <p><strong>Technologies Used:</strong> [React, Firebase, etc.]</p>
          <p><strong>Outcome:</strong> Explain how the project improved or solved a problem for users or the client.</p>
        </div>

        <div className="project">
          <h3>Project #3: [Project Name]</h3>
          <p><strong>Overview:</strong> Brief summary of the project, focusing on what it achieved.</p>
          <p><strong>Technologies Used:</strong> [HTML, CSS, JavaScript, etc.]</p>
          <p><strong>Outcome:</strong> Any relevant success metrics, like increased user engagement or positive feedback.</p>
        </div>

      </section>

      <footer>
        <p>Feel free to reach out for collaboration!</p>
        <p>Email: [your-email@example.com]</p>
      </footer>
    </div>
  );
}

export default About;
