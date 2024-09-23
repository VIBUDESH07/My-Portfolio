import React, { useState } from "react";
import { motion } from "framer-motion";

const achievements = [
  { title: "🏆 Smart India Hackathon 2K24 Winner", description: "National level coding competition winner among 500+ teams." },
  { title: "🥇 Hackbuzz 24 Hackathon Winner", description: "Secured 1st place in an intense 24-hour coding competition." },
  { title: "🥉 Hackfest Web Scraping Hackathon Winner", description: "Developed an innovative web scraper that outperformed competitors." },
  { title: "🥇 Two-Time Coding Champion", description: "Won coding competitions with exceptional algorithmic skills." },
  { title: "🏅 Three-Time Paper Presentation Winner", description: "Presented research papers on cutting-edge technologies." }
];

const Achievement = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-blue-600 text-center mb-12">
          My Achievements
        </h2>

        <motion.div 
          className="flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white shadow-lg rounded-lg text-center cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className="text-xl font-semibold text-gray-800">{achievement.title}</p>

              {hoveredIndex === index && (
                <motion.div 
                  className="absolute inset-0 bg-blue-600 text-white flex items-center justify-center p-4 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-sm">{achievement.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievement;
