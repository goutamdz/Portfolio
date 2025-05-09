import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGit, FaJava, FaNodeJs, FaPhp
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiC, SiCplusplus,
  SiExpress, SiMysql, SiFirebase, SiSupabase, SiMongodb,
  SiPostgresql, SiAppwrite, SiDocker, SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Tooltip } from "react-tooltip";

const skillsData = {
  "Programming Languages": [
    { name: "C Programming", icon: <SiC size={24} /> },
    { name: "C++", icon: <SiCplusplus size={24} /> },
    { name: "Python", icon: <FaPython size={24} /> },
    { name: "Javascript", icon: <FaJs size={24} /> },
    { name: "Typescript", icon: <SiTypescript size={24} /> },
    { name: "Java", icon: <FaJava size={24} /> },
    { name: "PHP", icon: <FaPhp size={24} /> }
  ],
  "Frontend Technologies": [
    { name: "HTML", icon: <FaHtml5 size={24} /> },
    { name: "CSS", icon: <FaCss3Alt size={24} /> },
    { name: "React.js", icon: <FaReact size={24} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
  ],
  "Backend Technologies": [
    { name: "Node.js", icon: <FaNodeJs size={24} /> },
    { name: "Express.Js", icon: <SiExpress size={24} /> },
    { name: "MySQL", icon: <SiMysql size={24} /> },
    { name: "Firebase", icon: <SiFirebase size={24} /> },
    { name: "MongoDB", icon: <SiMongodb size={24} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
    { name: "Appwrite", icon: <SiAppwrite size={24} /> },
  ],
  "DevOps & Tools": [
    { name: "Git", icon: <FaGit size={24} /> },
    { name: "Docker", icon: <SiDocker size={24} /> },
    { name: "GitHub", icon: <SiGithub size={24} /> },
    { name: "VS Code", icon: <VscVscode size={24} /> },
  ],
};

const SkillsSection = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-4 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">🚀 My Top Skills</h2>
        <p className="text-gray-400">A showcase of my technical strengths and tools I work with</p>
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
              <h3 className="text-2xl font-semibold text-blue-400 border-l-4 border-blue-500 pl-3">
                {category}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="relative group bg-[#1e1e1e] rounded-xl p-4 flex items-center gap-3 border border-gray-700 hover:border-blue-400 hover:bg-[#2a2a2a] transition duration-300 shadow-sm"
                >
                  <div className="text-blue-400 group-hover:scale-110 transition duration-300">
                    {skill.icon}
                  </div>
                  <div className="font-medium">{skill.name}</div>
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
