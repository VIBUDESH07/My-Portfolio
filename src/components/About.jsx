import React from 'react';


const About = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="container mx-auto flex flex-col md:flex-row p-8 bg-gray-900 shadow-2xl rounded-xl mt-16">
        <div className="flex-1 text-left mb-8 md:mb-0 md:mr-8">
          <h1 className="text-5xl font-bold text-orange-400 mb-2 drop-shadow-lg transform transition-transform duration-300 hover:scale-105 hover:text-green-500">
            VIBUDESH R B
          </h1>
          <h2 className="text-3xl text-red-400 mb-4 drop-shadow-lg transform transition-transform duration-300 hover:scale-105 hover:text-blue-400">
            Full Stack Developer
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            I am a passionate Full Stack Developer with expertise in building scalable web applications. I enjoy working with both front-end and back-end technologies to create seamless user experiences.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-orange-400 mb-4 flex items-center">
              <span className="mr-2">🏆</span> Achievements
            </h3>
            <ul className="list-decimal pl-6 text-lg text-gray-300 space-y-2">
              <li className="relative group flex items-center">
                <span className="mr-2">🥇</span> Hackathon: 1 Win
                <span className="absolute left-full top-1/2 transform -translate-x-2 -translate-y-1/2 w-64 p-4 bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <strong>Mediconnect:</strong> Developed a healthcare solution using
                  <ul className="list-disc pl-5 mt-2">
                    <li>HTML/CSS/JavaScript for the frontend</li>
                    <li>MySQL for the database</li>
                    <li>Express.js for the backend</li>
                    <li>Python with Selenium for automation</li>
                  </ul>
                </span>
              </li>
              <li className="relative group flex items-center">
                <span className="mr-2">🥉</span> HackFest: 1 Win
                <span className="absolute left-full top-1/2 transform -translate-x-2 -translate-y-1/2 w-64 p-4 bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <strong>Web Scraping Project:</strong> Implemented a web scraping tool using
                  <ul className="list-disc pl-5 mt-2">
                    <li>Python with BeautifulSoup</li>
                    <li>Automated data extraction</li>
                  </ul>
                </span>
              </li>
              <li className="relative group flex items-center">
                <span className="mr-2">🥇</span> Paper Presentations: 1 Win
                <span className="absolute left-full top-1/2 transform -translate-x-2 -translate-y-1/2 w-64 p-4 bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <strong>Research on Data Privacy:</strong> Presented findings on
                  <ul className="list-disc pl-5 mt-2">
                    <li>Data protection techniques</li>
                    <li>Privacy regulations</li>
                  </ul>
                </span>
              </li>
              <li className="relative group flex items-center">
                <span className="mr-2">🥇</span> Coding Events: 2 Wins
                <span className="absolute left-full top-1/2 transform -translate-x-2 -translate-y-1/2 w-64 p-4 bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <strong>Various Coding Challenges:</strong> Achieved top scores in
                  <ul className="list-disc pl-5 mt-2">
                    <li>Algorithmic challenges</li>
                    <li>Problem-solving contests</li>
                  </ul>
                </span>
              </li>
              <li className="relative group flex items-center">
                <span className="mr-2">🏅</span> IoT Events: 1 Win
                <span className="absolute left-full top-1/2 transform -translate-x-2 -translate-y-1/2 w-64 p-4 bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <strong>Smart Home Automation:</strong> Created an IoT project with
                  <ul className="list-disc pl-5 mt-2">
                    <li>Embedded systems</li>
                    <li>IoT sensors and actuators</li>
                  </ul>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 text-center">
          <img 
            src="/logos/20240807_182030.jpg" 
            alt="Vibudesh R B" 
            className="w-56 h-56 rounded-full object-cover mx-auto border-4 border-orange-500 shadow-lg"
          />
          <a 
            href="/logos/VIB(3).pdf" 
          
            className="mt-14 inline-block bg-orange-500 text-black px-6 py-3 rounded-lg font-semibold text-lg transition-transform duration-300 transform hover:scale-105 hover:bg-orange-600"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
