import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import companyLogo from "../assets/MAQ_Software_logo.png";

const ExperienceSection = () => {
  return (
    <section className="relative bg-[#05060f] text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(108,99,255,0.2),_transparent_40%),radial-gradient(circle_at_top_left,_rgba(14,203,129,0.1),_transparent_40%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Professional experience highlighting the current role and responsibilities.
          </p>
        </motion.div>

        <div className="space-y-8">
          <ExperienceCard
            logo={companyLogo}
            name={"MAQ Software"}
            grade={"Associate Software Engineer"}
            address={"Noida, India"}
            startDate={"Nov 2025"}
            endDate="present"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
