import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Settings, Terminal, Layers } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Layout size={20} />,
    skills: ["PHP", "JavaScript", "SQL", "Laravel", "Node.js", "AngularJS", "Bootstrap"]
  },
  {
    title: "Databases & Real-Time",
    icon: <Database size={20} />,
    skills: ["MySQL", "Redis", "FreeSWITCH", "WebSockets", "Lua Scripting"]
  },
  {
    title: "Developer Tools & AI",
    icon: <Settings size={20} />,
    skills: ["Git", "Postman", "VS Code", "Cursor AI", "ChatGPT", "n8n"]
  },
  {
    title: "Server Architecture",
    icon: <Terminal size={20} />,
    skills: ["Linux", "Nginx", "Apache", "Docker", "Bash Scripting", "Server Monitoring"]
  },
  {
    title: "Core Concepts",
    icon: <Layers size={20} />,
    skills: ["REST APIs", "Microservices", "Production Debugging", "Scalable Systems"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section section-container">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="tech-text">03.</span> Technical Capabilities
      </motion.h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>

            <div className="skills-grid">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-node">
                  <span className="node-dot"></span>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
