import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="bg-gray-50 py-20 mx-[2rem]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
    
          
          <div className="md:w-2/3">
            <h2 className="text-4xl font-semibold text-blue-600 mb-6">
              Hello, I'm Vibudesh R B
            </h2>

            <p
              className={`text-lg text-gray-700 mb-6 ${!isExpanded ? "line-clamp-3" : ""}`}
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: isExpanded ? "none" : 2,
              }}
            >
              I'm a passionate web developer with a focus on frontend technologies
              like HTML, CSS, JavaScript, and React. I love creating intuitive and
              visually appealing user interfaces that provide excellent user
              experiences. My goal is to turn ideas into beautiful and functional
              web applications.
            
              Over the years, I’ve honed my skills by working on various projects
              that challenge my creativity and problem-solving abilities. I believe in
              continuous learning and always strive to improve my skills with new
              technologies and best practices. I enjoy staying up to date with the
              latest trends in the development world and applying them to my work.
              Whether I’m building websites from scratch or improving existing ones,
              I love to push the boundaries and make things work in new ways.
            </p>

            <button
              onClick={handleReadMoreToggle}
              className="text-blue-600 hover:text-blue-700 transition duration-300 mt-4"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>

            <div className="flex justify-center mt-6 gap-6">
              <a
                href="https://github.com/vibudesh07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/vibudesh-r-b" // Replace with your LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/yourusername" // Replace with your Instagram profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://leetcode.com/VIBUDESH_BALAJI" // Replace with your LeetCode profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition duration-300"
              >
                <FaCode size={30}/>
         
              </a>
            </div>
          </div>
          <div className="flex justify-center md:w-1/3">
          <div className="around">
          <div className="tech-icons">
      <img src="../logos/html.png" alt="HTML" className="icon" />
      <img src="../logos/CSS3_logo_and_wordmark.svg" alt="CSS" className="icon" />
      <img src="../logos/javascript.png" alt="JavaScript" className="icon" />
      <img src="../logos/react.png" alt="React" className="icon" />
    </div>
          </div>
          <div className="around2">
          <div className="tech-icons-small">
      <img src="node.png" alt="Node.js" className="icon" />
      <img src="docker.png" alt="Docker" className="icon" />
      <img src="aws.png" alt="AWS" className="icon" />
      <img src="kubernetes.png" alt="Kubernetes" className="icon" />
    </div>
          </div>
            <img
              src="your-image.jpg" // Replace with your actual image path
              alt="Vibudesh R B"
              className="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
