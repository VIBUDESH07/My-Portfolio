import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="container mx-auto flex flex-col md:flex-row p-8 bg-gray-900 shadow-2xl rounded-xl mt-16">
        <div className="flex-1 text-left mb-8 md:mb-0 md:mr-8">
          <h1 className="text-5xl font-bold text-orange-400 mb-2 drop-shadow-lg">VIBUDESH R B</h1>
          <h2 className="text-3xl text-red-400 mb-4 drop-shadow-lg">Full Stack Developer</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            I am a passionate Full Stack Developer with expertise in building scalable web applications. I enjoy working with both front-end and back-end technologies to create seamless user experiences.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-orange-400 mb-4 flex items-center">
              <span className="mr-2">🏆</span> Achievements
            </h3>
            <ul className="list-decimal pl-6 text-lg text-gray-300 space-y-2">
              <li className="flex items-center">
                <span className="mr-2">🥇</span> Hackathon: 2 Wins
              </li>
              <li className="flex items-center">
                <span className="mr-2">🥈</span> Paper Presentations: 1 Win
              </li>
              <li className="flex items-center">
                <span className="mr-2">🥉</span> Coding Events: 2 Wins
              </li>
              <li className="flex items-center">
                <span className="mr-2">🏅</span> IoT Events: 1 Win
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 text-center">
          <img 
            src="your-photo-url.jpg" 
            alt="Vibudesh R B" 
            className="w-56 h-56 rounded-full object-cover mx-auto border-4 border-orange-500 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
