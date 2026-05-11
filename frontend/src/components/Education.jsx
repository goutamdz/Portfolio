import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard'
import school from "../assets/school.png"
import university from "../assets/university.png"
import Jharkhand from "../assets/Jharkhand.png"

const Education = () => {
  return (
    <section className="relative min-h-screen bg-[#05060f] text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(108,99,255,0.2),_transparent_40%),radial-gradient(circle_at_top_left,_rgba(14,203,129,0.1),_transparent_40%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Education</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Formal education and academic achievements in Computer Science.
          </p>
        </motion.div>

        <div className="space-y-8">
          <ExperienceCard 
            logo={university} 
            name={"Lovely Professional University, Punjab"} 
            grade={"B.Tech Computer Science Engineering • 8.11 CGPA"} 
            address={"Jalandhar, Punjab"} 
            startDate={"Aug 2022"} 
            endDate="present"
          />
          
          <ExperienceCard 
            logo={Jharkhand} 
            name={"Plus Two High School Atka"} 
            grade={"XII (PCM) • 93.2%"} 
            address={"Atka, Giridih, Jharkhand"} 
            startDate={"Aug 2020"} 
            endDate="July 2022"
          />

          <ExperienceCard 
            logo={school} 
            name={"UPG High School Bara"} 
            grade={"X • 86.2%"} 
            address={"Bishnugarh, Hazaribagh, Jharkhand"} 
            startDate={"Mar 2017"} 
            endDate="July 2020"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
