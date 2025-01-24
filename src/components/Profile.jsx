import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <h1 className="name">Vibudesh R B</h1>
        <p className="title">Full Stack Developer</p>
        <p className="achievement">🏆 SIH Winner 2K24</p>
        <div className="buttons">
          <a href="#" className="btn-secondary">Download CV</a>
          <a href="#" className="btn-secondary">LinkedIn</a>
          <a href="#" className="btn-secondary">GitHub</a>
        </div>
      </div>
      <div className="profile-image">
        <img src="profile.jpg" alt="Profile" />
      </div>
    </div>
  );
};

export default Profile;
