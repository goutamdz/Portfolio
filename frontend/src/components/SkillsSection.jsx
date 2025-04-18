import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGit,
  FaJava,
  FaNodeJs,
  FaPhp
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiC,
  SiCplusplus,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
  SiAppwrite,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillsData = {
  "Programming Languages": [
    { name: "C Programming", icon: <SiC size={24} /> },
    { name: "C++", icon: <SiCplusplus size={24} /> },
    { name: "Python", icon: <FaPython size={24} /> },
    { name: "Javascript", icon: <FaJs size={24} /> },
    { name: "Typescript", icon: <SiTypescript size={24} /> },
    { name: "Java", icon: <FaJava size={24} /> },
    {name: "PHP", icon:<FaPhp size={24}/>}
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
    <div className="bg-[#1b1d1f] text-white py-16 px-4 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        My Top Skills
      </h2>
      <div className="max-w-6xl mx-auto space-y-8">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="flex items-center gap-4 border border-gray-600 rounded-md px-5 py-3 hover:bg-white hover:text-black transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: skillIndex * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div>{skill.icon}</div>
                  <div className="font-medium">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;