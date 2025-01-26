import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <h1 className="name">Vibudesh R B</h1>
        <p className="title">Full Stack Developer</p>
        <p className="achievement">🏆 SIH Winner 2K24</p>
        <p className="description">
          A Full Stack Developer is proficient in both front-end and back-end development, capable of designing seamless user interfaces and managing databases or server-side logic. With expertise in various programming languages and frameworks, they ensure efficient and scalable web applications that meet modern industry standards.
        </p>
      </div>
      <div className="profile-image">
        <img src="profile.jpg" alt="Profile" />
        <div className="buttons">
          <a href="#" className="btn-secondary">
            <i className="fas fa-file-download"></i> Download CV
          </a>
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://leetcode.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="icon leetcode"
            >
              <i className="fas fa-code"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
