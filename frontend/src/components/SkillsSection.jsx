import React from "react";
import { motion } from "framer-motion";
import {
  FaAws, FaLinux, FaDatabase, FaCloud, FaBrain,
  FaProjectDiagram, FaTools, FaServer, FaHtml5, FaCss3Alt,
  FaJs, FaReact, FaPython, FaGit, FaNodeJs, FaChartBar, FaJava
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiC, SiCplusplus, SiExpress,
  SiMongodb, SiPostgresql, SiJenkins, SiKubernetes, SiGithubactions,
  SiDocker
} from "react-icons/si";

const skillsData = {
  "Programming Languages": [
    { name: "C", icon: <SiC size={24} /> },
    { name: "C++", icon: <SiCplusplus size={24} /> },
    { name: "Python", icon: <FaPython size={24} /> },
    { name: "JavaScript", icon: <FaJs size={24} /> },
    { name: "Java", icon: <FaJava size={24} /> },
  ],
  "Frontend Basics": [
    { name: "HTML", icon: <FaHtml5 size={24} /> },
    { name: "CSS", icon: <FaCss3Alt size={24} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
    { name: "EJS", icon: <FaNodeJs size={24} /> },
  ],
  "Backend & APIs": [
    { name: "Node.js", icon: <FaNodeJs size={24} /> },
    { name: "Express.js", icon: <SiExpress size={24} /> },
    { name: "REST API", icon: <FaServer size={24} /> },
    { name: "Performance Tuning", icon: <FaProjectDiagram size={24} /> },
  ],
  "Core Systems": [
    { name: "Database Design", icon: <FaDatabase size={24} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
    { name: "MongoDB", icon: <SiMongodb size={24} /> },
    { name: "SQL Server", icon: <FaDatabase size={24} /> },
  ],
  "Data Structures": [
    { name: "Arrays", icon: <FaBrain size={24} /> },
    { name: "Linked Lists", icon: <FaBrain size={24} /> },
    { name: "Trees", icon: <FaBrain size={24} /> },
    { name: "BST", icon: <FaBrain size={24} /> },
    { name: "Strings", icon: <FaBrain size={24} /> },
    { name: "Graphs", icon: <FaBrain size={24} /> },
    { name: "Dynamic Programming", icon: <FaBrain size={24} /> },
  ],
  "Cloud & DevOps": [
    { name: "Azure", icon: <FaCloud size={24} /> },
    { name: "Linux", icon: <FaLinux size={24} /> },
    { name: "Git", icon: <FaGit size={24} /> },
    { name: "Jenkins", icon: <SiJenkins size={24} /> },
    { name: "Docker", icon: <SiDocker size={24} /> },
    { name: "Kubernetes", icon: <SiKubernetes size={24} /> },
    { name: "GitHub Actions", icon: <SiGithubactions size={24} /> },
    { name: "CI/CD", icon: <FaProjectDiagram size={24} /> },
  ],
  "Other Tools & Skills": [
    { name: "Python Scripting", icon: <FaPython size={24} /> },
    { name: "Power BI", icon: <FaChartBar size={24} /> },
    { name: "Network Troubleshooting", icon: <FaTools size={24} /> },
    { name: "System Design", icon: <FaProjectDiagram size={24} /> },
    { name: "Project Management", icon: <FaProjectDiagram size={24} /> },
    { name: "Client Handling", icon: <FaProjectDiagram size={24} /> },
    { name: "Teaching", icon: <FaTools size={24} /> },
  ],
};

const SkillsSection = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-4 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 tracking-tight text-white">Core Capabilities</h2>
        <p className="mx-auto max-w-2xl text-gray-400">A modern overview of the tools, architectures, and problem domains I use every day.</p>
      </div>

      <div className="max-w-7xl mx-auto space-y-10">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white border-l-4 border-cyan-400 pl-3">
                {category}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3 text-cyan-200">
                    {skill.icon}
                    <span className="font-semibold text-white">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
