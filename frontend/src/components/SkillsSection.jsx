import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGit, FaNodeJs, FaFigma,
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiC, SiCplusplus,
  SiDjango, SiMysql, SiFirebase, SiSupabase,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={24} /> },
  { name: "CSS", icon: <FaCss3Alt size={24} /> },
  { name: "Javascript", icon: <FaJs size={24} /> },
  { name: "Typescript", icon: <SiTypescript size={24} /> },
  { name: "React.js", icon: <FaReact size={24} /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
  { name: "C Programming", icon: <SiC size={24} /> },
  { name: "C++", icon: <SiCplusplus size={24} /> },
  { name: "Python", icon: <FaPython size={24} /> },
  { name: "Django", icon: <SiDjango size={24} /> },
  { name: "MySQL", icon: <SiMysql size={24} /> },
  { name: "Git", icon: <FaGit size={24} /> },
  { name: "Firebase", icon: <SiFirebase size={24} /> },
  { name: "Supabase", icon: <SiSupabase size={24} /> },
  { name: "Node.js", icon: <FaNodeJs size={24} /> },
  { name: "Figma", icon: <FaFigma size={24} /> },
];

const SkillsSection = () => {
  return (
    <div className="bg-[#1b1d1f] text-white py-16 px-4 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">My Top Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border border-gray-600 rounded-md px-5 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            <div>{skill.icon}</div>
            <div className="font-medium">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
